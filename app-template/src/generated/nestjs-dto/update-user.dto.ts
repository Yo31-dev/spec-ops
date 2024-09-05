
import {ApiProperty} from '@nestjs/swagger'




export class UpdateUserDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
email?: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
name?: string  | null;
}
