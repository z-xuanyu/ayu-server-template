import { PaginationParametersDto } from '@app/common/PaginationParametersDto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryArticleDto extends PaginationParametersDto {
  @ApiProperty({ required: false, description: '文章标题' })
  title: string;

  @ApiProperty({ description: '栏目分类id', default: null })
  categoryId?: string | null;

  @ApiProperty({ required: false, description: '状态' })
  status: boolean | string;
}
