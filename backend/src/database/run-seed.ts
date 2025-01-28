import { runSeeders } from 'typeorm-extension';
import { AppDataSource } from './data-source';

const runSeeds = async () => {
  try {
    await AppDataSource.initialize();
    await runSeeders(AppDataSource);
    console.log('✅ Seed executada com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro ao executar seed:', error);
    process.exit(1);
  }
};

runSeeds(); 