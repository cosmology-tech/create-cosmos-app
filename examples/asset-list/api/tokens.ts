import client from './client';
import { Token } from '../components/types';

const getTokens: () => Promise<Token[]> = () => client.get('/tokens/v2/all');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTokens,
};
