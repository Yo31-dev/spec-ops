
import {ApiProperty} from '@nestjs/swagger'
import {User} from './user.entity'


export class Post {
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
@ApiProperty({
  type: () => User,
  required: false,
  nullable: true,
})
author?: User  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
authorId: number  | null;
}
