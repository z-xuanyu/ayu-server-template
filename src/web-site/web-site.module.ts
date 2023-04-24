import { Module } from '@nestjs/common';
import { WebSiteService } from './web-site.service';
import { WebSiteController } from './web-site.controller';

@Module({
  controllers: [WebSiteController],
  providers: [WebSiteService]
})
export class WebSiteModule {}
