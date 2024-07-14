import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Products' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  productName: string;

  @Column()
  category: string;
}
