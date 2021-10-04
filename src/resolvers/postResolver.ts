import { Resolver,
    Mutation,
    Arg,
    Query} from 'type-graphql';
import { changeApporvedStatusPostInput, GetPostInput, GetUnapprovedPostInput, Post, PostGiveApporovedOutput, PostInput } from '../entity/Post';
// import { GetPostInput, Post, PostInput, PostLoginOutpput, PostUpdateInput, PostUpdateOutpput } from '../entity/Post';
import PostModel from '../models/Poduct.model';
  const sign = require('jwt-encode');
  const secret = 'secret';

  @Resolver()
  export class PostResolver {
    @Query(() => [Post])
    async Postslimit() {
      try {
        return await PostModel.find({}, { __v: 0 }).limit(8);
      } catch (err) {
        return err;
      }
    }
    @Query(() => [Post])
    async Posts() {
      try {
        return await PostModel.find({}, { __v: 0 });
      } catch (err) {
        return err;
      }
    }
    @Query(() => [Post])
    async getUnVerifiedPosts(
      @Arg("variables", () => GetUnapprovedPostInput) variables: GetUnapprovedPostInput
    ) {
      try {
        return await PostModel.find({
          title: {'$regex' : variables.name, '$options' : 'i'},
          approved : "approved",
          location:{'$regex' : variables.location, '$options' : 'i'},
          cType: {'$regex' : variables.category, '$options' : 'i'},
        }, { __v: 0 });
      } catch (err) {
        return err;
      }
    }
    
    @Query(() => [Post])
    async getPost(
      @Arg("variables", () => GetPostInput) variables: GetPostInput
    ) {
      try {
        return  await PostModel.find({ sellerContact: variables.sellerContact});
        

      } catch (error) {
        return error;
      }
    }
  
    @Mutation(() => Post)
    async createPost(
      @Arg("variables", () => PostInput) variables: PostInput
    ) {
      try {
        const newPost = new PostModel(variables);
        return await newPost.save();
      } catch (error) {
        return error;
      }
      
    }
  
  
    // @Mutation(() => Boolean)
    // async deletePost(
    //   @Arg("_id", () => String) _id: string) {
    //     try {
    //       if (await PostModel.findByIdAndDelete(_id)) {
    //         return true;
    //       }else{
    //         return false;
    //       }
    //     } catch (error) {
    //       return error;
    //     }
    // }
  
    @Mutation(() => PostGiveApporovedOutput)
    async changeStatusPost(
      @Arg("_id", () => String) _id: string,
      @Arg("status", () => String) status: string,
      @Arg("message", () => String) message: string
      ) {
      try {
        const result = await PostModel.updateOne({_id }, {approved: status , message: message});
        let resultSet =new PostGiveApporovedOutput();
        resultSet.isUpdated = result.n;
        return resultSet;
      } catch (error) {
        return error;
      }
    }

    @Mutation(() => PostGiveApporovedOutput)
    async approvedPost(
      @Arg("_id", () => String) _id: string
      ) {
      try {
        const result = await PostModel.updateOne({ _id }, {approved: "approved"});
        let resultSet =new PostGiveApporovedOutput();
        resultSet.isUpdated = result.n;
        return resultSet;
      } catch (error) {
        return error;
      }
    }

    // // verify seller
    // @Mutation(() => PostUpdateOutpput)
    // async verifyPost(
    //   @Arg("_id", () => String) _id: string
    // ) {
    //   try {
    //     const result = await PostModel.updateOne({ _id }, {status: "verified"});
    //     let resultSet =new PostUpdateOutpput();
    //     resultSet.isUpdated = result.n;
    //     return resultSet;
    //   } catch (error) {
    //     return error;
    //   }
    // }
  }