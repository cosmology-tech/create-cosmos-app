#!/bin/bash

MINID_BIN="${MINID_BIN:=build/minid}"

$MINID_BIN start \
  --api.address "tcp://0.0.0.0:1317" \
  --api.enable \
  --api.enabled-unsafe-cors \
  --grpc.address "0.0.0.0:9090" \
  --grpc.enable \
  --rpc.laddr "tcp://0.0.0.0:26657" \
  --rpc.unsafe
