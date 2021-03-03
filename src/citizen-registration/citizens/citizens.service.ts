import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
import { CreateCitizenDto } from './dto/create-citizen.dto';

@Injectable()
export class CitizensService {
  citizenRepository: any;
  userRepository: any;
  CitizenRepository: any;
  async create(createStudentDto: CreateCitizenDto) {
    const newStudent = this.citizenRepository.create(CreateCitizenDto);
    if (createStudentDto.user) {
      const newUser = this.userRepository.create(createStudentDto.user);
      const user: User = await this.userRepository.save(newUser);
      newStudent.user = user;
    }
    return this.CitizenRepository.save(newStudent)
  }
  findAll() {
    return `This action returns all citizens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} citizen`;
  }

  update(id: number, updateCitizenDto: UpdateCitizenDto) {
    return `This action updates a #${id} citizen`;
  }

  remove(id: number) {
    return `This action removes a #${id} citizen`;
  }
} 
