import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserRepository } from './user/user.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository],
})
export class AppModule {}
