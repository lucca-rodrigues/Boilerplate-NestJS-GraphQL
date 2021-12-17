import { Injectable } from '@nestjs/common';
import { CreateLikeInput } from './dto/create-like.input';
import { UpdateLikeInput } from './dto/update-like.input';

@Injectable()
export class LikesService {
  create(createLikeInput: CreateLikeInput) {
    return { exampleField: createLikeInput.exampleField };
  }

  findAll() {
    return { exampleField: 1 };
  }

  findOne(id: number) {
    return { exampleField: id };
  }

  update(id: number, updateLikeInput: UpdateLikeInput) {
    return { exampleField: updateLikeInput.id };
  }

  remove(id: number) {
    return { exampleField: id };
  }
}
