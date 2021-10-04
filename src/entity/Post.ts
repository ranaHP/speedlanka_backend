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
  ObjectType, 
  ArgsType} from 'type-graphql';

  
@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field(() => String, {nullable: true})
  @Column( )
  _id!: String;

  @Field(() => String, {nullable: true})
  @Column()
  cType!: String;

  @Field(() => String, {nullable: true})
  @Column()
  location!: String;

  @Field(() => String, {nullable: true})
  @Column()
  title!: String;

  @Field(() => String, {nullable: true})
  @Column()
  price!: String;

  @Field(() => String, {nullable: true})
  @Column()
  desc!: String;

  @Field(() => String, {nullable: true})
  @Column()
  displayNumber!: String;

  @Field(() => String, {nullable: true })
  @Column()
  sellerName!: String;

  @Field(() => String, {nullable: true })
  @Column()
  sellerContact!: String;

  @Field(() => String, {nullable: true })
  @Column()
  images!: String;

  @Field(() => String, {nullable: true })
  @Column()
  approved!: String;

  @Field(() => String, {nullable: true })
  @Column()
  date!: Date;

  @Field(() => String, {nullable: true })
  @Column()
  sellerVerified!: String;

  @Field(()  => String, {nullable: true })
  @Column()
  attribute!: String;
  @Field(()  => String, {nullable: true })
  @Column()
  message!: String;
}



@InputType()
export class PostInput {
 
  @Field(() => String, {nullable: true})
  @Column( )
  _id!: String;

  @Field(() => String, {nullable: true})
  @Column()
  cType!: String;

  @Field(() => String, {nullable: true})
  @Column()
  location!: String;

  @Field(() => String, {nullable: true})
  @Column()
  title!: String;

  @Field(() => String, {nullable: true})
  @Column()
  price!: String;

  @Field(() => String, {nullable: true})
  @Column()
  desc!: String;

  @Field(() => String, {nullable: true})
  @Column()
  displayNumber!: String;

  @Field(() => String, {nullable: true })
  @Column()
  sellerName!: String;

  @Field(() => String, {nullable: true })
  @Column()
  sellerContact!: String;

  @Field(() => String, {nullable: true })
  @Column()
  images!: String;

  @Field(() => String, {nullable: true })
  @Column()
  approved!: String;

  @Field(() => Date, {nullable: true })
  @Column()
  date!: Date;

  @Field(() => String, {nullable: true })
  @Column()
  sellerVerified!: String;

  @Field(()  => String, {nullable: true })
  @Column()
  attribute!: String;
  
  @Field(()  => String, {nullable: true })
  @Column()
  message!: String;
}


// @InputType()
// export class PostUpdateInput {
//   @Field(() => String, {nullable: true})
//   @Column()
//   cType!: String;

//   @Field(() => String, {nullable: true})
//   @Column()
//   location!: String;

//   @Field(() => String, {nullable: true})
//   @Column()
//   title!: String;

//   @Field(() => String, {nullable: true})
//   @Column()
//   price!: String;

//   @Field(() => String, {nullable: true})
//   @Column()
//   desc!: String;

//   @Field(() => String, {nullable: true})
//   @Column()
//   displayNumber!: String;

//   @Field(() => String, {nullable: true })
//   @Column()
//   sellerName!: String;

//   @Field(() => String, {nullable: true })
//   @Column()
//   sellerContact!: String;

//   @Field(() => String, {nullable: true })
//   @Column()
//   images!: String;

//   @Field(() => String, {nullable: true })
//   @Column()
//   approved!: String;

//   @Field(() => Date, {nullable: true })
//   @Column()
//   date!: Date;

//   @Field(() => String, {nullable: true })
//   @Column()
//   sellerVerified!: String;

//   @Field(() =>  [PostAttribute], {nullable: true })
//   @Column()
//   attribute!: [PostAttribute];
  

// }

@InputType()
export class GetPostInput {
 
  @Field(() => String, {nullable: true})
  sellerContact!: String;

}

@InputType()
export class GetUnapprovedPostInput {
 
  @Field(() => String, {nullable: true})
  approved!: String;

  @Field(() => String, {nullable: true})
  location!: String;

  @Field(() => String, {nullable: true})
  category!: String;

  @Field(() => String, {nullable: true})
  name!: String;
}


@InputType()
export class changeApporvedStatusPostInput {
 
  @Field(() => String, {nullable: true})
  approved!: String;

  @Field(() => String, {nullable: true})
  id!: String;

}

@ObjectType()
export class PostGiveApporovedOutput {
 
  @Field(() => String, {nullable: true})
  isUpdated!: Boolean;

}


// @ObjectType()
// export class PostLoginOutpput {
 
//   @Field(() => String, {nullable: true})
//   status!: String;

//   @Field(() => String, {nullable: true})
//   data!: String;
// }
// @InputType()
// export class VerifyPost {
 
//   @Field(() => String, {nullable: true})
//   contact!: String;

// }
