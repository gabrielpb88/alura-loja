import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
jest.mock('./product.repository');

describe('ProductController', () => {
  let controller: ProductController;
  let repository: ProductRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductRepository],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    repository = module.get<ProductRepository>(ProductRepository);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Product::create', () => {
    it('should create product successfully', async () => {
      const productDTO = {
        nome: 'Figura de ação Marvel Homem Aranha Olympus Homem Aranha E6358 de Hasbro Classic',
        valor: 70.0,
        quantidadeDisponivel: 10,
        descricao: 'Produto novo, bem acabado, alegria para colecionadores',
        caracteristicas: [
          {
            nome: 'Fabricante',
            descricao: 'Iron Studios',
          },
          {
            nome: 'material',
            descricao: 'Plástico',
          },
        ],
        imagens: [
          {
            url: 'https://i.imgur.com/dwDZICq.jpg',
            descricao: 'Imagem do Homem Aranha',
          },
        ],
        categoria: 'Colecionáveis',
        dataCriacao: '2022-10-12T14:22:53.496Z',
        dataAtualizacao: '2022-10-12T14:22:53.496Z',
      };
      jest
        .spyOn(repository, 'save')
        .mockImplementationOnce(async () => productDTO);

      expect(await controller.create(productDTO)).toBe(productDTO);
      expect(repository.save).toBeCalledTimes(1);
      expect(repository.save).toBeCalledWith(productDTO);
    });
  });

  describe('Product::findAll', () => {
    it('should return all products', async () => {
      const mockedReturnValue = [
        {
          nome: 'Figura de ação Marvel Homem Aranha Olympus Homem Aranha E6358 de Hasbro Classic',
          valor: 70.0,
          quantidadeDisponivel: 10,
          descricao: 'Produto novo, bem acabado, alegria para colecionadores',
          caracteristicas: [
            {
              nome: 'Fabricante',
              descricao: 'Iron Studios',
            },
            {
              nome: 'material',
              descricao: 'Plástico',
            },
          ],
          imagens: [
            {
              url: 'https://i.imgur.com/dwDZICq.jpg',
              descricao: 'Imagem do Homem Aranha',
            },
          ],
          categoria: 'Colecionáveis',
          dataCriacao: '2022-10-12T14:22:53.496Z',
          dataAtualizacao: '2022-10-12T14:22:53.496Z',
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
