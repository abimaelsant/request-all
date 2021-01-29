import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
import User from './User';

@Entity('collects')
class Collect {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  weight: number;

  @Column()
  userId: number;

  @Column()
  value: number;
  
  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Collect;
