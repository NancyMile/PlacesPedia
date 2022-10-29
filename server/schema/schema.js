const graphql = require('graphql')
const_ = require('lodash') //find data or change data
//get function GraphQlObjectType
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql
//define a new type
const ActivityType = new GraphQLObjectType({
    name: "Activity",
    fields:() =>({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        comment: {type: GraphQLString}
    })
});

//user type
const UserType = new GraphQLObjectType({
    name: "User",
    fields:() =>({
        id: {type: GraphQLID},
        email: {type: GraphQLString}
    })
});


// root query,describe how the user grab data
//find an activity by id
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        activity:{
            type: ActivityType,
            args:{ id:{type:GraphQLID}},
            resolve(parent, args){
                //get data from the db to the source
               return  _.find(activities, {id: args.id});
            }
        },
        user:{
            type: UserType,
            args:{id:{type:GraphQLID}},
            resolve(parent, args){
                return _.find(users,{id: args.id})
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})
