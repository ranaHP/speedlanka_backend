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
export class Wedding extends BaseEntity {
  @Field(() => String, {nullable: true})
  @Column( )
  _id!: String;

  @Field(() => String, {nullable: true})
  @Column()
  fname!: String;

  @Field(() => String, {nullable: true})
  @Column()
  lname!: String;

  @Field(() => Number, {nullable: true})
  @Column()
  age!: Number;

  @Field(() => String, {nullable: true})
  @Column()
  email!: String;

  @Field(() => String, {nullable: true})
  @Column()
  gender!: String;

  @Field(() => String, {nullable: true})
  @Column()
  mobile!: String;

  @Field(() => String, {nullable: true })
  @Column()
  bodyType!: String;

  @Field(() => Number, {nullable: true })
  @Column()
  height!: Number;

  @Field(() => String, {nullable: true })
  @Column()
  image!: String;

  @Field(() => String, {nullable: true })
  @Column()
  approved!: String;

  @Field(() => String, {nullable: true })
  @Column()
  date!: Date;

  @Field(() => String, {nullable: true })
  @Column()
  maritalStatus!: String;

  @Field(()  => String, {nullable: true })
  @Column()
  dob!: String;

  @Field(()  => String, {nullable: true })
  @Column()
  message!: String;

  
  @Field(()  => String, {nullable: true })
  @Column()
  location!: String;


  
  @Field(()  => String, {nullable: true })
  @Column()
  nationality!: String;



  
  @Field(()  => String, {nullable: true })
  @Column()
  religion!: String;


  
  @Field(()  => String, {nullable: true })
  @Column()
  educationLevel!: String;

  @Field(()  => String, {nullable: true })
  @Column()
  job!: String;
  @Field(()  => String, {nullable: true })
  @Column()
  language!: String;
  @Field(()  => String, {nullable: true })
  @Column()
  lagnaya!: String;
  @Field(()  => String, {nullable: true })
  @Column()
  desc!: String;
}



@InputType()
export class WeddingInput {
 
  @Field(() => String, {nullable: true})
  @Column( )
  _id!: String;

  @Field(() => String, {nullable: true})
  @Column()
  fname!: String;

  @Field(() => String, {nullable: true})
  @Column()
  lname!: String;

  @Field(() => Number, {nullable: true})
  @Column()
  age!: Number;

  @Field(() => String, {nullable: true})
  @Column()
  email!: String;

  @Field(() => String, {nullable: true})
  @Column()
  gender!: String;

  @Field(() => String, {nullable: true})
  @Column()
  mobile!: String;

  @Field(() => String, {nullable: true })
  @Column()
  bodyType!: String;

  @Field(() => Number, {nullable: true })
  @Column()
  height!: Number;

  @Field(() => String, {nullable: true })
  @Column()
  image!: String;

  @Field(() => String, {nullable: true })
  @Column()
  approved!: String;

  @Field(() => String, {nullable: true })
  @Column()
  date!: String;

  @Field(() => String, {nullable: true })
  @Column()
  maritalStatus!: String;

  @Field(()  => String, {nullable: true })
  @Column()
  dob!: String;

  @Field(()  => String, {nullable: true })
  @Column()
  message!: String;

  
  @Field(()  => String, {nullable: true })
  @Column()
  location!: String;


  
  @Field(()  => String, {nullable: true })
  @Column()
  nationality!: String;



  
  @Field(()  => String, {nullable: true })
  @Column()
  religion!: String;


  
  @Field(()  => String, {nullable: true })
  @Column()
  educationLevel!: String;

  @Field(()  => String, {nullable: true })
  @Column()
  job!: String;
  @Field(()  => String, {nullable: true })
  @Column()
  language!: String;
  @Field(()  => String, {nullable: true })
  @Column()
  lagnaya!: String;
  @Field(()  => String, {nullable: true })
  @Column()
  desc!: String;
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
export class GetWeddingPostInput {
 
  @Field(() => String, {nullable: true})
  sellerContact!: String;

}

@InputType()
export class SearchWeddingPost {
 
  @Field(() => String, {nullable: true})
  gender!: String;

  @Field(() => Number, {nullable: true})
  ageFrom!: Number;
  
  @Field(() => Number, {nullable: true})
  ageTo!: Number;

  @Field(() => String, {nullable: true})
  religion!: String;

  @Field(() => String, {nullable: true})
  language!: String;

  @Field(() => String, {nullable: true})
  job!: String;
}


@InputType()
export class changeApporvedStatusWeddingPostInput {
 
  @Field(() => String, {nullable: true})
  approved!: String;

  @Field(() => String, {nullable: true})
  id!: String;

}

@ObjectType()
export class WeddingPostGiveApporovedOutput {
 
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
