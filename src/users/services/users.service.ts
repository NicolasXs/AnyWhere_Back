import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserResponseDto } from '../dto/user-response.dto';
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { User, UserDocument } from '../schemas/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private usersModel: Model<UserDocument>,
  ) {}

  public async create(dto: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.usersModel.create(dto);
    return new UserResponseDto(user);
  }

  public async findAll(): Promise<UserResponseDto[]> {
    const users = await this.usersModel.find().sort({ createdAt: 'asc' });
    return users.map((item) => new UserResponseDto(item));
  }

  public async findOne(_id: string): Promise<UserResponseDto> {
    const user = await this.usersModel.findById(_id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return new UserResponseDto(user);
  }

  public async update(
    _id: string,
    dto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    const user = await this.usersModel.findByIdAndUpdate(_id, dto, {
      new: true,
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return new UserResponseDto(user);
  }

  public async remove(_id: string): Promise<void> {
    const user = await this.usersModel.findByIdAndDelete(_id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
  }
}
