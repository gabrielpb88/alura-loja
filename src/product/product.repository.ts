import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  private products = [];

  async findAll(): Promise<any[]> {
    return this.products;
  }

  async save(data) {
    this.products.push(data);
    return data;
  }
}
