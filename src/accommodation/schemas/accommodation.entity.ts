import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type AccommodationDocument = Accommodation & Document;

@Schema()
export class Accommodation {
  _id?: mongoose.ObjectId | string;

  @Prop({ required: false })
  owner_id: string;

  @Prop({ required: true, lowercase: true })
  accommodation_type: string;

  @Prop({ required: true, lowercase: true })
  cpf: string;

  @Prop({ required: true, lowercase: true })
  cnpj: string;

  @Prop({ required: true, lowercase: true })
  email: string;

  @Prop({ required: true, lowercase: true })
  cnae: string;

  @Prop({ required: true, lowercase: true })
  phone: string;

  @Prop({ required: true, lowercase: true })
  social_reason: string;

  @Prop({ required: true, lowercase: true })
  state_registration: string;

  @Prop({ required: true, lowercase: true })
  date_of_foundation: Date;

  @Prop({ required: true, lowercase: true })
  date_of_birth: Date;

  @Prop({ required: true, lowercase: true })
  space_type: string;

  @Prop({ required: true, lowercase: true })
  address: string;

  @Prop({ required: false, lowercase: true })
  reference_address: string;

  @Prop({ required: true })
  host_number: number;

  @Prop({ required: true })
  number_rooms: number;

  @Prop({ required: true })
  number_beds: number;

  @Prop({ required: true })
  number_bathrooms: number;

  @Prop({ required: false, lowercase: true })
  conveniences: string[];

  @Prop({ required: true })
  photos: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: () => new Date() })
  createdAt: Date;

  @Prop({ default: () => new Date() })
  updateAt: Date;
}

export const AccommodationSchema = SchemaFactory.createForClass(Accommodation);
