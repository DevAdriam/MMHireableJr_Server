import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @ApiProperty({ type: 'string' })
  username: string;

  @ApiProperty({ type: 'string' })
  email: string;

  @ApiProperty()
  password: string;
}
