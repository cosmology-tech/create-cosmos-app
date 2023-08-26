import { denomToAsset, denomToExponent, getIbcInfo } from '../utils';

describe('denomToAsset()', () => {
  it('should return OSMO', () => {
    const denom =
      'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518';
    const symbol = denomToAsset('juno', denom)?.symbol;
    expect(symbol).toBe('OSMO');
  });

  it('should return ATOM', () => {
    const denom =
      'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9';
    const symbol = denomToAsset('juno', denom)?.symbol;
    expect(symbol).toBe('ATOM');
  });

  it('should return JUNO', () => {
    const denom = 'ujuno';
    const symbol = denomToAsset('juno', denom)?.symbol;
    expect(symbol).toBe('JUNO');
  });

  it('should return undefined', () => {
    const denom = 'ujuno';
    const symbol = denomToAsset('osmosis', denom)?.symbol;
    expect(symbol).toBeUndefined();
  });

  it('should return ION', () => {
    const denom = 'uion';
    const symbol = denomToAsset('osmosis', denom)?.symbol;
    expect(symbol).toBe('ION');
  });
});

describe('denomToExponent()', () => {
  it('should return 6', () => {
    const denom =
      'ibc/F6B367385300865F654E110976B838502504231705BAC0849B0651C226385885';
    expect(denomToExponent('juno', denom)).toBe(6);
  });

  it('should return 18', () => {
    const denom =
      'ibc/7E4A6EEFA0425CF99DE169A586D9BADF39C40153194CD6784BF8C9F6123BF5D0';
    expect(denomToExponent('juno', denom)).toBe(18);
  });

  it('should return 6', () => {
    const denom = 'ujuno';
    expect(denomToExponent('juno', denom)).toBe(6);
  });

  it('should return 6', () => {
    const denom = 'uion';
    expect(denomToExponent('osmosis', denom)).toBe(6);
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
