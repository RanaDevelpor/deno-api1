 import db from "../db/database.js";


const users = db.collection("users");

export default{


    async get(ctx:any){
        
          const user = await users.find();
        ctx.response.body = user; 
    },
    async getUser(ctx: any) {
        const userId = ctx.params.id; // Get the user ID from the request parameters

    },
      
    async create(ctx:any){
        ctx.response.status = 201;
       const {value} = await ctx.request.body();
    
         const data = await users.insertOne(value);
           ctx.response.body = data; 
     },





     
    update(ctx:any){
        ctx.response.body = "Update user router"; 
    },
    delete(ctx:any){
        ctx.response.body = "Delete user router"; 
    }
}