import { Controller, Get, Post, Put, Delete, Query } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiProperty,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export class HttpError4xxDto {
  @ApiProperty({ description: '메세지' })
  message: number;

  @ApiProperty({ description: '오류' })
  error: number;

  @ApiProperty({ description: '오류코드' })
  status: number;
}

class PostCreateDto {
  @ApiProperty({ description: '제목', required: true })
  title: string;

  @ApiProperty({ description: '내용', required: true })
  content: string;
}

class PostUpdatedDto extends PostCreateDto {
  @ApiProperty({ description: '게시글 ID', required: true })
  id: number;
}
class PostDeleteDto {
  @ApiProperty({ description: '게시글 ID', required: true })
  id: number;
}

class PostFilterDto {
  @ApiProperty({ description: '페이지', default: 1, required: false })
  page: number;

  @ApiProperty({
    description: '페이지 당 보여기는 수',
    default: 10,
    required: true,
  })
  viewCount: number;
}

@Controller('post')
@ApiTags('게시글 관리')
@ApiBadRequestResponse({
  description: '필수 인자가 업습니다.',
  type: HttpError4xxDto,
})
@ApiUnauthorizedResponse({ description: '인증실패', type: HttpError4xxDto })
@ApiForbiddenResponse({ description: '권한(인가)부족', type: HttpError4xxDto })
@ApiNotFoundResponse({ description: '해당 리소스 없음', type: HttpError4xxDto })
@ApiBearerAuth('accesskey')
export class PostController {
  @Get()
  @ApiOperation({
    summary: '게시글 조회',
    description: '게시글을 페이지 단위로 조회',
  })
  @ApiResponse({ status: 200, description: 'Get all posts' })
  @ApiQuery({ type: PostFilterDto })
  async getPost() {
    return 'get post';
  }

  @Post()
  @ApiOperation({
    summary: '게시글 추가',
    description: '제목, 내용 기반으로 게시글 추가',
  })
  @ApiBody({ type: PostCreateDto })
  @ApiResponse({ status: 200, description: '생성실패' })
  @ApiCreatedResponse({ description: '생성성공', type: PostCreateDto })
  async createPost() {
    return 'create post';
  }

  @Put()
  @ApiOperation({
    summary: '게시글 수정',
    description: '제목, 내용 기반으로 게시글 수정',
  })
  @ApiQuery({ type: PostUpdatedDto })
  @ApiCreatedResponse({ description: '업데이트 성공', type: PostUpdatedDto })
  async updatePost() {
    return 'update post';
  }

  @Delete()
  @ApiOperation({
    summary: '게시글 삭제',
    description: '게시글 ID로 게시글 삭제',
  })
  @ApiQuery({ type: PostDeleteDto })
  @ApiCreatedResponse({ description: '삭제성공', type: PostDeleteDto })
  async deletePost() {
    return 'delete post';
  }
}
