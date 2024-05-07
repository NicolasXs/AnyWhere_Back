import { Module } from '@nestjs/common';
import { PropertyService } from './services/property.service';
import { PropertyController } from './controllers/property.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Property, PropertySchema } from './schemas/property.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Property.name, schema: PropertySchema },
    ]),
  ],
  controllers: [PropertyController],
  providers: [PropertyService],
})
export class PropertyModule {}
