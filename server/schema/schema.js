const graphql = require('graphql')
//get function GraphQlObjectType
const { GraphQlObjectType, GraphQLString } = graphql
//define a new type
const ActivityType = new GraphQlObjectType({
    name: "Activity",
    fields:() =>({
        id: {type: GraphQLString},
        title: {type: GraphQLString},
        comment: {type: GraphQLString}
    })
});