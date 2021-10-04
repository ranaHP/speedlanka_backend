import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn
} from "typeorm";
import {
  InputType,
  Field,
  ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => String, {nullable: true})
  @Column( )
  _id!: String;

  @Field(() => String, {nullable: true})
  @Column()
  name!: String;

  @Field(() => String, {nullable: true})
  @Column()
  email!: String;

  @Field(() => String, {nullable: true})
  @Column()
  address!: String;

  @Field(() => String, {nullable: true})
  @Column()
  password!: String;

  @Field(() => String, {nullable: true})
  @Column()
  contact!: String;

  @Field(() => String, {nullable: true})
  @Column()
  status!: String;

  @Field(() => String, {nullable: true })
  @Column()
  roll!: String;
}



@InputType()
export class UserInput {
 
  @Field(() => String, {nullable: true})
  @Column( )
  _id!: String;

  @Field(() => String, {nullable: true})
  @Column()
  name!: String;

  @Field(() => String, {nullable: true})
  @Column()
  email!: String;

  @Field(() => String, {nullable: true})
  @Column()
  address!: String;

  @Field(() => String, {nullable: true})
  @Column()
  password!: String;

  @Field(() => String, {nullable: true})
  @Column()
  contact!: String;

  
  @Field(() => String, {nullable: true , defaultValue: "noverified"})
  @Column()
  status!: String;

  @Field(() => String, {nullable: true , defaultValue: "seller"})
  @Column()
  roll!: String;
}


@InputType()
export class UserUpdateInput {
  @Field(() => String, {nullable: true})
  @Column()
  name!: String;

  @Field(() => String, {nullable: true})
  @Column()
  email!: String;

  @Field(() => String, {nullable: true})
  @Column()
  address!: String;

  @Field(() => String, {nullable: true})
  @Column()
  password!: String;

  @Field(() => String, {nullable: true})
  @Column()
  contact!: String;

  

}

@InputType()
export class GetUserInput {
 
  @Field(() => String, {nullable: true})
  contact!: String;

  @Field(() => String, {nullable: true})
  @Column()
  password!: String;
}

@ObjectType()
export class UserUpdateOutpput {
 
  @Field(() => String, {nullable: true})
  isUpdated!: Boolean;

}


@ObjectType()
export class UserLoginOutpput {
 
  @Field(() => String, {nullable: true})
  status!: String;

  @Field(() => String, {nullable: true})
  data!: String;
}
@InputType()
export class VerifyUser {
 
  @Field(() => String, {nullable: true})
  contact!: String;

}
