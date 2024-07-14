import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'orders' })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateOfSale: Date;

  @Column('decimal', { precision: 5, scale: 2 })
  unitPrice: number;

  @Column('decimal', { precision: 5, scale: 2 })
  discount: number;

  @Column('decimal', { precision: 5, scale: 2 })
  shipingCost: number;

  @Column()
  paymentMethod: string;

}
