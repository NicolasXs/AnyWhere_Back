import { Module } from '@nestjs/common';
import { GuestsService } from './services/guests.service';
import { GuestsController } from './controllers/guests.controller';

@Module({
  controllers: [GuestsController],
  providers: [GuestsService],
})
export class GuestsModule {}
