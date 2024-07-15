import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { ProductEntity } from './product.entity';

@Entity({ name: 'orders' })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateOfSale: Date;

  @Column()
  unitPrice: number;

  @Column()
  discount: number;

  @Column()
  shipingCost: number;

  @Column()
  paymentMethod: string;

  @Column()
  customerId: string;

  @Column()
  productId: string;

  @ManyToOne((type) => CustomerEntity, (customer) => customer.orders)
  customer: CustomerEntity;

  @ManyToOne((type) => ProductEntity, (product) => product.orders)
  product: ProductEntity;

}
