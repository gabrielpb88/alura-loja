import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/createUserDTO';

@Controller('user')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Get()
  async findAll() {
    return this.userRepository.findAll();
  }

  @Post()
  async createUser(@Body() createUserDTO: CreateUserDTO) {
    return this.userRepository.save(createUserDTO);
  }
}
