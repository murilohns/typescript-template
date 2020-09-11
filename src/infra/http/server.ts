import { logger } from '@/lib/logger';

import app from './app';

app.listen(3000, () => logger.info('Server up and running at port 3000'));
