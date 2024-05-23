import { ApiProperty } from '@nestjs/swagger';
import { Accommodation } from '../schemas/accommodation.entity';
import mongoose from 'mongoose';

export class AccommodationResponseDto {
  constructor(accommodation: Accommodation) {
    const {
      _id,
      owner_id,
      accommodation_type,
      space_type,
      address,
      reference_address,
      guest_number,
      number_rooms,
      number_beds,
      number_bathrooms,
      conveniences,
      photos,
      title,
      description,
      value,
      createdAt,
      updateAt,
    } = accommodation;

    return {
      _id: String(_id),
      owner_id,
      accommodation_type,
      space_type,
      address,
      reference_address,
      guest_number,
      number_rooms,
      number_beds,
      number_bathrooms,
      conveniences,
      photos,
      title,
      description,
      value,
      createdAt,
      updateAt,
    };
  }
  @ApiProperty({ required: true })
  _id?: mongoose.ObjectId | string;

  @ApiProperty({ required: false })
  owner_id: string;

  @ApiProperty({ required: true })
  accommodation_type: string;

  @ApiProperty({ required: true })
  space_type: string;

  @ApiProperty({ required: true })
  address: string;

  @ApiProperty({ required: false })
  reference_address: string;

  @ApiProperty({ required: true })
  guest_number: number;

  @ApiProperty({ required: true })
  number_rooms: number;

  @ApiProperty({ required: true })
  number_beds: number;

  @ApiProperty({ required: true })
  number_bathrooms: number;

  @ApiProperty({
    required: false,
    isArray: true,
  })
  conveniences: string[];

  @ApiProperty({ required: true })
  photos: string;

  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  description: string;

  @ApiProperty({ required: true })
  value: string;

  @ApiProperty({ required: true })
  createdAt: Date;

  @ApiProperty({ required: true })
  updateAt: Date;
}
