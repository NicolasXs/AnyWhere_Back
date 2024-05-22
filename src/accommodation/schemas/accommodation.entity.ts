import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type AccommodationDocument = Accommodation & Document;

@Schema()
export class Accommodation {
  _id?: mongoose.ObjectId | string;

  @Prop({ required: false })
  owner_id: string;

  @Prop({ required: false, lowercase: true })
  accommodation_type: string;

  @Prop({ required: false, lowercase: true })
  cpf: string;

  @Prop({ required: false, lowercase: true })
  cnpj: string;

  @Prop({ required: false, lowercase: true })
  email: string;

  @Prop({ required: false, lowercase: true })
  cnae: string;

  @Prop({ required: false, lowercase: true })
  phone: string;

  @Prop({ required: false, lowercase: true })
  social_reason: string;

  @Prop({ required: false, lowercase: true })
  state_registration: string;

  @Prop({ required: false, lowercase: true })
  date_of_foundation: Date;

  @Prop({ required: false, lowercase: true })
  date_of_birth: Date;

  @Prop({ required: false, lowercase: true })
  space_type: string;

  @Prop({ required: false, lowercase: true })
  address: string;

  @Prop({ required: false, lowercase: true })
  reference_address: string;

  @Prop({ required: false })
  guest_number: number;

  @Prop({ required: false })
  number_rooms: number;

  @Prop({ required: false })
  number_beds: number;

  @Prop({ required: false })
  number_bathrooms: number;

  @Prop({ required: false, lowercase: true })
  conveniences: string[];

  @Prop({ required: false })
  photos: string;

  @Prop({ required: false })
  title: string;

  @Prop({ required: false })
  description: string;

  @Prop({ default: () => new Date() })
  createdAt: Date;

  @Prop({ default: () => new Date() })
  updateAt: Date;
}

export const AccommodationSchema = SchemaFactory.createForClass(Accommodation);
