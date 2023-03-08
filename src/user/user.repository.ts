import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async findAll() {
    return this.users;
  }

  async save(user: UserEntity) {
    this.users.push(user);
    return user;
  }

  async findByEmail(email: string) {
    const result = this.users.find((user) => user.email === email);
    return result !== undefined;
  }
}
