/* eslint-disable */
import { DeploymentID, DeploymentIDSDKType } from "./deployment";
import { GroupSpec, GroupSpecSDKType } from "./groupspec";
import { Coin, CoinSDKType, DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GroupID, GroupIDSDKType } from "./groupid";
import { AminoMsg } from "@cosmjs/amino";
import { PlacementRequirements, PlacementRequirementsSDKType, SignedBy, SignedBySDKType, Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import { Resource, ResourceSDKType } from "./resource";
import { ResourceUnits, ResourceUnitsSDKType } from "../../base/v1beta2/resourceunits";
import { CPU, CPUSDKType, Memory, MemorySDKType, Storage, StorageSDKType } from "../../base/v1beta2/resource";
import { ResourceValue, ResourceValueSDKType } from "../../base/v1beta2/resourcevalue";
import { Endpoint, EndpointSDKType, endpoint_KindFromJSON } from "../../base/v1beta2/endpoint";
import { MsgCreateDeployment, MsgCreateDeploymentSDKType, MsgDepositDeployment, MsgDepositDeploymentSDKType, MsgUpdateDeployment, MsgUpdateDeploymentSDKType, MsgCloseDeployment, MsgCloseDeploymentSDKType } from "./deploymentmsg";
import { MsgCloseGroup, MsgCloseGroupSDKType, MsgPauseGroup, MsgPauseGroupSDKType, MsgStartGroup, MsgStartGroupSDKType } from "./groupmsg";
export interface MsgCreateDeploymentAminoType extends AminoMsg {
  type: "akash/deployment/v1beta2/testonly-create-deployment";
  value: {
    id: {
      owner: string;
      dseq: string;
    };
    groups: {
      name: string;
      requirements: {
        signed_by: {
          all_of: string[];
          any_of: string[];
        };
        attributes: {
          key: string;
          value: string;
        }[];
      };
      resources: {
        resources: {
          cpu: {
            units: {
              val: Uint8Array;
            };
            attributes: {
              key: string;
              value: string;
            }[];
          };
          memory: {
            quantity: {
              val: Uint8Array;
            };
            attributes: {
              key: string;
              value: string;
            }[];
          };
          storage: {
            name: string;
            quantity: {
              val: Uint8Array;
            };
            attributes: {
              key: string;
              value: string;
            }[];
          }[];
          endpoints: {
            kind: number;
            sequence_number: number;
          }[];
        };
        count: number;
        price: {
          denom: string;
          amount: string;
        };
      }[];
    }[];
    version: Uint8Array;
    deposit: {
      denom: string;
      amount: string;
    };
    depositor: string;
  };
}
export interface MsgDepositDeploymentAminoType extends AminoMsg {
  type: "akash/deployment/v1beta2/testonly-deposit-deployment";
  value: {
    id: {
      owner: string;
      dseq: string;
    };
    amount: {
      denom: string;
      amount: string;
    };
    depositor: string;
  };
}
export interface MsgUpdateDeploymentAminoType extends AminoMsg {
  type: "akash/deployment/v1beta2/testonly-update-deployment";
  value: {
    id: {
      owner: string;
      dseq: string;
    };
    version: Uint8Array;
  };
}
export interface MsgCloseDeploymentAminoType extends AminoMsg {
  type: "akash/deployment/v1beta2/testonly-close-deployment";
  value: {
    id: {
      owner: string;
      dseq: string;
    };
  };
}
export interface MsgCloseGroupAminoType extends AminoMsg {
  type: "akash/deployment/v1beta2/testonly-close-group";
  value: {
    id: {
      owner: string;
      dseq: string;
      gseq: number;
    };
  };
}
export interface MsgPauseGroupAminoType extends AminoMsg {
  type: "akash/deployment/v1beta2/testonly-pause-group";
  value: {
    id: {
      owner: string;
      dseq: string;
      gseq: number;
    };
  };
}
export interface MsgStartGroupAminoType extends AminoMsg {
  type: "akash/deployment/v1beta2/testonly-start-group";
  value: {
    id: {
      owner: string;
      dseq: string;
      gseq: number;
    };
  };
}
export const AminoConverter = {
  "/akash.deployment.v1beta2.MsgCreateDeployment": {
    aminoType: "akash/deployment/v1beta2/testonly-create-deployment",
    toAmino: ({
      id,
      groups,
      version,
      deposit,
      depositor
    }: MsgCreateDeployment): MsgCreateDeploymentAminoType["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString()
        },
        groups: groups.map(el0 => ({
          name: el0.name,
          requirements: {
            signed_by: {
              all_of: el0.requirements.signedBy.allOf,
              any_of: el0.requirements.signedBy.anyOf
            },
            attributes: el0.requirements.attributes.map(el1 => ({
              key: el1.key,
              value: el1.value
            }))
          },
          resources: el0.resources.map(el1 => ({
            resources: {
              cpu: {
                units: {
                  val: el1.resources.cpu.units.val
                },
                attributes: el1.resources.cpu.attributes.map(el2 => ({
                  key: el2.key,
                  value: el2.value
                }))
              },
              memory: {
                quantity: {
                  val: el1.resources.memory.quantity.val
                },
                attributes: el1.resources.memory.attributes.map(el2 => ({
                  key: el2.key,
                  value: el2.value
                }))
              },
              storage: el1.resources.storage.map(el2 => ({
                name: el2.name,
                quantity: {
                  val: el2.quantity.val
                },
                attributes: el2.attributes.map(el3 => ({
                  key: el3.key,
                  value: el3.value
                }))
              })),
              endpoints: el1.resources.endpoints.map(el2 => ({
                kind: el2.kind,
                sequence_number: el2.sequenceNumber
              }))
            },
            count: el1.count,
            price: {
              denom: el1.price.denom,
              amount: el1.price.amount
            }
          }))
        })),
        version,
        deposit: {
          denom: deposit.denom,
          amount: deposit.amount
        },
        depositor
      };
    },
    fromAmino: ({
      id,
      groups,
      version,
      deposit,
      depositor
    }: MsgCreateDeploymentAminoType["value"]): MsgCreateDeployment => {
      return {
        id: {
          owner: id.owner,
          dseq: BigInt(id.dseq)
        },
        groups: groups.map(el0 => ({
          name: el0.name,
          requirements: {
            signedBy: {
              allOf: el0.requirements.signed_by.all_of,
              anyOf: el0.requirements.signed_by.any_of
            },
            attributes: el0.requirements.attributes.map(el2 => ({
              key: el2.key,
              value: el2.value
            }))
          },
          resources: el0.resources.map(el1 => ({
            resources: {
              cpu: {
                units: {
                  val: el1.resources.cpu.units.val
                },
                attributes: el1.resources.cpu.attributes.map(el4 => ({
                  key: el4.key,
                  value: el4.value
                }))
              },
              memory: {
                quantity: {
                  val: el1.resources.memory.quantity.val
                },
                attributes: el1.resources.memory.attributes.map(el4 => ({
                  key: el4.key,
                  value: el4.value
                }))
              },
              storage: el1.resources.storage.map(el3 => ({
                name: el3.name,
                quantity: {
                  val: el3.quantity.val
                },
                attributes: el3.attributes.map(el4 => ({
                  key: el4.key,
                  value: el4.value
                }))
              })),
              endpoints: el1.resources.endpoints.map(el3 => ({
                kind: endpoint_KindFromJSON(el3.kind),
                sequenceNumber: el3.sequence_number
              }))
            },
            count: el1.count,
            price: {
              denom: el1.price.denom,
              amount: el1.price.amount
            }
          }))
        })),
        version,
        deposit: {
          denom: deposit.denom,
          amount: deposit.amount
        },
        depositor
      };
    }
  },
  "/akash.deployment.v1beta2.MsgDepositDeployment": {
    aminoType: "akash/deployment/v1beta2/testonly-deposit-deployment",
    toAmino: ({
      id,
      amount,
      depositor
    }: MsgDepositDeployment): MsgDepositDeploymentAminoType["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString()
        },
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        depositor
      };
    },
    fromAmino: ({
      id,
      amount,
      depositor
    }: MsgDepositDeploymentAminoType["value"]): MsgDepositDeployment => {
      return {
        id: {
          owner: id.owner,
          dseq: BigInt(id.dseq)
        },
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        depositor
      };
    }
  },
  "/akash.deployment.v1beta2.MsgUpdateDeployment": {
    aminoType: "akash/deployment/v1beta2/testonly-update-deployment",
    toAmino: ({
      id,
      version
    }: MsgUpdateDeployment): MsgUpdateDeploymentAminoType["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString()
        },
        version
      };
    },
    fromAmino: ({
      id,
      version
    }: MsgUpdateDeploymentAminoType["value"]): MsgUpdateDeployment => {
      return {
        id: {
          owner: id.owner,
          dseq: BigInt(id.dseq)
        },
        version
      };
    }
  },
  "/akash.deployment.v1beta2.MsgCloseDeployment": {
    aminoType: "akash/deployment/v1beta2/testonly-close-deployment",
    toAmino: ({
      id
    }: MsgCloseDeployment): MsgCloseDeploymentAminoType["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString()
        }
      };
    },
    fromAmino: ({
      id
    }: MsgCloseDeploymentAminoType["value"]): MsgCloseDeployment => {
      return {
        id: {
          owner: id.owner,
          dseq: BigInt(id.dseq)
        }
      };
    }
  },
  "/akash.deployment.v1beta2.MsgCloseGroup": {
    aminoType: "akash/deployment/v1beta2/testonly-close-group",
    toAmino: ({
      id
    }: MsgCloseGroup): MsgCloseGroupAminoType["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString(),
          gseq: id.gseq
        }
      };
    },
    fromAmino: ({
      id
    }: MsgCloseGroupAminoType["value"]): MsgCloseGroup => {
      return {
        id: {
          owner: id.owner,
          dseq: BigInt(id.dseq),
          gseq: id.gseq
        }
      };
    }
  },
  "/akash.deployment.v1beta2.MsgPauseGroup": {
    aminoType: "akash/deployment/v1beta2/testonly-pause-group",
    toAmino: ({
      id
    }: MsgPauseGroup): MsgPauseGroupAminoType["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString(),
          gseq: id.gseq
        }
      };
    },
    fromAmino: ({
      id
    }: MsgPauseGroupAminoType["value"]): MsgPauseGroup => {
      return {
        id: {
          owner: id.owner,
          dseq: BigInt(id.dseq),
          gseq: id.gseq
        }
      };
    }
  },
  "/akash.deployment.v1beta2.MsgStartGroup": {
    aminoType: "akash/deployment/v1beta2/testonly-start-group",
    toAmino: ({
      id
    }: MsgStartGroup): MsgStartGroupAminoType["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString(),
          gseq: id.gseq
        }
      };
    },
    fromAmino: ({
      id
    }: MsgStartGroupAminoType["value"]): MsgStartGroup => {
      return {
        id: {
          owner: id.owner,
          dseq: BigInt(id.dseq),
          gseq: id.gseq
        }
      };
    }
  }
};