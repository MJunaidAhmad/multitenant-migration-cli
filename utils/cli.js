const meow = require('meow');
const chalk = require('chalk');
const green = chalk.green;
const yellow = chalk.yellow;
const cyan = chalk.cyan;
const dim = chalk.dim;

module.exports = meow(
	`
	Usage
	  ${green(`node .\\index.js`)} ${cyan(`<command>`)} ${yellow(`[--option]`)}

	Commands
	  ${cyan(`run`)}         Run the Sequelize command provided in the option
	  ${cyan(`help`)}        Show help

	Options
		${yellow(`--db`)}, ${yellow(`--d`)}   	To specify the database from where we need to load tenant information. Supported values test,
				development or production as defined in the config/config.js
	  ${yellow(`--command`)}, ${yellow(`--c`)}      To specify the sequelize command to run. For now, supported value are 'db:migrate'

	Examples
	${green(`node .\\index.js`)} ${cyan(`run`)} ${yellow(`--db 'development'`)} ${yellow(`--command 'db:migrate'`)}
	${green(`node .\\index.js`)} ${cyan(`help`)}
`,
	{
		booleanDefault: undefined,
		hardRejection: false,
		inferType: false,
		flags: {
			db: {
				type: 'string',
				default: '',
				isRequired: true,
				alias: 'd'
			},
			command: {
				type: 'string',
				default: '',
				isRequired: true,
				alias: 'c'
			}
		}
	}
);
