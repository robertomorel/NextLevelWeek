/**
 * -----------------------------------------------------------------------------
 *  Conexão com o Banco de Dados SQLITE com o Knex
 *     Observações:
 *       useNullAsDefault - para jogar null nos campos sem valor
 * -----------------------------------------------------------------------------
 */
import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
});

export default connection;
