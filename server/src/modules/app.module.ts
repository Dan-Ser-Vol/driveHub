import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmConfiguration } from '../config/database/type-orm-configuration';
import { AuthModule } from './auth/auth.module';
import { CarPostModule } from './carPost/carPost.module';
import { FilesModule } from './files/files.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { MailModule } from './mail/mail.module';
import { MailConfigModule } from '../config/mailConfig/mail-config.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
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
