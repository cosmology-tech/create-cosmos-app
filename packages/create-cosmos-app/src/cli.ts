import { createGitApp } from "./git-cca-template";
const createCosmosApp = createGitApp('https://github.com/cosmology-tech/create-cosmos-app.git');
export const cli = async (argv) => {
  await createCosmosApp(argv);
};
