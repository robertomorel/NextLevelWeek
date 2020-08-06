/**
 * -----------------------------------------------------------------------------
 *  Para que o Knex possa executar sem problemas com o Typescript
 *     Observações:
 *       connection - localização do DB para conexão
 *       migrations - localização das migrations
 *       seeds      - localização dos seeds (para criar registros automatic.)
 *       useNullAsDefault - para jogar null nos campos sem valor
 * -----------------------------------------------------------------------------
 */
import path from 'path';

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  },
  useNullAsDefault: true,
};