import { CCA_URL } from "./constants";
import { createGitApp } from "./git-cca-template";
export const cli = async (argv, version) => {
  const repo = argv.repo ?? CCA_URL;
  const createCosmosApp = createGitApp(repo, version);
  await createCosmosApp(argv);
};