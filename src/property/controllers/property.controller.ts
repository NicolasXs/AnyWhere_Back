import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PropertyService } from '../services/property.service';
import { CreatePropertyDto } from '../dto/create-property.dto';
import { UpdatePropertyDto } from '../dto/update-property.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Property } from '../schemas/property.entity';
import { PropertyResponseDto } from '../dto/property-response.dto';
@ApiTags('property')
@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @ApiOperation({ summary: 'create a new property' })
  @ApiResponse({
    status: 200,
    description: 'The property has been successfully created.',
    type: PropertyResponseDto,
  })
  @ApiBody({ type: CreatePropertyDto })
  @Post()
  public async create(
    @Body() dto: CreatePropertyDto,
  ): Promise<PropertyResponseDto> {
    return this.propertyService.create(dto);
  }

  @ApiOperation({ summary: 'Get all properties' })
  @ApiResponse({
    status: 200,
    description: 'The properties have been successfully retrieved.',
    type: [Property],
  })
  @Get()
  findAll(): Promise<PropertyResponseDto[]> {
    return this.propertyService.findAll();
  }

  @ApiOperation({ summary: 'Get one property' })
  @ApiResponse({
    status: 200,
    description: 'The property has been successfully retrieved.',
    type: PropertyResponseDto,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a property' })
  @ApiResponse({
    status: 200,
    description: 'The property has been successfully updated.',
    type: PropertyResponseDto,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePropertyDto: UpdatePropertyDto,
  ) {
    return this.propertyService.update(+id, updatePropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyService.remove(+id);
  }
}
