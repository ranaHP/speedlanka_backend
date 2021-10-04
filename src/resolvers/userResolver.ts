import { Resolver,
    Mutation,
    Arg,
    Query} from 'type-graphql';
    
  import UserModel from '../models/User.model' ;
  import { GetUserInput, User, UserLoginOutpput, UserUpdateOutpput } from '../entity/User';
  import {UserUpdateInput ,UserInput} from '../entity/User';
  const sign = require('jwt-encode');
  const secret = 'secret';

  @Resolver()
  export class UserResolver {
    @Query(() => [User])
    async users() {
      try {
        return await UserModel.find({}, { __v: 0 });
      } catch (err) {
        return err;
      }
    }
  
    @Mutation(() => UserLoginOutpput)
    async getUser(
      @Arg("variables", () => GetUserInput) variables: GetUserInput
    ) {
      try {
        let result =  await UserModel.find({ contact: variables.contact, password: variables.password });
        let userLoginData =new UserLoginOutpput();
        // console.log(result.length);
        if(!result.length){
            userLoginData.data = "";
            userLoginData.status = "fail";
        }else{
            const jwt = sign(result, secret);
            userLoginData.data =  jwt;
            userLoginData.status = "success";
        }
        return userLoginData;

      } catch (error) {
        return error;
      }
    }
  
    @Mutation(() => User)
    async createUser(
      @Arg("variables", () => UserInput) variables: UserInput
    ) {
      try {
        const newUser = new UserModel(variables);
        return await newUser.save();
      } catch (error) {
        return error;
      }
      
    }
  
  
    @Mutation(() => Boolean)
    async deleteUser(
      @Arg("_id", () => String) _id: string) {
        try {
          if (await UserModel.findByIdAndDelete(_id)) {
            return true;
          }else{
            return false;
          }
        } catch (error) {
          return error;
        }
    }
  
    @Mutation(() => UserUpdateOutpput)
    async updateUser(
      @Arg("_id", () => String) _id: string,
      @Arg("fields", () => UserUpdateInput) fields: UserUpdateInput
    ) {
      try {
        const result = await UserModel.updateOne({ _id }, fields);
        let resultSet =new UserUpdateOutpput();
        resultSet.isUpdated = result.n;
        return resultSet;
      } catch (error) {
        return error;
      }
    }

    // verify seller
    @Mutation(() => UserUpdateOutpput)
    async verifyUser(
      @Arg("_id", () => String) _id: string
    ) {
      try {
        const result = await UserModel.updateOne({ _id }, {status: "verified"});
        let resultSet =new UserUpdateOutpput();
        resultSet.isUpdated = result.n;
        return resultSet;
      } catch (error) {
        return error;
      }
    }
  }