import { Module } from '@nestjs/common';
import { CitizensService } from './citizens.service';
import { citizensController } from './citizens.controller';

@Module({
  controllers: [citizensController],
  providers: [CitizensService]
})
export class CitizensModule {}
