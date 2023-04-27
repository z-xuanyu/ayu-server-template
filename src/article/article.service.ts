import { Article } from '@app/db/modules/article.model';
import { Inject, Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { CreateArticleDto } from './dto/create-article.dto';
import { QueryArticleDto } from './dto/query-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @Inject(Article.name)
    private articleModel: ReturnModelType<typeof Article>,
  ) {}

  async create(createArticleDto: CreateArticleDto) {
    return await this.articleModel.create(createArticleDto);
  }

  async findAll(parameters: QueryArticleDto) {
    if(!parameters.pageNumber) parameters.pageNumber = 1;
    if(!parameters.pageSize) parameters.pageSize = 10;
    const query = {
      $and: [
        { title: { $regex: new RegExp(parameters.title, 'i') } },
        { status: parameters.status ?? { $ne: parameters.status } },
      ],
    };
    const total = await this.articleModel.countDocuments(query);
    const list = await this.articleModel.aggregate([
      {
        $match: query,
      },
      {
        $lookup: {
          from: 'categories',
          localField: 'categoryId',
          foreignField: '_id',
          as: 'category',
        },
      },
      {
        $unwind: {
          path: '$category',
          preserveNullAndEmptyArrays: true,
        },
      },
      { $skip: ~~((parameters.pageNumber - 1) * parameters.pageSize) },
      { $limit: ~~parameters.pageSize },
    ])
    return {
      total,
      items: list,
    };
  }

  async findOne(id: string) {
    const info = await this.articleModel.findById(id);
    // await this.articleModel.findByIdAndUpdate(id, { $inc: { views: 1 } })
    return info;
  }

  async update(id: string, updateArticleDto: UpdateArticleDto) {
    return await this.articleModel.findByIdAndUpdate(id, updateArticleDto);
  }

  async remove(id: string) {
    return await this.articleModel.findByIdAndDelete(id);
  }
}
