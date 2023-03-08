import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users = [];

  async findAll(): Promise<any[]> {
    return this.users;
  }

  async save(user) {
    this.users.push(user);
    return user;
  }
}
