const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:String,
    email:{
        type:String,
        unique:true,
    },
    password:String
})


const UserModel = mongoose.model('User',userSchema)
console.log(UserModel)

module.exports = UserModel





















/*

Certainly! Let me explain each line of the code and its purpose:

1. `const mongoose = require('mongoose');`
   - This line imports the `mongoose` library, which is a popular Node.js library for interacting with MongoDB, a NoSQL database. It allows you to define schemas, models, and perform various database operations using JavaScript.

2. `const Schema = mongoose.Schema;`
   - This line creates an alias for the `Schema` constructor from the `mongoose` library. Schemas in Mongoose are used to define the structure of the documents (data) that will be stored in a MongoDB collection.

3. `const UserSchema = new Schema({ ... });`
   - Here, a new Mongoose schema is created called `UserSchema`. This schema defines the structure of the documents that will be stored in a MongoDB collection called "users." Each field in the schema corresponds to a property that documents in the "users" collection should have. In this case, it defines fields like `id`, `first_name`, `last_name`, `email`, `gender`, and `city`, along with their data types.

4. `const UserModel = mongoose.model("user", UserSchema, "users");`
   - This line creates a Mongoose model called `UserModel` based on the `UserSchema`. The `mongoose.model` function is used to define and compile a model for a specific MongoDB collection. The parameters used in this function call are as follows:
     - `"user"`: This is the name for the model. It's typically singular and in lowercase, as it will be used for the model name when interacting with the database.
     - `UserSchema`: This is the schema that defines the structure of the documents that will be stored in the "users" collection.
     - `"users"`: This is the name of the MongoDB collection to which this model is associated. Mongoose will create or use the "users" collection in the MongoDB database for this model.

So, in summary, this code sets up a Mongoose schema called `UserSchema` for defining the structure of user documents, and then it creates a Mongoose model called `UserModel` associated with the "users" collection. The model allows you to interact with the "users" collection in MongoDB and perform various database operations using the schema definition.


*/



/*

A Mongoose model is a critical component when working with MongoDB and Mongoose in a Node.js application. It serves several important purposes and enables various actions:

1. Data Validation: Mongoose models use the defined schema to validate data before it's saved to the database. If data doesn't conform to the schema, it won't be saved, helping maintain data integrity.

2. Data Structure Definition: Mongoose models define the structure of documents (data) that will be stored in a MongoDB collection. This allows you to enforce consistency in the data stored in your database.

3. CRUD Operations: Models provide an interface for performing Create, Read, Update, and Delete (CRUD) operations on the associated MongoDB collection. You can use methods like `create`, `find`, `findOne`, `updateOne`, `deleteOne`, and more to interact with the data in the collection.

4. Abstraction of MongoDB Queries: Mongoose abstracts the MongoDB query language, making it easier to work with the database using JavaScript methods and a more expressive API. This simplifies complex queries and aggregations.

5. Middleware and Hooks: You can define pre-save and post-save middleware functions in a Mongoose model to execute custom logic before or after documents are saved, updated, or deleted. This is useful for tasks like data transformation, encryption, or auditing.

6. Schema Enforcement: Models ensure that documents in the collection adhere to the schema. If there's a mismatch, Mongoose can either throw an error or attempt to coerce the data into the correct type, depending on your configuration.

7. Indexing: Mongoose allows you to define indexes on fields within a model's schema. Indexes can improve query performance by allowing faster lookup of data.

8. Object-Document Mapping (ODM): Mongoose provides an Object-Document Mapping layer, making it easier to work with MongoDB. You can work with JavaScript objects rather than writing raw MongoDB queries.

9. Plugins: You can attach plugins to models to add additional functionality, such as pagination, timestamps, or full-text search capabilities.

10. Connection Management: Models can be associated with a specific database connection or use the default connection established by Mongoose. This provides control over which database is used for various parts of your application.

In summary, Mongoose models are essential for defining the structure of your data, enforcing data validation and consistency, and providing an easy-to-use API for interacting with MongoDB. They simplify many database-related tasks and help you work with MongoDB in a more JavaScript-friendly and organized manner.


*/