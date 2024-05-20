import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type AccommodationDocument = Accommodation & Document;

@Schema()
export class Accommodation {
  _id?: mongoose.ObjectId | string;

  @Prop({ required: false })
  owner_id: string;

  @Prop({ required: true, unique: false, lowercase: true })
  accommodation_type: string;

  @Prop({ required: true, unique: false, lowercase: true })
  space_type: string;

  @Prop({ required: true, unique: false, lowercase: true })
  address: string;

  @Prop({ required: false, unique: false, lowercase: true })
  reference_address: string;

  @Prop({ required: true, unique: false })
  host_number: number;

  @Prop({ required: true, unique: false })
  number_rooms: number;

  @Prop({ required: true, unique: false })
  number_beds: number;

  @Prop({ required: true, unique: false })
  number_bathrooms: number;

  @Prop({ required: false, unique: false, lowercase: true })
  conveniences: string[];

  @Prop({ required: true, unique: false })
  photos: string;

  @Prop({ required: true, unique: false })
  title: string;

  @Prop({ required: true, unique: false })
  description: string;

  @Prop({ default: () => new Date() })
  createdAt: Date;

  @Prop({ default: () => new Date() })
  updateAt: Date;
}

export const AccommodationSchema = SchemaFactory.createForClass(Accommodation);
