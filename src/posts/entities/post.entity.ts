import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: number;

  @Column()
  @Field({ nullable: false })
  author_id: number;

  @Column()
  @Field({ nullable: false })
  title: string;

  @Column()
  @Field({ nullable: false })
  description: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'post_id' })
  user: User;
}
