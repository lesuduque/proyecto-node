import { Sequelize } from "sequelize";

export const dataBase = new Sequelize('crudfullstack', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

