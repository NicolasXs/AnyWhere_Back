import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAccommodationDto {
  @ApiProperty({
    required: false,
    enum: ['Casa', 'Apartamento', 'Pousada', 'Hotel'],
  })
  @IsOptional()
  accommodation_type: string;

  @ApiProperty({ required: false })
  @IsOptional()
  cpf: string;

  @ApiProperty({ required: false })
  @IsOptional()
  cnpj: string;

  @ApiProperty({ required: false })
  @IsOptional()
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  cnae: string;

  @ApiProperty({ required: false })
  @IsOptional()
  phone: string;

  @ApiProperty({ required: false })
  @IsOptional()
  social_reason: string;

  @ApiProperty({ required: false })
  @IsOptional()
  state_registration: string;

  @ApiProperty({ required: false })
  @IsOptional()
  date_of_foundation: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  date_of_birth: Date;

  @ApiProperty({ required: false, enum: ['Quarto', 'Espaço Inteiro'] })
  @IsOptional()
  space_type: string;

  @ApiProperty({ required: false })
  @IsOptional()
  address: string;

  @ApiProperty({ required: false })
  @IsOptional()
  reference_address: string;

  @ApiProperty({ required: false })
  @IsOptional()
  guest_number: number;

  @ApiProperty({ required: false })
  @IsOptional()
  number_rooms: number;

  @ApiProperty({ required: false })
  @IsOptional()
  number_beds: number;

  @ApiProperty({ required: false })
  @IsOptional()
  number_bathrooms: number;

  @ApiProperty({
    required: false,
    isArray: false,
  })
  @IsOptional()
  conveniences: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  photos: string;

  @ApiProperty({ required: false })
  @IsOptional()
  title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  description: string;
 
  @ApiProperty({ required: false })
  @IsOptional()
  value: string;
}
