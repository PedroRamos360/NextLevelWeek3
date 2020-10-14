import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';

// Associa a classe a tabela orphanages
@Entity('orphanages')
export default class Orphanage {
   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column()
   name: string;

   @Column()
   latitude: number;

   @Column()
   longitude: number;

   @Column()
   about: string;

   @Column()
   instructions: string;

   @Column()
   opening_hours: string;

   @Column()
   open_on_weekends: boolean;

   // Primeira função => tipo do retorno, segunda função => qual campo devolve o relacionamento inverso - orfanato
   @OneToMany(() => Image, image => image.orphanage, {
      cascade: ['insert', 'update']
   })
   @JoinColumn({ name: 'orphanage_id' })
   images: Image[];
}
