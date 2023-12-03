import { registerAs } from '@nestjs/config';
import * as process from 'process';

export default registerAs('mail', () => ({
  from: process.env.NO_REPLAY,
  service: process.env.NO_REPLAY_SERVICE,
  auth: {
    user: process.env.NO_REPLAY_EMAIL,
    pass: process.env.NO_REPLAY_PASSWORD,
  },
}));
