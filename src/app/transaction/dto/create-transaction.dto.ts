import { TransactionEntity } from '../entities/transaction.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ResponseEntity } from '~/interceptors/response/entities/response.entity';

import {
  IsNotEmpty,
  IsString,
  Length,
} from '~/common/decorators/class-validator';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty('Descrição')
  @Length(3, 255, 'Descrição')
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty('Categoria')
  @Length(3, 255, 'Categoria')
  @ApiProperty()
  category: string;

  @IsNotEmpty('Valor')
  @ApiProperty()
  amount: number;

  @IsNotEmpty('Data')
  @ApiProperty()
  date: Date;

  @IsString()
  @IsNotEmpty('Usuário')
  @ApiProperty()
  userId: string;
}

export class CreateTransactionResponseData {
  @ApiProperty()
  transaction: TransactionEntity;
}

export class CreateTransactionResponseDto
  implements ResponseEntity<CreateTransactionResponseData>
{
  @ApiProperty({ example: 201 })
  statusCode: number;

  @ApiProperty({ example: 'Transação criada com sucesso!' })
  message: string;

  @ApiProperty()
  error: string;

  @ApiProperty()
  data: CreateTransactionResponseData;
}
