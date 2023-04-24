import { WebSite } from '@app/db/modules/website.model';
import { Inject, Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { CreateWebSiteDto } from './dto/create-web-site.dto';

@Injectable()
export class WebSiteService {
  constructor(
    @Inject(WebSite.name) private webSiteModel: ReturnModelType<typeof WebSite>,
  ) {}

  async create(createWebSiteDto: CreateWebSiteDto) {
    const findInfo = await this.webSiteModel.find();

    // 如果记录信息存在，更新信息
    if (findInfo.length) {
      const id = findInfo[0]?._id;
      await this.webSiteModel.findByIdAndUpdate(id, createWebSiteDto);
    }

    // 初始新建记录信息
    const info = await this.webSiteModel.create(createWebSiteDto);
    return info;
  }

  async findAll() {
    const list = await this.webSiteModel.find();
    return list[0];
  }
}
