import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  _id: mongoose.Types.ObjectId | string;

  @Prop({ required: false })
  name: string;

  @Prop({ required: false })
  lastname: string;

  @Prop({ required: false })
  birthdate: Date;

  @Prop({ required: false })
  email: string;

  @Prop({ required: false })
  phone: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
