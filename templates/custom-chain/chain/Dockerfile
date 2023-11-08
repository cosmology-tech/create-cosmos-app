FROM golang:1.21-alpine AS go-builder

RUN apk add --no-cache ca-certificates build-base git

WORKDIR /code

# Download dependencies and CosmWasm libwasmvm if found.
ADD go.mod go.sum ./

# Copy over code
COPY . /code

RUN make build

# --------------------------------------------------------
FROM alpine:3.16

COPY --from=go-builder /code/build/minid /usr/bin/minid
COPY --from=go-builder /code/scripts/init.sh /opt/init.sh
COPY --from=go-builder /code/scripts/start.sh /opt/start.sh

ENV MINID_BIN /usr/bin/minid

# Install dependencies
RUN apk add --no-cache curl make bash jq sed

WORKDIR /opt

# rest server, tendermint p2p, tendermint rpc
EXPOSE 1317 26656 26657

CMD [ "/bin/bash", "-c", "bash init.sh && bash start.sh" ]
