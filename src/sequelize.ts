import { Sequelize } from 'sequelize-typescript';
import config from 'config';
import Users from './models/Users';
import Companies from './models/Companies';
import Employees from './models/Employees';

const dbConfig: any = config.get('database');

let logging: boolean | ((sql: string, timing?: number | undefined) => void) = false;
if (dbConfig.logging) {
    logging = (sql: string, timing?: number | undefined) => {
        console.log(sql);
    };
}

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    logging,
});

sequelize.addModels([Users, Companies, Employees]);

export default sequelize;
