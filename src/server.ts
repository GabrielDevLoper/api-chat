import { serverHttp } from "./app";
import "./websocket";

serverHttp.listen(process.env.PORT || 3333, () => console.log("Servidor executando na porta 3333"));