const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const config = require('../config/config.json');
const unhandledError = require('cli-handle-unhandled');
const { Sequelize } = require('sequelize');

module.exports =  async (env) => {

	const sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, {
		host: config[env].host,
		dialect: config[env].dialect/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
	});

	try {
		await sequelize.authenticate();
		// console.log('Connection has been established successfully.');
		return sequelize;
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}

};
