import { Application,Router} from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import route from './router.js';
import clientError from "./client-error.js";


const app = new Application();
const env = config();
console.log(env);

app.use(route.routes());

app.use(clientError);


app.listen({port:+env.APP_PORT});
console.log("Server at port 8090");
