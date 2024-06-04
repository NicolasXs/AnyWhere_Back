import { ApiProperty } from '@nestjs/swagger';
import { Accommodation } from '../schemas/accommodation.entity';
import mongoose from 'mongoose';

export class AccommodationResponseDto {
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

  constructor(accommodation: Accommodation) {
    this._id = String(accommodation._id);
    this.owner_id = String(accommodation.owner_id);
    this.accommodation_type = accommodation.accommodation_type;
    this.space_type = accommodation.space_type;
    this.address = accommodation.address;
    this.reference_address = accommodation.reference_address;
    this.guest_number = accommodation.guest_number;
    this.number_rooms = accommodation.number_rooms;
    this.number_beds = accommodation.number_beds;
    this.number_bathrooms = accommodation.number_bathrooms;
    this.conveniences = accommodation.conveniences;
    this.photos = accommodation.photos;
    this.title = accommodation.title;
    this.description = accommodation.description;
    this.createdAt = accommodation.createdAt;
    this.updateAt = accommodation.updateAt;
  }
}
