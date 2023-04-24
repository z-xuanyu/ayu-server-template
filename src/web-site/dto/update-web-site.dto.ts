import { PartialType } from '@nestjs/swagger';
import { CreateWebSiteDto } from './create-web-site.dto';

export class UpdateWebSiteDto extends PartialType(CreateWebSiteDto) {}
