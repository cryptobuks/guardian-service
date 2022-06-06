import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Guardian } from '../models/guardian.model';
import { CreateGuardianDto, PublicGuardianDto } from '../dto/guardian.dto';

@Injectable()
export class GuardianService {
  constructor(
    @InjectRepository(Guardian)
    private readonly guardianRepository: MongoRepository<Guardian>,
  ) {}

  async findAll(): Promise<PublicGuardianDto[]> {
    return this.guardianRepository.find({
      select: [
        'registration_number',
        'display_name',
        'description',
        'city',
        'country',
        'website',
      ],
    });
  }

  async findOneBy(id: string): Promise<Guardian> {
    return this.guardianRepository.findOneBy(id);
  }

  async findOneByRegistrationNumber(
    registration_number: string,
  ): Promise<PublicGuardianDto> {
    const guardian = await this.guardianRepository.findOneBy({
      registration_number,
      select: [
        'registration_number',
        'display_name',
        'description',
        'city',
        'country',
        'website',
      ],
    });
    const newGuardian = new PublicGuardianDto();
    newGuardian.registration_number = guardian.registration_number;
    newGuardian.display_name = guardian.display_name;
    newGuardian.description = guardian.description;
    newGuardian.city = guardian.city;
    newGuardian.country = guardian.country;
    newGuardian.website = guardian.website;
    return newGuardian;
  }

  async findOneByWallet(wallet: string): Promise<PublicGuardianDto> {
    const guardian = await this.guardianRepository.findOneBy({
      wallet,
      select: [
        'registration_number',
        'display_name',
        'description',
        'city',
        'country',
        'website',
      ],
    });
    const newGuardian = new PublicGuardianDto();
    newGuardian.registration_number = guardian.registration_number;
    newGuardian.display_name = guardian.display_name;
    newGuardian.description = guardian.description;
    newGuardian.city = guardian.city;
    newGuardian.country = guardian.country;
    newGuardian.website = guardian.website;
    return newGuardian;
  }

  async findOneByEmail(email: string): Promise<PublicGuardianDto> {
    const guardian = await this.guardianRepository.findOneBy({
      email,
      select: [
        'registration_number',
        'display_name',
        'description',
        'city',
        'country',
        'website',
      ],
    });
    const newGuardian = new PublicGuardianDto();
    newGuardian.registration_number = guardian.registration_number;
    newGuardian.display_name = guardian.display_name;
    newGuardian.description = guardian.description;
    newGuardian.city = guardian.city;
    newGuardian.country = guardian.country;
    newGuardian.website = guardian.website;
    return newGuardian;
  }

  async create(
    createGuardianDto: CreateGuardianDto,
  ): Promise<CreateGuardianDto> {
    return this.guardianRepository.save(createGuardianDto);
  }

  // async update(
  //   id: string,
  //   updateGuardianDto: UpdateGuardianDto,
  // ): Promise<UpdateGuardianDto> {
  //   const guardian = this.findOneById(id);
  //   if (guardian) {
  //     this.guardianRepository.merge(guardian, updateGuardianDto);
  //     return this.guardianRepository.save(guardian);
  //   }
  // }
}
