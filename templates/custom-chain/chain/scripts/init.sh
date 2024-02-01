#!/bin/bash

rm -r ~/.minid || true
MINID_BIN="${MINID_BIN:=build/minid}"

CHAIN_ID="${CHAIN_ID:=demo}"
CHAIN_DIR="${CHAIN_DIR:=$HOME/.minid}"
DENOM="${DENOM:=mini}"

# configure minid
$MINID_BIN config set client chain-id demo
$MINID_BIN config set client keyring-backend test
$MINID_BIN keys add alice
$MINID_BIN keys add bob
$MINID_BIN init test --chain-id demo --default-denom mini
# update genesis
$MINID_BIN genesis add-genesis-account alice 10000000mini --keyring-backend test
$MINID_BIN genesis add-genesis-account bob 1000mini --keyring-backend test
# create default validator
$MINID_BIN genesis gentx alice 1000000mini --chain-id demo
$MINID_BIN genesis collect-gentxs

# Update configurations directly

echo "Update config.toml file"
sed -i -e 's#"tcp://127.0.0.1:26657"#"tcp://0.0.0.0:26657"#g' $CHAIN_DIR/config/config.toml
sed -i -e 's/index_all_keys = false/index_all_keys = true/g' $CHAIN_DIR/config/config.toml
sed -i -e 's/seeds = ".*"/seeds = ""/g' $CHAIN_DIR/config/config.toml
sed -i -e 's#cors_allowed_origins = \[\]#cors_allowed_origins = \["*"\]#g' $CHAIN_DIR/config/config.toml

echo "Update client.toml file"
sed -i -e 's#keyring-backend = "os"#keyring-backend = "test"#g' $CHAIN_DIR/config/client.toml
sed -i -e 's#output = "text"#output = "json"#g' $CHAIN_DIR/config/client.toml
sed -i -e "s#chain-id = \"\"#chain-id = \"$CHAIN_ID\"#g" $CHAIN_DIR/config/client.toml

echo "Update app.toml file"
sed -i -e "s#minimum-gas-prices = \".*\"#minimum-gas-prices = \"0$DENOM\"#g" $CHAIN_DIR/config/app.toml
sed -i -e "s#pruning = \".*\"#pruning = \"default\"#g" $CHAIN_DIR/config/app.toml
sed -i -e 's#enabled-unsafe-cors = false#enabled-unsafe-cors = true#g' $CHAIN_DIR/config/app.toml
sed -i -e 's#swagger = false#swagger = true#g' $CHAIN_DIR/config/app.toml
sed -i -e 's/enable-unsafe-cors = false/enable-unsafe-cors = true/g' $CHAIN_DIR/config/app.toml
sed -i -e 's/enabled-unsafe-cors = false/enabled-unsafe-cors = true/g' $CHAIN_DIR/config/app.toml

function get_next_line_number() {
  local txt=$1
  local file=$2
  local line_number=$(grep -n "$txt" $file | cut -d: -f1 | head -1)
  echo $((line_number + 1))
}

line_number=$(get_next_line_number "Enable defines if the API server should be enabled." $CHAIN_DIR/config/app.toml)
sed -i -e "${line_number}s/enable = false/enable = true/g" $CHAIN_DIR/config/app.toml

line_number=$(get_next_line_number "Address defines the API server to listen on." $CHAIN_DIR/config/app.toml)
sed -i -e "${line_number}s#address = \".*\"#address = \"tcp://0.0.0.0:1317\"#g" $CHAIN_DIR/config/app.toml

line_number=$(get_next_line_number "Enable defines if the gRPC server should be enabled." $CHAIN_DIR/config/app.toml)
sed -i -e "${line_number}s/enable = false/enable = true/g" $CHAIN_DIR/config/app.toml

line_number=$(get_next_line_number "Address defines the gRPC server address to bind to." $CHAIN_DIR/config/app.toml)
sed -i -e "${line_number}s#address = \".*\"#address = \"0.0.0.0:9090\"#g" $CHAIN_DIR/config/app.toml
