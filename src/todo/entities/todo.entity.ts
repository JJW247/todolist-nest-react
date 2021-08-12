import { Column, Entity } from 'typeorm';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Common } from 'src/common/entities/common.entity';

@Entity()
export class Todo extends Common {
  @IsString()
  @ApiProperty({
    example: 'Title',
    description: 'TodoList Title',
  })
  @Column('varchar')
  title: string;

  @IsString()
  @ApiProperty({
    example: 'Description',
    description: 'TodoList Description',
  })
  @Column('varchar')
  desc: string;

  @Column('boolean', { default: false })
  isDone: boolean;
}
