import { observer } from 'mobx-react-lite';
import { ToChain } from './ToChain';
import { FromChain } from './FromChain';
import store from '@/store';

export const IbcTransfer = observer(() => {
  return (
    <>
      <FromChain />
      {store.sourceAddress && <ToChain />}
    </>
  );
});
