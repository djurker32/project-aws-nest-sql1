import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    name: string;

    @Column()
    breed: string;

    @Column()
    age: number;
}
