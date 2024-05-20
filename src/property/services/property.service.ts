import { Injectable } from '@nestjs/common';
import { UpdatePropertyDto } from '../dto/update-property.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Property, PropertyDocument } from '../schemas/property.entity';
import { PropertyResponseDto } from '../dto/property-response.dto';
import { PROPERTY_ERRORS } from '../constants/property-errors';
import { CreatePropertyDto } from '../dto/create-property.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property.name)
    private propertyModel: Model<PropertyDocument>,
  ) {}

  public async create(createPropertyDto: CreatePropertyDto): Promise<Property> {
    const createdProperty = new this.propertyModel(createPropertyDto);
    return createdProperty.save();
  }

  public async findAll() {
    const properties = await this.propertyModel.find();
    return properties.map((item) => new PropertyResponseDto(item));
  }

  public async findOne(_id: string): Promise<Property> {
    const property = await this.propertyModel.findById(_id);
    if (!property) throw PROPERTY_ERRORS.NOT_FOUND;

    return property;
  }

  public async update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  public async remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
