import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
jest.mock('./user.repository');
jest.mock('uuid');

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
        id: 'abc123',
        name: 'Test',
        email: 'test@test.com',
        password: 'test_password',
      };
      jest
        .spyOn(repository, 'save')
        .mockImplementationOnce(async () => userDTO);

      await controller.createUser(userDTO);
      expect(repository.save).toBeCalledTimes(1);
    });
  });

  describe('User::findAll', () => {
    it('should return all users', async () => {
      const mockedReturnValue = [
        {
          id: 'abc123',
          name: 'Test',
          email: 'test@test.com',
          password: 'test_password',
        },
      ];
      jest
        .spyOn(repository, 'findAll')
        .mockImplementationOnce(async () => mockedReturnValue);

      expect(await controller.findAll()).toBe(mockedReturnValue);
      expect(repository.findAll).toBeCalledTimes(1);
    });
  });
});
