package order

import (
	"context"
	"encoding/json"
	"github.com/go-kit/kit/log"
	kithttp "github.com/go-kit/kit/transport/http"
	"github.com/gorilla/mux"
	"net/http"
	"github.com/go-kit/kit/examples/profilesvc"
	"github.com/go-kit/kit/ratelimit"
	"golang.org/x/time/rate"
	"time"
	"github.com/go-kit/kit/circuitbreaker"
	"github.com/sony/gobreaker"
)

func MakeHttpHandler(s IOrderService, logger log.Logger) http.Handler {
	router := mux.NewRouter()
	router = router.PathPrefix("/order").Subrouter()
	options := []kithttp.ServerOption{
		kithttp.ServerErrorLogger(logger),
	}

	getOrderEndpoint := MakeGetOrderEndpoint(s)
	getOrderEndpoint = ratelimit.NewErroringLimiter(rate.NewLimiter(rate.Every(time.Second), 1))(getOrderEndpoint)
	getOrderEndpoint = circuitbreaker.Gobreaker(gobreaker.NewCircuitBreaker(gobreaker.Settings{}))(getOrderEndpoint)
	addOrderEndpoint := MakeAddOrderEndpoint(s)
	addOrderEndpoint = ratelimit.NewErroringLimiter(rate.NewLimiter(rate.Every(time.Second), 1))(addOrderEndpoint)
	addOrderEndpoint = circuitbreaker.Gobreaker(gobreaker.NewCircuitBreaker(gobreaker.Settings{}))(addOrderEndpoint)
	router.Methods("GET").
		Path("/order/{id}").
		Handler(kithttp.NewServer(
		getOrderEndpoint,
		decodeGetOrderRequest,
		encodeResponse,
		options...,
	))

	router.Methods("POST").
		Path("/order").
		Handler(kithttp.NewServer(
		addOrderEndpoint,
		decodeAddOrderRequest,
		encodeResponse,
		options...,
	))

	return router
}

func decodeAddOrderRequest(ctx context.Context, r *http.Request) (request interface{}, err error) {
	var req GetOrderRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		return nil, err
	}
	return req, nil
}

func decodeGetOrderRequest(_ context.Context, r *http.Request) (request interface{}, err error) {
	vars := mux.Vars(r)
	id, ok := vars["id"]
	if !ok {
		return nil, profilesvc.ErrBadRouting
	}
	return GetOrderRequest{Id: id}, nil
}

func encodeResponse(_ context.Context, w http.ResponseWriter, response interface{}) error {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	return json.NewEncoder(w).Encode(response)
}