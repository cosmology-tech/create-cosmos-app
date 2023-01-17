import {
  denomToAsset,
  denomToExponent,
} from '../components/react/ibc-transfer';
import { getIbcInfo } from '../components/react/input-fields';

describe('denomToAsset()', () => {
  it('should return Osmosis', () => {
    expect(
      denomToAsset(
        'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B'
      ).name
    ).toBe('Osmosis');
  });

  it('should return Cosmos Hub Atom', () => {
    expect(
      denomToAsset(
        'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
      ).name
    ).toBe('Cosmos Hub Atom');
  });
});

describe('denomToExponent()', () => {
  it('should return 6', () => {
    expect(
      denomToExponent(
        'ibc/1849A429022CBAAB619074CA4412D0016F262218BE6DD828BA8A3DD97D6B52BB'
      )
    ).toBe(6);
  });

  it('should return 18', () => {
    expect(
      denomToExponent(
        'ibc/3B3D6D224E3B1BD8BEE2B2763966F4E8784EFD871C7F26CA3305D6B2C4E3BC7E'
      )
    ).toBe(18);
  });
});

describe('getIbcInfo()', () => {
  it('should return channel-2', () => {
    expect(getIbcInfo('agoric', 'crescent').sourceChannel).toBe('channel-2');
  });

  it('should return channel-11', () => {
    expect(getIbcInfo('crescent', 'agoric').sourceChannel).toBe('channel-11');
  });
});
