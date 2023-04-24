import { Test, TestingModule } from '@nestjs/testing';
import { WebSiteController } from './web-site.controller';
import { WebSiteService } from './web-site.service';

describe('WebSiteController', () => {
  let controller: WebSiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebSiteController],
      providers: [WebSiteService],
    }).compile();

    controller = module.get<WebSiteController>(WebSiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
