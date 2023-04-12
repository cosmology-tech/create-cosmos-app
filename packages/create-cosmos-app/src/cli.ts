import { createGitApp } from "./git-cca-template";
export const cli = async (argv) => {
  const url = argv.repo ?? 'https://github.com/cosmology-tech/create-cosmos-app.git';
  const createCosmosApp = createGitApp(url);
  await createCosmosApp(argv);
};