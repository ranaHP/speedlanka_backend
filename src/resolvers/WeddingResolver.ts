import { Resolver,
    Mutation,
    Arg,
    Query} from 'type-graphql';
import {  GetWeddingPostInput, SearchWeddingPost, Wedding, WeddingInput, WeddingPostGiveApporovedOutput } from '../entity/Wedding';
import WeddingModel from '../models/Wedding.model';

  const sign = require('jwt-encode');
  const secret = 'secret';

  @Resolver()
  export class WeddingResolver {
    @Query(() => [Wedding])
    async WeddingPostslimit() {
      try {
        return await WeddingModel.find({}, { __v: 0 }).limit(8);
      } catch (err) {
        return err;
      }
    }

    @Query(() => [Wedding])
    async WeddingPosts() {
      try {
        return await WeddingModel.find({}, { __v: 0 });
      } catch (err) {
        return err;
      }
    }

    @Query(() => [Wedding])
    async getWeddingPostsSearch(
      @Arg("variables", () => SearchWeddingPost) variables: SearchWeddingPost
    ) {
      try {
        return await WeddingModel.find({
          age:  { $gt: variables.ageFrom, $lt: variables.ageTo } ,
          gender: {'$regex' : variables.gender, '$options' : 'i'}, 
          language: {'$regex' : variables.language, '$options' : 'i'},
          religion: {'$regex' : variables.religion, '$options' : 'i'}, 
          job: {'$regex' : variables.job, '$options' : 'i'}, 

        }, { __v: 0 });
      } catch (err) {
        return err;
      }
    }
    
    @Query(() => [Wedding])
    async getWeddingPostForSeller(
      @Arg("variables", () => GetWeddingPostInput) variables: GetWeddingPostInput
    ) {
      try {
        return  await WeddingModel.find({ mobile: variables.sellerContact});
      } catch (error) {
        return error;
      }
    }
  
    @Mutation(() => Wedding)
    async createWeddingPost(
      @Arg("variables", () => WeddingInput) variables: WeddingInput
    ) {
      try {
        const newPost = new WeddingModel(variables);
        return await newPost.save();
      } catch (error) {
        return error;
      }
      
    }
  
  
    // @Mutation(() => Boolean)
    // async deletePost(
    //   @Arg("_id", () => String) _id: string) {
    //     try {
    //       if (await WeddingModel.findByIdAndDelete(_id)) {
    //         return true;
    //       }else{
    //         return false;
    //       }
    //     } catch (error) {
    //       return error;
    //     }
    // }
  
    @Mutation(() => WeddingPostGiveApporovedOutput)
    async changeStatusWeddingPost(
      @Arg("_id", () => String) _id: string,
      @Arg("status", () => String) status: string,
      @Arg("message", () => String) message: string
      ) {
      try {
        const result = await WeddingModel.updateOne({_id }, {approved: status , message: message});
        let resultSet =new WeddingPostGiveApporovedOutput();
        resultSet.isUpdated = result.n;
        return resultSet;
      } catch (error) {
        return error;
      }
    }

    // @Mutation(() => PostGiveApporovedOutput)
    // async approvedPost(
    //   @Arg("_id", () => String) _id: string
    //   ) {
    //   try {
    //     const result = await WeddingModel.updateOne({ _id }, {approved: "approved"});
    //     let resultSet =new PostGiveApporovedOutput();
    //     resultSet.isUpdated = result.n;
    //     return resultSet;
    //   } catch (error) {
    //     return error;
    //   }
    // }

    // // verify seller
    // @Mutation(() => PostUpdateOutpput)
    // async verifyPost(
    //   @Arg("_id", () => String) _id: string
    // ) {
    //   try {
    //     const result = await WeddingModel.updateOne({ _id }, {status: "verified"});
    //     let resultSet =new PostUpdateOutpput();
    //     resultSet.isUpdated = result.n;
    //     return resultSet;
    //   } catch (error) {
    //     return error;
    //   }
    // }
  }