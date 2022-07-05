import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuardianModule } from './guardian/guardian.module';
import { Guardian } from './guardian/models/guardian.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DB_HOST,
      username: process.env.DB_USER,
      database: process.env.DB_NAME,
      entities: [Guardian],
      password: process.env.DB_PASSWORD,
      synchronize: true,
    }),
    GuardianModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
