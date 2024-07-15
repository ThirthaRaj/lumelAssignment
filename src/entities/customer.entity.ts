import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from './order.entity';

@Entity({ name: 'customers' })
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  customerName: string;

  @Column()
  customerAddress: string;

  @Column()
  region: string;

  @OneToMany(
    (type) => OrderEntity,
    (orders) => orders.customer
  )
  orders: OrderEntity[];
}
