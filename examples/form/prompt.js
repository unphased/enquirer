const Prompt = require('../../lib/prompts/form');
const prompt = new Prompt({
  name: 'user',
  message: 'Please provide the following information:',
  choices: [
    {
      name: 'firstname',
      message: 'First Name',
      initial: 'Jon'
    },
    {
      name: 'lastname',
      message: 'Last Name',
      initial: 'Schlinkert'
    },
    {
      name: 'username',
      message: 'GitHub username',
      initial: 'jonschlinkert'
    }
  ]
});

prompt.run()
  .then(answers => console.log('ANSWERS:', answers))
  .catch(console.error);