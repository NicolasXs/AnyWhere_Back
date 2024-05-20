import { Module } from '@nestjs/common';
import { AccommodationService } from './services/accommodation.service';
import { AccommodationController } from './controllers/accommodation.controller';
import { AccommodationSchema } from './schemas/accommodation.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Accommodation', schema: AccommodationSchema },
    ]),
  ],
  controllers: [AccommodationController],
  providers: [AccommodationService],
})
export class AccommodationModule {}
