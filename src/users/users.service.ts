import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Alice',
      age: 30,
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Bob',
      age: 25,
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Charlie',
      age: 28,
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Diana',
      age: 35,
      role: 'ADMIN',
    },
    {
      id: 5,
      name: 'Eric',
      age: 22,
      role: 'ENGINEER',
    },
  ];

  findAll() {
    return this.users;
  }

  findAllInterns() {
    const interns = this.users.filter((user) => user.role === 'INTERNS');
    if (interns.length === 0) return new NotFoundException('INTERNS not found');
    return interns;
  }
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) return new NotFoundException('User Not Found');
    return user;
  }
  addOne(createUserDto: CreateUserDto) {
    const newUser = createUserDto;
    this.users.push(newUser);
    return newUser;
  }
  updateOne(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });
    return this.findOne(id);
  }
}
