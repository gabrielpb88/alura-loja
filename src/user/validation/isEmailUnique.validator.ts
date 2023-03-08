import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsEmailUniqueValidator implements ValidatorConstraintInterface {
  constructor(private repository: UserRepository) {}

  async validate(email: string, args: ValidationArguments) {
    const possibleUser = await this.repository.findByEmail(email);
    return !possibleUser;
  }
}

export const IsEmailUnique = (validationOptions: ValidationOptions) => {
  return (obj: object, property: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: property,
      options: validationOptions,
      constraints: [],
      validator: IsEmailUniqueValidator,
    });
  };
};
