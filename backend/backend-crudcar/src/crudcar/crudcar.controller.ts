import { Controller, Post, Body, Get, Put, Delete, Param  } from '@nestjs/common';
import { CrudcarService } from './crudcar.service';
import { Crudcar } from './crudcar.entity';

@Controller('crudcar')
export class CrudcarController {
    constructor(private service: CrudcarService) { }

  @Post()
  async create(@Body('description') description: string) {
    return await this.service.save(description);
  }

  @Get()
  async listAllCrudcars() {
    return await this.service.findAll();
  }

  @Put()
  async updateCrudcar(@Body() crudcar: Crudcar) {
    return await this.service.update(crudcar);
  }

  @Delete(':id')
  async removeCrudcar(@Param('id') id: number) {
    return await this.service.remove(id);
  }

}
