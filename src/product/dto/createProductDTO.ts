import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsPositive()
  valor: number;

  @IsNumber({
    maxDecimalPlaces: 0,
    allowInfinity: false,
    allowNaN: false,
  })
  @IsPositive()
  quantidadeDisponivel: number;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsArray()
  @ValidateNested()
  @Type(() => CaracteristicasProdutoDTO)
  @ArrayMinSize(3)
  caracteristicas: CaracteristicasProdutoDTO[];

  @IsArray()
  @ValidateNested()
  @Type(() => ImagensProdutoDTO)
  @ArrayMinSize(1)
  imagens: ImagensProdutoDTO[];

  @IsString()
  categoria: string;
}

export class CaracteristicasProdutoDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;
}

export class ImagensProdutoDTO {
  @IsUrl()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;
}
