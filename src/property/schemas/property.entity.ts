import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type PropertyDocument = Property & Document;

@Schema()
export class Property {
  _id?: mongoose.ObjectId | string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: false, unique: true, lowercase: true })
  type: string;

  @Prop({ required: false, unique: true, lowercase: true })
  address: string;

  @Prop({ required: false, unique: true, lowercase: true })
  city: string;

  @Prop({ required: false, unique: true, lowercase: true })
  state: string;

  @Prop({ required: false, unique: true, lowercase: true })
  zip_code: string;

  @Prop({ required: false, unique: true, lowercase: true })
  description: string;

  @Prop({ required: false, unique: true, lowercase: true })
  photos: string;

  @Prop({ default: () => new Date() })
  createdAt: Date;

  @Prop({ default: () => new Date() })
  updateAt: Date;
}

export const PropertySchema = SchemaFactory.createForClass(Property);