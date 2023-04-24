import { ApiProperty } from '@nestjs/swagger';

export class CreateWebSiteDto {
  @ApiProperty({ title: '站点名称' })
  name: string;

  @ApiProperty({ title: 'favicon' })
  favicon: string;

  @ApiProperty({ title: 'logo' })
  logo: string;

  @ApiProperty({ title: '标题' })
  title: string;

  @ApiProperty({ title: '描述' })
  desc: string;

  @ApiProperty({ title: '关键词' })
  keyword: string;

  @ApiProperty({ title: '备案名称' })
  copyrightName: string;

  @ApiProperty({ title: '备案连接' })
  copyrighLink: string;

  @ApiProperty({ title: '服务协议名称' })
  serviceProtocolName: string;

  @ApiProperty({ title: '服务协议内容' })
  serviceProtocolContent: string;

  @ApiProperty({ title: '隐私协议名称' })
  privacyProtocolName: string;

  @ApiProperty({ title: '隐私协议内容' })
  privacyProtocolContent: string;
}
