import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { WebSiteService } from './web-site.service';
import { CreateWebSiteDto } from './dto/create-web-site.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { apiSucceed } from '@app/common/ResponseResultModel';

@ApiTags('管理端--网站站点设置')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('webSite')
export class WebSiteController {
  constructor(private readonly webSiteService: WebSiteService) {}

  @Post()
  @ApiOperation({ summary: '设置站点信息' })
  async create(@Body() createWebSiteDto: CreateWebSiteDto) {
    const res = await this.webSiteService.create(createWebSiteDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '获取站点信息' })
  async findAll() {
    const res = await this.webSiteService.findAll();
    return apiSucceed(res);
  }
}
