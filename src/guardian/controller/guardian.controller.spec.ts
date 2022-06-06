import { Test, TestingModule } from '@nestjs/testing';
import { GuardianController } from '../controller/guardian.controller';
import { GuardianService } from '../service/guardian.service';
import { CreateGuardianDto } from '../dto/guardian.dto';

const testGuardian = {
  id: 1,
  display_name: 'Test Company',
  description: 'This is a test company',
  name: 'Test Company',
  wallet: '0xBD659bE79a0017e30431e14FF0635495661C2480',
  owner: 'Tester',
  address: 'Guardian Street',
  city: 'Guardian City',
  state: 'Guardian State',
  zip: '12345',
  country: 'Guardian Country',
  email: 'info@guardian.test',
  phonenumber: '1234567890',
  website: 'https://guardian.test',
};

const publicData = [
  {
    display_name: testGuardian.display_name,
    description: testGuardian.description,
  },
];

describe('GuardianController', () => {
  let controller: GuardianController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuardianController],
      providers: [
        {
          provide: GuardianService,
          useValue: {
            create: jest
              .fn()
              .mockImplementation((createGuardianDto: CreateGuardianDto) => {
                return { id: testGuardian[0].id, ...createGuardianDto };
              }),
          },
        },
      ],
    }).compile();

    controller = module.get<GuardianController>(GuardianController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('addGuardian', () => {
    it('should add a guardian', async () => {
      const guardian = await controller.addGuardian(testGuardian);
      expect(guardian).toEqual(testGuardian);
    });
  });
});
