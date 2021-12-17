import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { User } from './user/entities/user.entity';
import { Post } from './posts/entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikesModule } from './likes/likes.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    // TypeOrmModule.forRoot({
    //   name: 'boilerplate',
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'boilerplate',
    //   password: 'boilerplate',
    //   database: 'boilerplate',
    //   entities: [User, Post],
    //   //logging: true,
    // }),
    UserModule,
    PostsModule,
    LikesModule,
  ],
})
export class AppModule {}
