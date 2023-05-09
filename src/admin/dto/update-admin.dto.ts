/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 15:39:34
 * @LastEditTime: 2021-12-27 17:34:24
 * @Description: Modify here please
 */

import { GenderEnum } from '@app/common/enums/GenderEnum';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAdminDto {
  @ApiProperty({ title: '名称' })
  name: string;

  @ApiProperty({ title: '手机号码' })
  phone: string;

  @ApiProperty({ title: '头像' })
  avatar: string;

  @ApiProperty({ title: '性别', enum: GenderEnum, default: GenderEnum.MAN })
  gender: GenderEnum;
}
