import { Injectable } from '@nestjs/common';
import { CreateLikeInput } from './dto/create-like.input';
import { UpdateLikeInput } from './dto/update-like.input';
import { Like } from './entities/like.entity';

@Injectable()
export class LikesService {
  create(createLikeInput: CreateLikeInput) {
    return { exampleField: createLikeInput.exampleField };
  }

  findAll(): [Like] {
    return [{ exampleField: 1 }];
  }

  findOne(id: number): Like {
    return { exampleField: id };
  }

  update(id: number, updateLikeInput: UpdateLikeInput): Like {
    return { exampleField: updateLikeInput.id };
  }

  remove(id: number): Like {
    return { exampleField: id };
  }
}
