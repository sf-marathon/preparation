package main

import (
"flag"
"fmt"
or "preparathon/order"
kitlog "github.com/go-kit/kit/log"
"net/http"
"os"
"os/signal"
"syscall"
)

func main() {
	var (
		msyql        =flag.String("mysqlUrl","localhost:3306","")
		httpAddr      = flag.String("addr", ":8848", "The address of listen and serve")
	)
	flag.Parse()
	var logger kitlog.Logger
	logger = kitlog.NewJSONLogger(os.Stderr)
	var orderDao or.IOrderDao
	var orderService or.IOrderService
	errs := make(chan error)
	var err error
	orderDao, err = or.NewOrderDao(*msyql,"" ,logger)
	if err != nil {
		errs <- err
	}
	orderService =or.NewOrderService(orderDao)
	httpHandler := or.MakeHttpHandler(orderService, logger)
	go func() {
		c := make(chan os.Signal)
		signal.Notify(c, syscall.SIGINT, syscall.SIGTERM)
		errs <- fmt.Errorf("%s", <-c)
	}()
	go func() {
		logger.Log("transport", "HTTP", "addr", *httpAddr)
		errs <- http.ListenAndServe(*httpAddr, httpHandler)
	}()
	logger.Log("exit:", <-errs)
}

