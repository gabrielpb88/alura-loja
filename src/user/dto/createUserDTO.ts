import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { IsEmailUnique } from '../validation/isEmailUnique.validator';

export class CreateUserDTO {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsEmailUnique({ message: 'E-mail already in use.' })
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
