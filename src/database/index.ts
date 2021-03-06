import { Sequelize, Options } from 'sequelize';

import Address from '@models/Address';

import database from '../configurations/database';

const connection = new Sequelize(database as Options);

Address.initialize(connection);

export default connection;
