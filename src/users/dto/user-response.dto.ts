import { ApiProperty } from '@nestjs/swagger';
import { User } from '../schemas/user.entity';

export class UserResponseDto {
  @ApiProperty({ required: true })
  _id: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  lastname: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  phone: string;

  @ApiProperty({ required: true })
  createdAt: Date;

  @ApiProperty({ required: true })
  updatedAt: Date;

  constructor(user: User) {
    this._id = String(user._id);
    this.name = user.name;
    this.lastname = user.lastname;
    this.email = user.email;
    this.phone = user.phone;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
