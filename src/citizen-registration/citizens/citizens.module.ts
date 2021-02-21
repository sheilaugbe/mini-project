import { Module } from '@nestjs/common';
import { CitizensService } from './citizens.service';
import { CitizensController } from './citizens.controller';

@Module({
  controllers: [CitizensController],
  providers: [CitizensService]
})
export class CitizensModule {}
