import { Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post()
  async createUser(@Body() createUserDTO) {
    return createUserDTO;
  }
}
