import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAccommodationDto } from '../dto/create-accommodation.dto';
import { UpdateAccommodationDto } from '../dto/update-accommodation.dto';
import {
  Accommodation,
  AccommodationDocument,
} from '../schemas/accommodation.entity';
import { AccommodationResponseDto } from '../dto/accommodation-response.dto';
import { ACCOMMODATION_ERRORS } from '../constants/accommodation-erros';

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

  public async findAll() {
    const accommodation = await this.accommodationModel.find();
    return accommodation.map((item) => new AccommodationResponseDto(item));
  }

  public async findOne(_id: string): Promise<Accommodation> {
    const accommodation = await this.accommodationModel.findById(_id);
    if (!accommodation) throw ACCOMMODATION_ERRORS.NOT_FOUND;
    return accommodation; 
  }

  public async update(id: string, dto: UpdateAccommodationDto) {
    const accommodation = await this.accommodationModel.findById(id).exec();
    if (!accommodation) {
      throw ACCOMMODATION_ERRORS.NOT_FOUND;
    }
    await this.accommodationModel.updateOne({ _id: id }, dto).exec();
    return this.accommodationModel.findById(id).exec();
  }
  
  public async remove(id: string) {
    const accommodation = await this.accommodationModel.findById(id).exec();
    if (!accommodation) {
      throw ACCOMMODATION_ERRORS.NOT_FOUND;
    }
    await this.accommodationModel.deleteOne({ _id: id }).exec();
  }
}
