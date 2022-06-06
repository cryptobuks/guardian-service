import { ApiProperty } from '@nestjs/swagger';
import { ArgsType, Field, Int, InputType } from '@nestjs/graphql';
import {
  IsDate,
  IsEmail,
  IsEthereumAddress,
  IsNotEmpty,
  IsUrl,
  Max,
  Min,
} from 'class-validator';
import { ObjectID } from 'typeorm';

export class CreateGuardianDto {
  @ApiProperty()
  @IsNotEmpty()
  @Field()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  registration_number: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  display_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  description: string;

  @IsEthereumAddress()
  @ApiProperty()
  @IsNotEmpty()
  @Field()
  wallet: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  owner: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  city: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  state: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  zip: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  country: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @Field()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  phonenumber: string;

  @IsUrl()
  @ApiProperty()
  @IsNotEmpty()
  website: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  creation_at: Date;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  updated_at: Date;
}

export class UpdateGuardianDto {
  @ApiProperty()
  @IsNotEmpty()
  @Field()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  registration_number: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  display_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  description: string;

  @IsEthereumAddress()
  @ApiProperty()
  @IsNotEmpty()
  @Field()
  wallet: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  owner: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  city: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  state: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  zip: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  country: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @Field()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field()
  phonenumber: string;

  @IsUrl()
  @ApiProperty()
  @IsNotEmpty()
  website: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  creation_at: Date;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  updated_at: Date;
}

export class PublicGuardianDto {
  @ApiProperty()
  registration_number: string;

  @ApiProperty()
  display_name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  website: string;
}

@ArgsType()
export class GuardiansArgs {
  @Field((type) => Int)
  @Min(0)
  skip = 0;

  @Field((type) => Int)
  @Min(1)
  @Max(50)
  take = 25;
}
