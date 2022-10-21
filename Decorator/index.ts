
import * as http from 'http';
import application from "./src/application";
import 'reflect-metadata';

const port = 3000

const server = http.createServer(application.instance);

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})