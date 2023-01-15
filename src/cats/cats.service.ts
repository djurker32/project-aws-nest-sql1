import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}
  
  create(createCatDto: CreateCatDto) {
    return this.catsRepository.insert(createCatDto);
  }

  findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  findOne(id: string): Promise<Cat> {
    return this.catsRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.catsRepository.delete(id);
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return this.catsRepository.update(id, updateCatDto);
  }
}
