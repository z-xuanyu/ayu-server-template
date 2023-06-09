/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 15:39:34
 * @LastEditTime: 2021-12-27 10:13:15
 * @Description: 添加管理员dto
 */
import { GenderEnum } from '@app/common/enums/GenderEnum';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateAdminDto {
  @ApiProperty()
  @IsNotEmpty({ message: '用户名不能为空' })
  name: string;

  @ApiProperty()
  @IsString({ message: '邮箱不能为空' })
  @IsEmail({ ignore_max_length: true }, { message: '请输入正确的邮箱' })
  email: string;

  @ApiProperty({ title: '手机号码' })
  phone: string;

  @ApiProperty({ title: '头像' })
  avatar: string;

  @ApiProperty({ title: '性别', enum: GenderEnum, default: GenderEnum.MAN })
  gender: GenderEnum;

  @ApiProperty()
  @IsNotEmpty({ message: '密码不能为空' })
  password: string;
}
