import { ConfigType } from '@nestjs/config';

import configuration from './configuration';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MailConfigService {
  constructor(
    @Inject(configuration.KEY)
    private mailConfiguration: ConfigType<typeof configuration>,
  ) {}

  get from(): string {
    return this.mailConfiguration.from;
  }

  get service(): string {
    return this.mailConfiguration.service;
  }

  get auth(): Record<string, string> {
    return this.mailConfiguration.auth;
  }
}
