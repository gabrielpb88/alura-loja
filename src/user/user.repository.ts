import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users = [];

  async findAll() {
    return this.users;
  }

  async save(user) {
    this.users.push(user);
    return user;
  }

  async findByEmail(email: string) {
    const result = this.users.find((user) => user.email === email);
    return result !== undefined;
  }
}
