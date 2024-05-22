import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAccommodationDto } from './create-accommodation.dto';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateAccommodationDto extends PartialType(
  CreateAccommodationDto,
) {
  @ApiProperty({
    required: true,
    enum: ['Casa', 'Apartamento', 'Pousada', 'Hotel'],
  })
  @IsNotEmpty({ message: 'Accommodation type is required' })
  accommodation_type: string;

  @ApiProperty({ required: true })
  @IsOptional()
  cpf: string;

  @ApiProperty({ required: true })
  @IsOptional()
  cnpj: string;

  @ApiProperty({ required: true })
  @IsOptional()
  email: string;

  @ApiProperty({ required: true })
  @IsOptional()
  cnae: string;

  @ApiProperty({ required: true })
  @IsOptional()
  phone: string;

  @ApiProperty({ required: true })
  @IsOptional()
  social_reason: string;

  @ApiProperty({ required: true })
  @IsOptional()
  state_registration: string;

  @ApiProperty({ required: true })
  @IsOptional()
  date_of_foundation: Date;

  @ApiProperty({ required: true })
  @IsOptional()
  date_of_birth: Date;

  @ApiProperty({ required: true, enum: ['Quarto', 'Espaço Inteiro'] })
  @IsOptional()
  space_type: string;

  @ApiProperty({ required: true })
  @IsOptional()
  address: string;

  @ApiProperty({ required: false })
  @IsOptional()
  reference_address: string;

  @ApiProperty({ required: true })
  @IsOptional()
  host_number: number;

  @ApiProperty({ required: true })
  @IsOptional()
  number_rooms: number;

  @ApiProperty({ required: true })
  @IsOptional()
  number_beds: number;

  @ApiProperty({ required: true })
  @IsOptional()
  number_bathrooms: number;

  @ApiProperty({
    required: false,
    isArray: true,
  })
  @IsOptional()
  conveniences: string[];

  @ApiProperty({ required: true })
  @IsOptional()
  photos: string;

  @ApiProperty({ required: true })
  @IsOptional()
  title: string;

  @ApiProperty({ required: true })
  @IsOptional()
  description: string;
}
