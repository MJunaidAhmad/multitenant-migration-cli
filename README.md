<h4 align="center">

## Problem Statement

When running a multi-tenant application i.e. one databse per tenant, it is hard to manage database structure of each tenant database seperately.
Altough Sequelize provide us with a great option of migrations & seeders but it does not support the multi-tenant option out the box because every system can have a different approach to implement multi-tenancy.

## Solution

This package is a cli base wrapper written on the top of the sequelize cli.

## Supported Usecase

Following use case are supported for now:
1. You need to have a master database where we need a table named as "tenants" with the following columns: username, password, db, host.
   You need to have the information decsribed above for every tenant database.
   You can clone this repo and run npm install.

 More will be added soon...

</h4>

<br>

## migration-cli

- 🚀 Supports sequelize commands out of the box
- 🤯 Supports mysql, Postgres, Microsoft SQL Server, Sqlite, mariadb
- 📟 Sequelize cli output reporting

<br>

## Install

```sh
# Clone this repo:
git clone https://github.com/MJunaidAhmad/multitenant-migration-cli.git

# cd to the clonned repo folder:
cd multitenant-migration-cli-master

# Install npm modules:
npm install

# Run this command in the clonned folder:
node index.js help
```
<br>

## sequelize connection setup
You can define your master database connection settings in config/config.json file.


## Usage
    node index.js <command> [--option]

## Commands
    run         Run the Sequelize command provided in the option
    help        Show help

## Options
        --db, --d       To specify the database from where we need to load tenant information. Supported values test,
                        development or production as defined in the config/config.js
    --command, --c      To specify the sequelize command to run. For now, supported value are:
    			'db:migrate'
                        'db: migrate: undo'
                        'db: migrate: undo: all'
                        'db: seed: all'
                        'db: seed: undo'
                        'db: seed: undo: all'

## Examples
    node index.js run --db 'development' --command 'db:migrate'
	 
But in a real world scenario you may want to create a migration first using sequelize-cli e.g. ```sequelize migration:create --name sometablename```
  
#### CLI Help

```sh
# Display the help data.
    node index.js help
```

<br>

## Changelog

Soon to be updated!

<br>

## Roadmap
1. Support better error handling.
2. Run a migration to only specified tenant rather than every tenant.
3. Advance options for migrations e.g storage, dialect options.
4. Migration status of every tenant i.e. how many migrations have been run on this tenants.
5. Support --to (sequelize-cli) option for migrations & seeders.
6. Support --except (custom) option for running migrations except specified tenants.
7. Support to load tenants credentials from json file, api or redis rather than database.
8. Support to check if every database is up to date with migrations.

Feel free to create an issue if you have something in your mind related to this package.

<br>

## License & Conduct

- MIT © [Junaid Ahmad](https://twitter.com/junaidahmad_12/)
- [Code of Conduct](code-of-conduct.md)

### Sources

<ol>
    <li id="ref-1">
        <a href="https://sequelize.org/master/index.html"
            >Sequelize CLI</a>
    </li>
</ol>

<br>

## Connect

<div align="left">
    <p><a href="https://github.com/mjunaidahmad"><img alt="GitHub @mjunaidahmad" align="center" src="https://img.shields.io/badge/GITHUB-gray.svg?colorB=6cc644&colorA=6cc644&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> </small></p>
    <p><a href="https://twitter.com/MrAhmadAwais/"><img alt="Twitter @junaidahnmad_12" align="center" src="https://img.shields.io/badge/TWITTER-gray.svg?colorB=1da1f2&colorA=1da1f2&style=flat" /></a>&nbsp;<small><strong>(follow)</strong></small></p>
    <p><a href="https://www.linkedin.com/in/junaidahmad-/"><img alt="LinkedIn @JunaidAhmad" align="center" src="https://img.shields.io/badge/LINKEDIN-gray.svg?colorB=0077b5&colorA=0077b5&style=flat" /></a>&nbsp;<small><strong>(connect)</strong> On the LinkedIn profile y'all</small></p>
</div>

### Tags
Multi-tenant Multitenant Multi-tenancy Multitenancy Nodejs Multi-tenancy with sequelize & Nodejs Migrations for Multitenant System
