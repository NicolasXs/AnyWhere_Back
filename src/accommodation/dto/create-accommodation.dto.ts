import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateAccommodationDto {
  @ApiProperty({
    required: true,
    enum: ['Casa', 'Apartamento', 'Pousada', 'Hotel'],
  })
  @IsNotEmpty({ message: 'Accommodation type is required' })
  accommodation_type: string;

  @ApiProperty({ required: true, enum: ['Quarto', 'Espaço Inteiro'] })
  @IsNotEmpty({ message: 'Space type is required' })
  space_type: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Address is required' })
  address: string;

  @ApiProperty({ required: false })
  @IsNotEmpty({ message: 'Reference address is required' })
  reference_address: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Host number is required' })
  host_number: number;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Number rooms is required' })
  number_rooms: number;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Number beds is required' })
  number_beds: number;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Number bathrooms is required' })
  number_bathrooms: number;

  @ApiProperty({
    required: false,
    isArray: true,
  })
  @IsNotEmpty({ message: 'Conveniences is required' })
  conveniences: string[];

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Photos is required' })
  photos: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Description is required' })
  description: string;
}
