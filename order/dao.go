package order

import (
	kitlog "github.com/go-kit/kit/log"
)

/**
*Author:hanyajun
*Time:12/14/17 3:56 PM
*Discription:
**/

type Order struct {
}
type IOrderDao interface {
	Select(id string) (*Order, error)
	Insert(order *Order) error
}
type OrderDao struct {
	MysqlUrl string
	Database   string
	log        kitlog.Logger
}

func NewOrderDao(mysql string, database string, log kitlog.Logger) (*OrderDao, error) {
	orderDao := &OrderDao{
		MysqlUrl: mysql,
		Database:   database,
		log:        log,
	}

	return orderDao, nil
}

func (m *OrderDao) Insert(r *Order) error {

	return nil
}

func (m *OrderDao) Select(id string) (*Order, error) {
	route := Order{}

	return &route, nil
}
