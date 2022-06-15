import { GraphQLClient } from "graphql-request";
import { updateSeenMutation, publishMutation } from "../../services/constants";

const changeToSeen = async ({ body }, res) => {
  const url = process.env.GRAPHQL_API_ENDPOINT;
  const graphcms = new GraphQLClient(url, {
    headers: { Authorization: process.env.GRAPHQL_API_TOKEN },
  });

  const variables = { slug: body.slug };

  await graphcms.request(updateSeenMutation, variables);

  await graphcms.request(publishMutation, variables);

  res.status(201).json(variables);
};

export default changeToSeen;
