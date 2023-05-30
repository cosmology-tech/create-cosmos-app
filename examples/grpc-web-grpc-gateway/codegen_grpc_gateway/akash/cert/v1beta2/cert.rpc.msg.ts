import * as fm from "../../../grpc-gateway";
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgCreateCertificateResponse, MsgCreateCertificateResponseSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType, MsgRevokeCertificateResponse, MsgRevokeCertificateResponseSDKType } from "./cert";
export class Msg {
  /** CreateCertificate defines a method to create new certificate given proper inputs. */
  static createCertificate(request: MsgCreateCertificate, initRequest?: fm.InitReq): Promise<MsgCreateCertificateResponse> {
    return fm.fetchReq(`/akash.cert.v1beta2/createCertificate`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** RevokeCertificate defines a method to revoke the certificate */
  static revokeCertificate(request: MsgRevokeCertificate, initRequest?: fm.InitReq): Promise<MsgRevokeCertificateResponse> {
    return fm.fetchReq(`/akash.cert.v1beta2/revokeCertificate`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}