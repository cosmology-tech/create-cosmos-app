BRANCH := $(shell git rev-parse --abbrev-ref HEAD)
COMMIT := $(shell git log -1 --format='%H')

# don't override user values
ifeq (,$(VERSION))
  VERSION := $(shell git describe --exact-match 2>/dev/null)
  # if VERSION is empty, then populate it with branch's name and raw commit hash
  ifeq (,$(VERSION))
    VERSION := $(BRANCH)-$(COMMIT)
  endif
endif

# Update the ldflags with the app, client & server names
ldflags = -X github.com/cosmos/cosmos-sdk/version.Name=mini \
	-X github.com/cosmos/cosmos-sdk/version.AppName=minid \
	-X github.com/cosmos/cosmos-sdk/version.Version=$(VERSION) \
	-X github.com/cosmos/cosmos-sdk/version.Commit=$(COMMIT)

BUILD_FLAGS := -ldflags '$(ldflags)'

###########
# Install #
###########

all: install

.PHONY: build
build:
	@go build $(BUILD_FLAGS) -mod=readonly -o build/minid ./cmd/minid

.PHONY: install
install:
	@echo "--> ensure dependencies have not been modified"
	@go mod verify
	@echo "--> installing minid"
	@go install $(BUILD_FLAGS) -mod=readonly ./cmd/minid

.PHONY: init
init:
	./scripts/init.sh


###################
# Docker commands #
###################

DOCKER=$(shell which docker)
DOCKER_NAME=minid
DOCKER_TAG=latest

.PHONY: docker-build
docker-build:
	$(DOCKER) buildx build -t $(DOCKER_NAME):$(DOCKER_TAG) .

.PHONY: docker-run-shell
docker-run-shell:
	$(DOCKER) run --rm -it --entrypoint="/bin/bash" $(DOCKER_NAME):$(DOCKER_TAG)

.PHONY: docker-run
docker-run:
	$(DOCKER) run --rm -it -p 1317:1317 -p 26657:26657 $(DOCKER_NAME):$(DOCKER_TAG)

docker-build-run: docker-build docker-run
