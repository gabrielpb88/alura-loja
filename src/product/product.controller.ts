import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Controller('product')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}
  @Post()
  async create(@Body() product) {
    this.productRepository.save(product);
    return product;
  }

  @Get()
  async findAll() {
    return this.productRepository.findAll();
  }
}
