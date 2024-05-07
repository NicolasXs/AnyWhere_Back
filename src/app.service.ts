import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
