import { Admin } from '@app/db/modules/admin.model';
import { DbModule } from '@app/db';
import { Global, Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { User } from '@app/db/modules/user.model';
import { Category } from '@app/db/modules/category.model';
import { Article } from '@app/db/modules/article.model';
import { MaterialCategory } from '@app/db/modules/material-category.model';
import { Material } from '@app/db/modules/material.model';
import { WebSite } from '@app/db/modules/website.model';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: ['.env', '.env.development', '.env.production'],
      isGlobal: true,
    }),
    DbModule.forRoot('MONGO_URL', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    DbModule.forFeature([
      Admin,
      Category,
      Article,
      User,
      MaterialCategory,
      Material,
      WebSite,
    ]),
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
