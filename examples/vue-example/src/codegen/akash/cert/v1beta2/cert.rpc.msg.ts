import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgCreateCertificateResponse, MsgCreateCertificateResponseSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType, MsgRevokeCertificateResponse, MsgRevokeCertificateResponseSDKType } from "./cert";
/** Msg defines the provider Msg service */
export interface Msg {
  /** CreateCertificate defines a method to create new certificate given proper inputs. */
  createCertificate(request: MsgCreateCertificate): Promise<MsgCreateCertificateResponse>;
  /** RevokeCertificate defines a method to revoke the certificate */
  revokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* CreateCertificate defines a method to create new certificate given proper inputs. */
  createCertificate = async (request: MsgCreateCertificate): Promise<MsgCreateCertificateResponse> => {
    const data = MsgCreateCertificate.encode(request).finish();
    const promise = this.rpc.request("akash.cert.v1beta2.Msg", "CreateCertificate", data);
    return promise.then(data => MsgCreateCertificateResponse.decode(new BinaryReader(data)));
  };
  /* RevokeCertificate defines a method to revoke the certificate */
  revokeCertificate = async (request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse> => {
    const data = MsgRevokeCertificate.encode(request).finish();
    const promise = this.rpc.request("akash.cert.v1beta2.Msg", "RevokeCertificate", data);
    return promise.then(data => MsgRevokeCertificateResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};