import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { PrismaService } from '~/services/database/prisma.service';
import { TransactionRepository } from '~/repositories/transaction.abstract';
import { PrismaTransactionRepository } from '~/repositories/prisma/prisma-transaction.repository';

@Module({
  controllers: [TransactionController],
  providers: [
    TransactionService,
    PrismaService,
    { provide: TransactionRepository, useClass: PrismaTransactionRepository },
  ],
})
export class TransactionModule {}
