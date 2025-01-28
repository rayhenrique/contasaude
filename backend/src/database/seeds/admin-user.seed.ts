import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { User } from '../../users/entities/user.entity';
import { Role } from '../../auth/enums/role.enum';
import * as bcrypt from 'bcrypt';

export class AdminUserSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const userRepository = dataSource.getRepository(User);

    // Verifica se já existe um usuário admin
    const adminExists = await userRepository.findOne({
      where: { email: 'rayhenrique@gmail.com' }
    });

    if (!adminExists) {
      const user = new User();
      user.name = 'Ray Henrique da Silva';
      user.cpf = '068.867.154-37';
      user.email = 'rayhenrique@gmail.com';
      user.password = await bcrypt.hash('1508rcrc', 10);
      user.role = Role.ADMIN;
      user.isActive = true;

      await userRepository.save(user);
    }
  }
} 