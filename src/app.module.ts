import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { User } from './users/entities/user.entity';
dotenv.config();

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './schema.gql',
      debug: true,
      playground: true,
    }),
    TypeOrmModule.forRoot({
      // keepConnectionAlive: true,
      // name: 'boilerplate',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'boilerplate',
      password: 'boilerplate',
      database: 'boilerplate',
      autoLoadEntities: true,
      // synchronize: true,
      // entities: [User],
      //logging: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
