import 'dotenv/config';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccommodationModule } from './accommodation/accommodation.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    AccommodationModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
