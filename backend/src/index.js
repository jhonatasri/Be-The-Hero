//importações
const express = require('express');
const cors = require('cors');
const routes = require("./routes");
const app = express();
const port = 3333;


app.use(express.json());
app.use(cors());

//rotas
app.use(routes);


//servidor para rodar
app.listen(port, () => console.log(`Servidor Rodando na porta ` + port));