import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType({ description: 'guardian ' })
@Directive('@key(fields: "id")')
export class Guardian {
  @Field((type) => ID)
  @ObjectIdColumn()
  id: string;

  @Column()
  @Field({ nullable: false })
  registration_number: string;

  @Column()
  @Directive('@upper')
  display_name: string;

  @Column()
  @Field({ nullable: false })
  description: string;

  @Column()
  @Field({ nullable: false })
  wallet: string;

  @Column()
  @Field({ nullable: false })
  address: string;

  @Column()
  @Field({ nullable: false })
  city: string;

  @Column()
  @Field({ nullable: false })
  state: string;

  @Column()
  @Field({ nullable: false })
  zip: string;

  @Column()
  @Field({ nullable: false })
  country: string;

  @Column()
  @Field({ nullable: false })
  email: string;

  @Column()
  @Field({ nullable: true })
  phonenumber: string;

  @Column()
  @Field({ nullable: false })
  website: string;

  @Column()
  @Field({ nullable: false })
  creation_at: Date;

  @Column()
  @Field({ nullable: false })
  updated_at: Date;
}
