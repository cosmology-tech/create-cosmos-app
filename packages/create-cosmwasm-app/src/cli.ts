import { createGitApp } from "create-cosmos-app";
import { prompt } from "./prompt";
const createCosmosApp = createGitApp('https://github.com/cosmology-tech/create-cosmos-app.git');
export const cli = async (argv) => {
  argv.example = true;
  const { template } = await prompt([
    {
      type: 'list',
      name: 'template',
      message: 'Which template',
      choices: ['osmosis', 'juno', 'stargaze']
    }
  ], argv);

  argv.template = template;

  await createCosmosApp(argv);
};
