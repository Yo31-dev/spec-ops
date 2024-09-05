
import {ApiProperty} from '@nestjs/swagger'




export class UpdatePostDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
title?: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
content?: string  | null;
@ApiProperty({
  type: 'boolean',
  default: false,
  required: false,
  nullable: true,
})
published?: boolean  | null;
}
