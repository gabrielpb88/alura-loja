import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
jest.mock('./user.repository');

describe('UserController', () => {
  let controller: UserController;
  let repository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserRepository],
    }).compile();

    controller = module.get<UserController>(UserController);
    repository = module.get<UserRepository>(UserRepository);
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
      jest
        .spyOn(repository, 'save')
        .mockImplementationOnce(async () => userDTO);

      expect(await controller.createUser(userDTO)).toBe(userDTO);
      expect(repository.save).toBeCalledTimes(1);
      expect(repository.save).toBeCalledWith(userDTO);
    });
  });
});
