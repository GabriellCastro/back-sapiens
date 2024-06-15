import { ApiProperty } from '@nestjs/swagger';

export class TransactionEntity {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  amount?: number;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  category?: string;

  @ApiProperty()
  date?: Date;
}
