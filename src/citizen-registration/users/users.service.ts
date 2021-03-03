import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    const newUser: User = this.usersRepository.create(createUserDto)
    return this.usersRepository.save(newUser);
    //return 'This action adds a new user';
  }
  async findAll() {
    //return `This action returns all users`;
    return await this.usersRepository.find();
  }
  async findOne(id: number) {
    //return `This action returns a #${id} user`;
    return await this.usersRepository.findOne(id);
  }
  async update(id: number, updateUserDto:
    UpdateUserDto) {
    //return `This action updates a #${id} user`;
    return await this.usersRepository.update(id, updateUserDto);
  }
  async remove(id: number) {
    //return `This action removes a #${id} user`;
    return await this.usersRepository.delete(id);
  }

  async setUserById(studentId: number, userId:
    number) {
    try {
      return await
        this.usersRepository.createQueryBuilder()
          .relation(User, "user")
          .of(studentId)
          .set(userId)
    } catch (error) {
      throw new HttpException({
        status:
          HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for
        student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetUserById(studentId: number) {
    try {
      return await
        this.usersRepository.createQueryBuilder()
          .relation(User, "user")
          .of(studentId)
          .set(null)
    } catch (error) {
      throw new HttpException({
        status:
          HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user
    for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}    
