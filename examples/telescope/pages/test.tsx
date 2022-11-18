import { cosmos } from '../codegen'

const client = await cosmos.ClientFactory.createRPCQueryHooks({ rpcEndpoint });
const data = client.cosmos.bank.v1beta1.useBalance({

})