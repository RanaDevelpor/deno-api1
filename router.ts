import {  Router} from "https://deno.land/x/oak/mod.ts";
import UserController from "./controllers/UserController.js";

const route = new Router();

route.get('/users' , UserController.get)
    .get('/users/:id' ,UserController.getUser)
    .post('/users' ,UserController.create)
    .put('/users/:id' ,UserController.update)
    .delete('/users/:id' ,UserController.delete);

export default route;