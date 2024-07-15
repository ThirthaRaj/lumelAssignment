import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from './order.entity';

@Entity({ name: 'Products' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  productName: string;

  @Column()
  category: string;

  @OneToMany(
    (type) => OrderEntity,
    (orders) => orders.product
  )
  orders: OrderEntity[];
}
