const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/** 
 * Rota / Recurso
*/

/**
 * Metodos HTTP
 * 
 * GET - Buscar/Listar informações
 * POST - Criar nova informação
 * PUT - Alterar informação existente
 * DELETE - Deletar informação
 */


 /**
  * Tipos de Parâmetros
  * 
  * Query Params - Parâmetros nomeados enviados na rota após um símbolo "?" (Filtros, Paginação), anexados com um símbolo "&"
  * Route Params - Parâmetros utilizados para identificar recursos 
  * Request Body - Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  * const params = request.query //Acessa parâmetros do tipo Query
  * const params = request.params //Acessa parâmetros do tipo Route
  * const params = request.body //Acessa parâmetros do tipo Body
  */

  /**
   * Bancos de Dados
   * 
   * SQL: MySQL, SQLite, PostgreSQL, Oracle
   * NoSQL: MongoDB, CouchDB, Firebase 
   */

   /**
    * Query Types
    * 
    * Driver: SELECT * FROM users
    * Query Builder: table(users).select(*).where();
    */

app.listen(3333);