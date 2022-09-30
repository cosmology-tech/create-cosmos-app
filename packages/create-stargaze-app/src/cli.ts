import { createGitApp } from "create-cosmos-app";
const createCosmosApp = createGitApp('https://github.com/cosmology-tech/create-cosmos-app.git');
export const cli = async (argv) => {
  argv.example = true;
  argv.template = 'stargaze';
  await createCosmosApp(argv);
};
