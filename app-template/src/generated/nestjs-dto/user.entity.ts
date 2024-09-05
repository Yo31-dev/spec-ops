
import {ApiProperty} from '@nestjs/swagger'
import {Post} from './post.entity'


export class User {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
})
email: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
name: string  | null;
@ApiProperty({
  type: () => Post,
  isArray: true,
  required: false,
})
posts?: Post[] ;
}
