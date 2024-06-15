import { Controller, Body, Param, Delete } from '@nestjs/common';
import { Get, Post, Patch } from '~/common/decorators/http-methods';
import { HttpConflictExceptionEntity } from '~/filters/http/entities/http-conflict-exception';
import { TransactionService } from './transaction.service';
import {
  CreateTransactionDto,
  CreateTransactionResponseData,
} from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('transaction')
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('', { createdType: CreateTransactionResponseData })
  @ApiCreatedResponse({ type: CreateTransactionResponseData })
  @ApiConflictResponse({
    type: HttpConflictExceptionEntity,
    description: 'Erro ao criar transação!',
  })
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto);
  }

  @Get(':userId', { okType: CreateTransactionResponseData })
  @ApiConflictResponse({
    type: HttpConflictExceptionEntity,
    description: 'Erro ao buscar transações!',
  })
  findAll(@Param('userId') userId: string) {
    return this.transactionService.findAll(userId);
  }

  @Get('/id/:id', { okType: CreateTransactionResponseData })
  @ApiConflictResponse({
    type: HttpConflictExceptionEntity,
    description: 'Erro ao buscar transação!',
  })
  findOne(@Param('id') id: string) {
    return this.transactionService.findOne(id);
  }

  @Patch(':id', { schema: { patternProperties: UpdateTransactionDto } })
  @ApiConflictResponse({
    type: HttpConflictExceptionEntity,
    description: 'Erro ao atualizar transação!',
  })
  update(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionService.update(updateTransactionDto, id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionService.remove(id);
  }
}
