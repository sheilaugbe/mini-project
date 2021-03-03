import { Test, TestingModule } from '@nestjs/testing';
import { citizensController } from './citizens.controller';
import { CitizensService } from './citizens.service';

describe('CitizensController', () => {
  let controller: citizensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [citizensController],
      providers: [CitizensService],
    }).compile();

    controller = module.get<citizensController>(citizensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
