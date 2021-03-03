import { Controller, Get, Post, Body, Put, Param, Delete, Render, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('create')
  @Render('users/create-user.html')
  createForm() {
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Patch(':userId/user/citizensid')
  setUserById(@Param('studentId') userId:
    number, @Param('userId') citizensId: number) {
    return this.usersService.setUserById(userId,
      citizensId);
  }

  @Delete(':userId/user')
  unsetUserById(@Param('studentId') userId:
    number) {
    return this.usersService.unsetUserById(userId);
  }
}
