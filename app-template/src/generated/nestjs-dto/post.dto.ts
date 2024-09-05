
import {ApiProperty} from '@nestjs/swagger'


export class PostDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
})
title: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
content: string  | null;
@ApiProperty({
  type: 'boolean',
  nullable: true,
})
published: boolean  | null;
}
