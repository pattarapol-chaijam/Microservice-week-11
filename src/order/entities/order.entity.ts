import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryColumn()
  id: number;

  @Column()
  productId: number;

  @Column()
  email: string;

  @Column()
  status: string;
}
