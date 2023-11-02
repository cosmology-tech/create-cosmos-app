FROM golang:1.21 as build-stage
WORKDIR /
RUN git clone https://github.com/fatal-fruit/neutrino
WORKDIR /neutrino
RUN go mod download
ENV LINK_STATICALLY=true
RUN CGO_ENABLED=0 make build # executable stored in /build/neutrinod

# Set up dependencies

#ENV PACKAGES curl make bash jq sed
# Install minimum necessary dependencies
#RUN apk-get add --no-cache $PACKAGES

ENV HOME=/neutronid-liveness
RUN ./build/neutrinod init liveness --chain-id neutrino-1 --default-denom uneutrino --home $HOME
RUN ./build/neutrinod config chain-id neutrino-1 --home $HOME
RUN ./build/neutrinod config keyring-backend test --home $HOME
RUN ./build/neutrinod keys add val --home $HOME --keyring-backend test
RUN ./build/neutrinod keys add alice --home $HOME  --keyring-backend test
RUN ./build/neutrinod keys add bob --home $HOME --keyring-backend test
RUN ./build/neutrinod genesis add-genesis-account val 10000000000000000000000000uneutrino --home $HOME --keyring-backend test
RUN ./build/neutrinod genesis add-genesis-account alice 1000000000000000000uneutrino --home $HOME --keyring-backend test
RUN ./build/neutrinod genesis add-genesis-account bob 1000000000000000000uneutrino --home $HOME --keyring-backend test
RUN ./build/neutrinod genesis gentx val 1000000000uneutrino --chain-id neutrino-1 --home $HOME --keyring-backend test
RUN ./build/neutrinod genesis collect-gentxs --home $HOME
RUN sed -i.bak'' 's/minimum-gas-prices = ""/minimum-gas-prices = "0.025uneutrino"/' $HOME/config/app.toml

FROM gcr.io/distroless/base-debian12 AS build-release-stage
WORKDIR /
ENV HOME=/neutronid-liveness
COPY --from=build-stage /neutrino/build/neutrinod /neutrinod
COPY --from=build-stage $HOME /neutronid-liveness

EXPOSE 8080
EXPOSE 80
CMD [ "/neutrinod", "start", "--home", "/neutronid-liveness" ]