const graphql = require('graphl')
const_ = require('lodash') //find data or change data
//get function GraphQlObjectType
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql
//define a new type
const ActivityType = new GraphQLObjectType({
    name: "Activity",
    fields:() =>({
        id: {type: GraphQLString},
        title: {type: GraphQLString},
        comment: {type: GraphQLString}
    })
});

// root query,describe how the user grab data
//find an activity by id
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        activity:{
            type: ActivityType,
            args:{ id:{type:GraphQLString}},
            resolve(parent, args){
                //get data from the db to the source
               return  _.find(activities, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})
