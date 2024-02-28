HELM_NAME = telescope-starship
HELM_FILE = configs/starship.yaml
HELM_REPO = starship
HELM_CHART = devnet
HELM_VERSION = v0.1.47

###############################################################################
###                              All commands                               ###
###############################################################################

.PHONY: setup
setup: check

.PHONY: test
test:
	yarn run e2e:test

.PHONY: stop
stop: stop-forward delete

.PHONY: clean
clean: stop clean-kind

###############################################################################
###                              Helm commands                              ###
###############################################################################

.PHONY: install
install:
	bash $(CURDIR)/scripts/install.sh --config $(HELM_FILE) --version $(HELM_VERSION) --name $(HELM_NAME)

.PHONY: debug
debug:
	bash $(CURDIR)/scripts/install.sh --config $(HELM_FILE) --version $(HELM_VERSION) --name $(HELM_NAME) --dry-run

.PHONY: delete
delete:
	-helm delete $(HELM_NAME)

###############################################################################
###                                 Port forward                            ###
###############################################################################

.PHONY: port-forward
port-forward:
	bash $(CURDIR)/scripts/port-forward.sh --config=$(HELM_FILE)

.PHONY: stop-forward
stop-forward:
	-pkill -f "port-forward"

###############################################################################
###                          Local Kind Setup                               ###
###############################################################################
KIND_CLUSTER=starship

.PHONY: check
check:
	bash $(CURDIR)/scripts/dev-setup.sh

.PHONY: setup-kind
setup-kind:
	kind create cluster --name $(KIND_CLUSTER)

.PHONY: clean-kind
clean-kind:
	kind delete cluster --name $(KIND_CLUSTER)
