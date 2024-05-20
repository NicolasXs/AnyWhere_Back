import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAccommodationDto } from '../dto/create-accommodation.dto';
import { UpdateAccommodationDto } from '../dto/update-accommodation.dto';
import {
  Accommodation,
  AccommodationDocument,
} from '../schemas/accommodation.entity';

@Injectable()
export class AccommodationService {
  constructor(
    @InjectModel(Accommodation.name)
    private accommodationModel: Model<AccommodationDocument>,
  ) {}

  public async create(createAccommodationDto: CreateAccommodationDto): Promise<Accommodation> {
    const createdAccommodation = new this.accommodationModel(createAccommodationDto);
    return createdAccommodation.save();
  }

  findAll() {
    return `This action returns all accommodation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accommodation`;
  }

  update(id: number, updateAccommodationDto: UpdateAccommodationDto) {
    return `This action updates a #${id} accommodation`;
  }

  remove(id: number) {
    return `This action removes a #${id} accommodation`;
  }
}
