import path from 'path';

import { Config, useChain, useRegistry } from '../src';

beforeAll(async () => {
  const configFile = path.join(__dirname, '..', 'configs', 'starship.yaml');
  console.log(configFile);
  Config.setConfigFile = configFile;
  Config.setRegistry = await useRegistry(configFile);
});

describe('Test clients', () => {
  let client;

  beforeAll(async () => {
    const { getStargateClient } = useChain('cosmos');
    client = await getStargateClient();
  });

  it('check chain height', async () => {
    const height = await client.getHeight();

    expect(height).toBeGreaterThan(0);
  });
});
