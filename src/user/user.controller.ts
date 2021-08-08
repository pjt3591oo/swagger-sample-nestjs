import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('유저관리')
export class UserController {
  @Get()
  @ApiOperation({ summary: '유저조회', description: '유저조회를 한다' })
  async getUser() {
    return 'get user';
  }

  @Post()
  @ApiOperation({ summary: '회원가입', description: '회원가입을 한다' })
  async createUser() {
    return 'create user';
  }

  @Put()
  @ApiOperation({
    summary: '개인정보 수정',
    description: '개인정보를 수정 한다',
  })
  async updateUser() {
    return 'update user';
  }

  @Delete()
  @ApiOperation({
    summary: '회원탈퇴',
    description: '회원탈퇴를 한다',
  })
  async deleteUser() {
    return 'delete user';
  }
}
