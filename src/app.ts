import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/userResolver";
import { PostResolver } from "./resolvers/postResolver";
import { WeddingResolver } from "./resolvers/WeddingResolver";

export async function startServer() {
 
  const app = express();
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, PostResolver, WeddingResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res })
  });

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}
