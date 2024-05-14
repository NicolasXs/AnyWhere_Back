import { ApiProperty } from "@nestjs/swagger";
import { Property } from "../schemas/property.entity";
import mongoose from "mongoose";

export class PropertyResponseDto {
    constructor(property: Property) {
        const { _id, name, type, address, city, state, zip_code, description, photos, createdAt, updateAt } = property;
        return { _id: String(_id), name, type, address, city, state, zip_code, description, photos, createdAt, updateAt };
    }

    @ApiProperty({required: true})
    _id?: mongoose.ObjectId | string;

    @ApiProperty({required: true})
    name: string;   

    @ApiProperty({required: true})
    type: string;

    @ApiProperty({required: true})
    address: string;

    @ApiProperty({required: true})
    city: string;

    @ApiProperty({required: true})
    state: string;

    @ApiProperty({required: true})
    zip_code: string;

    @ApiProperty({required: true})
    description: string;

    @ApiProperty({required: true})
    photos: string;

    @ApiProperty({required: true})
    createdAt: Date;

    @ApiProperty({required: true})
    updateAt: Date;
}
