import { Module } from '@nestjs/common';
import { CrudcarController } from './crudcar.controller';
import { CrudcarService } from './crudcar.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crudcar } from './crudcar.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Crudcar]),
  ],
  controllers: [CrudcarController],
  providers: [CrudcarService]
})
export class CrudcarModule {}
