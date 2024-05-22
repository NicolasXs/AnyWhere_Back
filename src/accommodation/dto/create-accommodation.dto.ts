import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateAccommodationDto {
  @ApiProperty({
    required: true,
    enum: ['Casa', 'Apartamento', 'Pousada', 'Hotel'],
  })
  @IsNotEmpty({ message: 'Accommodation type is required' })
  accommodation_type: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Cpf is required' })
  cpf: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Cnpj is required' })
  cnpj: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Cnae is required' })
  cnae: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Phone is required' })
  phone: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Social reason is required' })
  social_reason: string;

  @ApiProperty({required: true})
  @IsNotEmpty({ message: 'State registration is required' })
  state_registration: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Date of foundation is required' })
  date_of_foundation: Date;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Date of birth is required' })
  date_of_birth: Date;

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
