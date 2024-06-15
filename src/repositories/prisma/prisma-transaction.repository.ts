import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/services/database/prisma.service';
import { Transaction } from '@prisma/client';
import { TransactionRepository } from '../transaction.abstract';

@Injectable()
export class PrismaTransactionRepository
  implements TransactionRepository<Transaction>
{
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Transaction): Promise<Transaction> {
    return await this.prisma.transaction.create({ data });
  }

  async update(data: Transaction, id: string): Promise<Transaction> {
    return await this.prisma.transaction.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Transaction> {
    return await this.prisma.transaction.delete({ where: { id } });
  }

  async find(id: string): Promise<Transaction> {
    return await this.prisma.transaction.findUnique({
      where: { id },
    });
  }

  async findAll(userId: string): Promise<Transaction[]> {
    return await this.prisma.transaction.findMany({
      include: { user: true },
      where: { userId },
    });
  }
}
