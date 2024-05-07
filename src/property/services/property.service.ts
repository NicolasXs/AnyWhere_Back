import { Injectable } from '@nestjs/common';
import { UpdatePropertyDto } from '../dto/update-property.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Property, PropertyDocument } from '../schemas/property.entity';

export interface CreatePropertyDto {
  name: string;
  type: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  description: string;
  photos: string;
  createdAt: Date;
  updateAt: Date;
}

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property.name)
    private propertyModel: Model<PropertyDocument>,
  ) {}

  async create(createPropertyDto: CreatePropertyDto): Promise<Property> {
    const createdProperty = new this.propertyModel(createPropertyDto);
    return createdProperty.save();
  }

  findAll() {
    return `This action returns all property`;
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
