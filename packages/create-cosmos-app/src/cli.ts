import { prompt } from './prompt';
import { Templates as templates } from './cmds';

export const cli = async (argv) => {
  const { cmd } = await prompt(
    [
      {
        _: true,
        type: 'fuzzy',
        name: 'cmd',
        message: 'what do you want to create?',
        choices: Object.keys(templates)
      }
    ],
    argv
  );
  if (typeof templates[cmd] === 'function') {
    console.log(`calling ${cmd}`)
    await templates[cmd](argv);
  } else {
    console.log('command not found.');
  }
};
