import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionEntity } from './entities/transaction.entity';
import { TransactionRepository } from '~/repositories/transaction.abstract';

@Injectable()
export class TransactionService {
  constructor(
    private readonly transactionRepository: TransactionRepository<TransactionEntity>,
  ) {}

  async create(
    createTransactionDto: CreateTransactionDto,
  ): Promise<TransactionEntity> {
    const transaction =
      await this.transactionRepository.create(createTransactionDto);

    if (!transaction) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: 'Bad Request',
          message:
            'Não foi possível criar a transação, por favor tente novamente!',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return transaction;
  }

  async findAll(userId: string): Promise<TransactionEntity[]> {
    if (!userId) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: 'Bad Request',
          message: 'ID do usuário não informado!',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const transactions = await this.transactionRepository.findAll(userId);
    return transactions;
  }

  async findOne(id: string): Promise<TransactionEntity> {
    if (!id) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: 'Bad Request',
          message: 'ID da transação não informado!',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const transaction = await this.transactionRepository.find(id);

    if (!transaction) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          error: 'Not Found',
          message: 'Transação não encontrada!',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return transaction;
  }

  async update(
    updateTransactionDto: UpdateTransactionDto,
    id: string,
  ): Promise<TransactionEntity> {
    const transaction = await this.transactionRepository.update(
      updateTransactionDto,
      id,
    );
    return transaction;
  }

  async remove(id: string) {
    if (!id) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: 'Bad Request',
          message: 'ID da transação não informado!',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const transaction = await this.transactionRepository.find(id);

    if (!transaction) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          error: 'Not Found',
          message: 'Transação não encontrada!',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return await this.transactionRepository.delete(id);
  }
}
