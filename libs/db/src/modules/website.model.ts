import { ApiProperty } from '@nestjs/swagger';
import { prop } from '@typegoose/typegoose';

export class WebSite {
  @ApiProperty({ title: '站点名称' })
  @prop()
  name: string;

  @ApiProperty({ title: 'favicon' })
  @prop()
  favicon: string;

  @ApiProperty({ title: 'logo' })
  @prop()
  logo: string;

  @ApiProperty({ title: '标题' })
  @prop()
  title: string;

  @ApiProperty({ title: '描述' })
  @prop()
  desc: string;

  @ApiProperty({ title: '关键词' })
  @prop()
  keyword: string;

  @ApiProperty({ title: '备案名称' })
  @prop()
  copyrightName: string;

  @ApiProperty({ title: '备案连接' })
  @prop()
  copyrighLink: string;

  @ApiProperty({ title: '服务协议名称' })
  @prop()
  serviceProtocolName: string;

  @ApiProperty({ title: '服务协议内容' })
  @prop()
  serviceProtocolContent: string;

  @ApiProperty({ title: '隐私协议名称' })
  @prop()
  privacyProtocolName: string;

  @ApiProperty({ title: '隐私协议内容' })
  @prop()
  privacyProtocolContent: string;
}
