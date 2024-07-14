"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
var typeorm_1 = require("typeorm");
var dotenv = require("dotenv");
dotenv.config();
exports.dataSourceOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT_NUMBER,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    logging: true,
    entities: [__dirname + '/../**/**.entity{.ts,.js}'],
    migrations: ['src/database/migrations/*{.ts,.js}'],
    migrationsRun: true,
    migrationsTableName: 'migrations',
};
var dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=config.js.map