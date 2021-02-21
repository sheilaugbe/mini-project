import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CitizensModule } from './citizens/citizens.module';

@Module({
  imports: [UsersModule, CitizensModule]
})
export class CitizenRegistrationModule {}
