import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { GuardianService } from '../service/guardian.service';
import { CreateGuardianDto, PublicGuardianDto } from '../dto/guardian.dto';

@Controller('guardians')
export class GuardianController {
  constructor(private readonly guardianService: GuardianService) {}

  @Get()
  getAllGuardians(): Promise<PublicGuardianDto[]> {
    return this.guardianService.findAll();
  }

  @Get('/id/:id')
  getGuardianById(@Param('id') id: string): Promise<PublicGuardianDto> {
    return this.guardianService.findOneBy(id);
  }

  @Get('/registrationNumber/:registrationNumber')
  getGuardianByRegistrationNumber(
    @Param('registrationNumber') registrationNumber: string,
  ): Promise<PublicGuardianDto> {
    return this.guardianService.findOneByRegistrationNumber(registrationNumber);
  }

  @Get('/wallet/:wallet')
  getGuardianByWallet(
    @Param('wallet') wallet: string,
  ): Promise<PublicGuardianDto> {
    return this.guardianService.findOneByWallet(wallet);
  }

  @Get('/email/:email')
  getGuardianByEmail(
    @Param('email') email: string,
  ): Promise<PublicGuardianDto> {
    return this.guardianService.findOneByEmail(email);
  }

  @Post()
  addGuardian(
    @Body() createGuardianDto: CreateGuardianDto,
  ): Promise<CreateGuardianDto> {
    console.log('createGuardianDto', createGuardianDto);
    return this.guardianService.create(createGuardianDto);
  }

  // @Put('/id/:id')
  // updateGuardian(
  //   @Body() id: string,
  //   updateGuardianDto: UpdateGuardianDto,
  // ): Promise<Guardian> {
  //   return this.guardianService.update(id, updateGuardianDto);
  // }
}
