import { Component, OnInit } from '@angular/core';
import { CrudcarService } from './crudcar.service';
import { Crudcar } from './crudcar.model';

@Component({
  selector: 'app-crudcar',
  templateUrl: './crudcar.component.html',
  styleUrls: ['./crudcar.component.css']
})
export class CrudcarComponent implements OnInit {

  constructor(private service: CrudcarService) { this.findAll(); }

  crudcars: Crudcar[];
  crudcar: Crudcar = new Crudcar();
  description: string;

  ngOnInit(): void {}

  findAll(): void {
    this.service.findAll()
      .subscribe(data => {
        this.crudcars = data;
        this.description = '';
      });
  }
  
  done(crudcar: Crudcar) {
    crudcar.done = true;
    this.update(crudcar);
  }
  
  update(crudcar: Crudcar) {
    this.service.update(crudcar)
      .subscribe(_ => { this.findAll(), this.crudcar = new Crudcar() });
  }
  
  create() {
    if (this.crudcar.description !== undefined && this.crudcar.description.trim() !== '') {
      this.service.create(this.crudcar.description)
        .subscribe(_ => { this.findAll(), this.crudcar = new Crudcar() });
    }
  }
  
  remove(id: number) {
    this.service.delete(id)
      .subscribe(_ => this.findAll());
  }
  
  prepareUpdate(crudcar: Crudcar) {
    this.crudcar = crudcar;
  }

}
