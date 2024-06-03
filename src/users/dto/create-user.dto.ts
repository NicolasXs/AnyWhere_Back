import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: false })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  birthdate: Date;

  @ApiProperty({ required: false })
  @IsEmail()
  email: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  phone: string;
}
