import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';

import { AppConfigModule } from '../config/appConfig/app-config.module';
import { TypeOrmConfiguration } from '../config/database/type-orm-configuration';
import { MailConfigModule } from '../config/mailConfig/mail-config.module';
import { AuthModule } from './auth/auth.module';
import { CarPostModule } from './carPost/carPost.module';
import { FilesModule } from './files/files.module';
import { MailModule } from './mail/mail.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AppConfigModule,
    TypeOrmModule.forRootAsync(TypeOrmConfiguration.config),
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    AuthModule,
    RoleModule,
    CarPostModule,
    FilesModule,
    MailModule,
    MailConfigModule,
    MailerModule,
  ],
})
export class AppModule {}
