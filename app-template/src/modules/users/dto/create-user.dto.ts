import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({
    type: 'string',
  })
  email: string
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  name?: string | null
}
