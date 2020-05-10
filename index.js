#!/usr/bin/env node

const cli = require('./utils/cli.js');
const init = require('./utils/init.js');
const Sequelize = require('./utils/sequelize.js');
const { table, dialect, usernameColumn, passwordColumn, hostColumn, dbColumn } = require('./config/multitenant-table.js');
const config = require('./config/config.json');
const commands = require('./utils/commands.js');
const { exec } = require("child_process");
const [input] = cli.input;
const db = cli.flags.db;
const command = cli.flags.command;

// Let's do it.
(async () => {
	init();
	input === 'help' && (await cli.showHelp(0));

	if (input === "run" && config[db] && commands.includes(command)){
		let sequelize = await Sequelize(db);
		sequelize.query("select * from " + table, { type: sequelize.QueryTypes.SELECT })
			.then((result) => {
				for (const record of result) {
					// console.log(record);
					exec("npx sequelize-cli "+ command +" --url '" + dialect + "://" + record[usernameColumn] + ":" + record[passwordColumn] + "@" + record[hostColumn] + "/" + record[dbColumn] + "'", (error, stdout, stderr) => {
						if (error) {
							console.log(`error: ${error.message}`);
							// return;
						}
						if (stderr) {
							// console.log(`stderr: ${stderr}`);
							// return;
						}
						console.log(`${stdout}`);
					});
				}
			})
			.catch(error => {
				console.error("Error occurred while loading tenant mappings", error);
			});

	} else {
		console.log('This db config does not exist.');
	}

	// const notFound = `${sym.error} ${input}: not found.\n Consider contributing!`;

})();
