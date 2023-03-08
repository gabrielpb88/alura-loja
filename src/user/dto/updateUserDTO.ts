import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { IsEmailUnique } from '../validation/isEmailUnique.validator';

export class UpdateUserDTO {
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsEmail()
  @IsEmailUnique({ message: 'E-mail already in use.' })
  @IsOptional()
  email: string;

  @IsString()
  @MinLength(6)
  @IsOptional()
  password: string;
}
