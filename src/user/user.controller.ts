import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/createUserDTO';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';

@Controller('user')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Get()
  async findAll() {
    return this.userRepository.findAll();
  }

  @Post()
  async createUser(@Body() createUserDTO: CreateUserDTO) {
    const entity = new UserEntity();
    Object.entries(([key, value]) => (entity[key] = value));
    entity.id = uuid();
    await this.userRepository.save(entity);
    return { status: HttpStatus.CREATED };
  }
}
