package order

import (
	"context"
	"errors"
	"github.com/go-kit/kit/endpoint"
	dm "sfai/algo-platform/krishna-scheduler/manager/data_manager"
	"time"
)

var (
	ERROR_TYPE_ASSERTION = errors.New("type assertion error!")
)

type GetOrderRequest struct {
	Id string `json:"id"`
}

type AddOrderRequest struct {
	route *Order
}

type CommonResponse struct {
	RequestId    string      `json:"requestId"`
	Success      bool        `json:"success"`
	Business     string      `json:"business"`
	ErrorCode    string      `json:"errorCode"`
	ErrorMessage string      `json:"errorMessage"`
	Date         string      `json:"date"`
	Version      string      `json:"version"`
	Obj          interface{} `json:"obj"`
}

func MakeGetOrderEndpoint(s IOrderService) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (response interface{}, err error) {
		if req, ok := request.(GetOrderRequest); ok {
			route, err := s.GetOrder(ctx, req.Id)
			if err != nil {
				return CommonResponse{
					Success:      false,
					Date:         time.Now().Format(dm.DATE_TIME_FORMAT),
					ErrorCode:    "",
					ErrorMessage: err.Error(),
					Version:      "v1",
				}, err
			}
			return CommonResponse{
				Success: true,
				Date:    time.Now().Format(dm.DATE_TIME_FORMAT),
				Version: "v1",
				Obj:     route,
			}, nil
		} else {
			return CommonResponse{
				Success:      false,
				Date:         time.Now().Format(dm.DATE_TIME_FORMAT),
				ErrorCode:    "",
				ErrorMessage: ERROR_TYPE_ASSERTION.Error(),
				Version:      "v1",
			}, ERROR_TYPE_ASSERTION
		}
	}
}

func MakeAddOrderEndpoint(s IOrderService) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (response interface{}, err error) {
		if req, ok := request.(AddOrderRequest); ok {
			err := s.Order(ctx, req.route)
			if err != nil {
				return CommonResponse{
					Success:      false,
					Date:         time.Now().Format(dm.DATE_TIME_FORMAT),
					ErrorCode:    "",
					ErrorMessage: err.Error(),
					Version:      "v1",
				}, err
			}
			return CommonResponse{
				Success: true,
				Date:    time.Now().Format(dm.DATE_TIME_FORMAT),
				Version: "v1",
			}, nil
		} else {
			return CommonResponse{
				Success:      false,
				Date:         time.Now().Format(dm.DATE_TIME_FORMAT),
				ErrorCode:    "",
				ErrorMessage: ERROR_TYPE_ASSERTION.Error(),
				Version:      "v1",
			}, ERROR_TYPE_ASSERTION
		}
	}
}
