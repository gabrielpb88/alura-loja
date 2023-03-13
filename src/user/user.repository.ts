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

  async update(id, user: Partial<UserEntity>) {
    const userFound = this.findById(id);
    if (!userFound) {
      throw Error('User not found!');
    }

    Object.entries(user).forEach(([key, value]) => {
      if (key === 'id') return;
      userFound[key] = value;
    });
  }

  private findById(id: string) {
    return this.users.find((user) => user.id === id);
  }

  async remove(id: string) {
    const userExists = this.findById(id);
    if (!userExists) {
      throw Error('User not found');
    }
    this.users = this.users.filter((user) => user.id !== id);
  }
}
