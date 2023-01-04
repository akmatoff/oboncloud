import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { BadRequestException } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto }).catch((error) => {
      console.error(error);
      throw new BadRequestException(error);
    });
  }

  async findByUsername(username: string) {
    return this.prisma.user
      .findFirst({ where: { username } })
      .catch((error) => {
        throw new BadRequestException(error);
      });
  }

  async findAll() {
    return this.prisma.user.findMany().catch((error) => {
      throw new BadRequestException(error);
    });
  }

  async findOne(id: number) {
    return this.prisma.user.findFirst({ where: { id }}).catch((error) => {
      throw new BadRequestException(error)
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto }).catch((error) => {
      throw new BadRequestException('Something went wrong while updating.', error)
    })
  }

  async delete(id: number) {
    return this.prisma.user.delete({ where: { id } }).catch((error) => {
      throw new InternalServerErrorException('Could not delete the user', error)
    });
  }
}
