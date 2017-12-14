package order

import (
	"fmt"
	"github.com/astaxie/beego/orm"
	kitlog "github.com/go-kit/kit/log"
	_ "github.com/go-sql-driver/mysql"
)

const (
	DEFAULT_MAX_IDLE_CONNS = 10
	DEFAULT_MAX_OPEN_CONNS = 100
)

type MysqlManager struct {
	Host     string
	Port     string
	Database string
	Username string
	Password string
	Logger   kitlog.Logger
}

type User struct {
	Id   int64  `json:"id" orm:"auto"`
	Name string `json:"name" orm:"column(name)"`
}

func (u *User) TableName() string {
	return "m_user"
}

func NewMysqlManager(host, port, database, username, password string, logger kitlog.Logger) *MysqlManager {
	mysqlMgr := &MysqlManager{
		Host:     host,
		Port:     port,
		Database: database,
		Username: username,
		Password: password,
		Logger:logger,
	}
	mysqlMgr.init()
	return mysqlMgr
}

func (mm *MysqlManager) init() {
	orm.RegisterDriver("mysql", orm.DRMySQL)
	ds := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8", mm.Username, mm.Password, mm.Host, mm.Port, mm.Database)
	err := orm.RegisterDataBase("default", "mysql", ds, DEFAULT_MAX_IDLE_CONNS, DEFAULT_MAX_OPEN_CONNS)
	if err != nil {
		panic(err)
	}
	mm.Logger.Log("Database initialize complete")
	orm.RegisterModel(new(User))
}

func (mm *MysqlManager) AddUser(user *User) (int64, error) {
	o := orm.NewOrm()
	id, err := o.Insert(user)
	return id, err
}
