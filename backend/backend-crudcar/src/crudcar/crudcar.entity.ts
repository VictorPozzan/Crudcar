import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Crudcar {
    constructor(desc: string) {
        this.description = desc;
    }

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    description: string;
    
    @Column({ default: false })
    done: boolean
}