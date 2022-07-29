import { prompt } from './prompt';
import { Commands as commands } from './cmds';

export const cli = async (argv) => {
  const { cmd } = await prompt(
    [
      {
        _: true,
        type: 'fuzzy',
        name: 'cmd',
        message: 'what do you want to create?',
        choices: Object.keys(commands)
      }
    ],
    argv
  );
  if (typeof commands[cmd] === 'function') {
    await commands[cmd](argv);
  } else {
    console.log('command not found.');
  }
};
