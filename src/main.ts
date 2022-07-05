import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
// import express from 'express';
// import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import { GLOBAL_API_PREFIX } from './constants/app-strings';

async function bootstrap() {
  // const server = new ExpressAdapter(express());
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(GLOBAL_API_PREFIX);
  app.useGlobalPipes(new ValidationPipe());
  setupSwagger(app);
  const port = process.env.PORT || 8080
  await app.listen(port);
}
bootstrap();
