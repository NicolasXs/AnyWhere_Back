import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccommodationService } from '../services/accommodation.service';
import { CreateAccommodationDto } from '../dto/create-accommodation.dto';
import { UpdateAccommodationDto } from '../dto/update-accommodation.dto';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AccommodationResponseDto } from '../dto/accommodation-response.dto';

@ApiTags('Accommodation')
@Controller('accommodation')
export class AccommodationController {
  constructor(private readonly accommodationService: AccommodationService) {}

  @ApiOperation({ summary: 'Create a new Accommodation' })
  @ApiResponse({
    status: 200,
    description: 'The Accommodation has been successfully created.',
    type: AccommodationResponseDto,
  })
  @ApiBody({ type: CreateAccommodationDto })
  @Post()
  // @ApiConsumes('multipart/form-data')
  public async create(@Body() dto: CreateAccommodationDto) {
    // return console.log(dto);
    return this.accommodationService.create(dto);
  }

  @Get()
  findAll() {
    return this.accommodationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accommodationService.findOne(+id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  update(
    @Param('id') id: string,
    @Body() updateAccommodationDto: UpdateAccommodationDto,
  ) {
    return this.accommodationService.update(+id, updateAccommodationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accommodationService.remove(+id);
  }
}
