import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePropertyDto {
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({ required: false })
  @IsNotEmpty({ message: 'Type is required' })
  type: string;

  @ApiProperty({ required: false })
  @IsNotEmpty({ message: 'Address is required' })
  address: string;

  @ApiProperty({ required: false })
  @IsNotEmpty({ message: 'City is required' })
  city: string;

  @ApiProperty({ required: false })
  @IsNotEmpty({ message: 'State is required' })
  state: string;

  @ApiProperty({ required: false })
  @IsNotEmpty({ message: 'Zip code is required' })
  zip_code: string;

  @ApiProperty({ required: false })
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @ApiProperty({ required: false })
  @IsNotEmpty({ message: 'Photos are required' })
  photos: string;

  @ApiProperty({ required: true })
  createdAt: Date;

  @ApiProperty({ required: true })
  updateAt: Date;
}
