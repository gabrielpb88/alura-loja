import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/createUserDTO';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { GetUsersDTO } from './dto/getUsersDTO';
import { UpdateUserDTO } from './dto/updateUserDTO';

@Controller('user')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Get()
  async findAll() {
    const users = await this.userRepository.findAll();
    return users.map((user) => new GetUsersDTO(user.id, user.name));
  }

  @Post()
  async createUser(@Body() createUserDTO: CreateUserDTO) {
    const entity = new UserEntity();
    Object.entries(createUserDTO).map(([key, value]) => (entity[key] = value));
    entity.id = uuid();
    return this.userRepository.save(entity);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() updateUserDTO: UpdateUserDTO) {
    return this.userRepository.update(id, updateUserDTO);
  }
}
