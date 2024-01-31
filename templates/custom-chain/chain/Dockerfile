FROM golang:1.21-alpine

RUN apk add --no-cache ca-certificates build-base git curl make bash jq sed

WORKDIR /code

# Download dependencies and CosmWasm libwasmvm if found. Can add later
ADD go.mod go.sum ./

# Copy over code
COPY . /code

RUN make build
RUN cp /code/build/minid /usr/bin/minid

ENV MINID_BIN /usr/bin/minid

EXPOSE 1317 26656 26657

CMD [ "/bin/bash", "-c", "bash init.sh && bash start.sh" ]
