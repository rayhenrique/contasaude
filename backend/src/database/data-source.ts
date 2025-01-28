import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { User } from '../users/entities/user.entity';
import { AdminUserSeeder } from './seeds/admin-user.seed';

const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: process.env.DB_HOST ?? 'localhost',
  port: parseInt(process.env.DB_PORT ?? '3306'),
  username: process.env.DB_USERNAME ?? 'root',
  password: process.env.DB_PASSWORD ?? 'root',
  database: process.env.DB_DATABASE ?? 'sistema_web',
  entities: [User],
  seeds: [AdminUserSeeder],
  synchronize: true, // Não use synchronize: true em produção!
};

export const AppDataSource = new DataSource(options); 