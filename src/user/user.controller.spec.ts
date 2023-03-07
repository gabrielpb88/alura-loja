import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('User::createUser', () => {
    it('should create user successfully', async () => {
      const userDTO = {
        name: 'Test',
        email: 'test@test.com',
        password: 'test_password',
      };
      expect(await controller.createUser(userDTO)).toBe(userDTO);
    });
  });
});
