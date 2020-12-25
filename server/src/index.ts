import app from './app/app';
import database from './app/database/database';
import config from './app/core/config';
import logger from './app/core/logger';

(async () => {
    await database.authenticate();
    app.listen(config.port, () => {
        logger.info('server started.');
    });
})();
