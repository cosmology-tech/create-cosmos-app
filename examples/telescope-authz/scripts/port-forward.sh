#!/bin/bash

set -euo pipefail

function color() {
  local color=$1
  shift
  local black=30 red=31 green=32 yellow=33 blue=34 magenta=35 cyan=36 white=37
  local color_code=${!color:-$green}
  printf "\033[%sm%s\033[0m\n" "$color_code" "$*"
}

function stop_port_forward() {
  color green "Trying to stop all port-forward, if any...."
  PIDS=$(ps -ef | grep -i -e 'kubectl port-forward' | grep -v 'grep' | cat | awk '{print $2}') || true
  for p in $PIDS; do
    kill -15 $p
  done
  sleep 2
}

# Default values
CHAIN_RPC_PORT=26657
CHAIN_LCD_PORT=1317
CHAIN_EXPOSER_PORT=8081
CHAIN_FAUCET_PORT=8000
EXPLORER_LCD_PORT=8080
REGISTRY_LCD_PORT=8080
REGISTRY_GRPC_PORT=9090

for i in "$@"; do
  case $i in
    -c=*|--config=*)
      CONFIGFILE="${i#*=}"
      shift # past argument=value
      ;;
    -*|--*)
      echo "Unknown option $i"
      exit 1
      ;;
    *)
      ;;
  esac
done

stop_port_forward

echo "Port forwarding for config ${CONFIGFILE}"
echo "Port forwarding all chains"
num_chains=$(yq -r ".chains | length - 1" ${CONFIGFILE})
if [[ $num_chains -lt 0 ]]; then
  echo "No chains to port-forward: num: $num_chains"
  exit 1
fi
for i in $(seq 0 $num_chains); do
  chain=$(yq -r ".chains[$i].name" ${CONFIGFILE} )
  localrpc=$(yq -r ".chains[$i].ports.rpc" ${CONFIGFILE} )
  locallcd=$(yq -r ".chains[$i].ports.rest" ${CONFIGFILE} )
  localexp=$(yq -r ".chains[$i].ports.exposer" ${CONFIGFILE})
  localfaucet=$(yq -r ".chains[$i].ports.faucet" ${CONFIGFILE})
  [[ "$localrpc" != "null" ]] && kubectl port-forward pods/$chain-genesis-0 $localrpc:$CHAIN_RPC_PORT > /dev/null 2>&1 &
  [[ "$locallcd" != "null" ]] && kubectl port-forward pods/$chain-genesis-0 $locallcd:$CHAIN_LCD_PORT > /dev/null 2>&1 &
  [[ "$localexp" != "null" ]] && kubectl port-forward pods/$chain-genesis-0 $localexp:$CHAIN_EXPOSER_PORT > /dev/null 2>&1 &
  [[ "$localfaucet" != "null" ]] && kubectl port-forward pods/$chain-genesis-0 $localfaucet:$CHAIN_FAUCET_PORT > /dev/null 2>&1 &
  sleep 1
  color yellow "chains: forwarded $chain lcd to http://localhost:$locallcd, rpc to http://localhost:$localrpc, faucet to http://localhost:$localfaucet"
done

echo "Port forward services"

if [[ $(yq -r ".registry.enabled" $CONFIGFILE) == "true" ]];
then
  kubectl port-forward service/registry 8081:$REGISTRY_LCD_PORT > /dev/null 2>&1 &
  kubectl port-forward service/registry 9091:$REGISTRY_GRPC_PORT > /dev/null 2>&1 &
  sleep 1
  color yellow "registry: forwarded registry lcd to grpc http://localhost:8081, to http://localhost:9091"
fi

if [[ $(yq -r ".explorer.enabled" $CONFIGFILE) == "true" ]];
then
  kubectl port-forward service/explorer 8080:$EXPLORER_LCD_PORT > /dev/null 2>&1 &
  sleep 1
  color green "Open the explorer to get started.... http://localhost:8080"
fi
