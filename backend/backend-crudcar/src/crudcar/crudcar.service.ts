import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crudcar } from './crudcar.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CrudcarService {

    constructor(
        @InjectRepository(Crudcar)
        private repository: Repository<Crudcar>,
    ) { }

    async findAll(): Promise<Crudcar[]> {
        return await this.repository.find({ order: { id: "DESC" } });
    }

    async findOne(id: string): Promise<Crudcar> {
        return await this.repository.findOne(id);
    }

    async save(description: string): Promise<Crudcar> {
        return await this.repository.save(new Crudcar(description));
    }

    async update(crudcar: Crudcar): Promise<any> {
        crudcar.done = crudcar.done + '' == 'true';
        return await this.repository.update(crudcar.id, crudcar);
    }

    async remove(id: number): Promise<void> {
        await this.repository.delete(id);
    }

}
