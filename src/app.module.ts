import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserRepository } from './user/user.repository';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [UserController],
  providers: [UserRepository],
})
export class AppModule {}
