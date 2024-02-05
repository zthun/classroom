import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { ZSchoolModule } from './app/school-module.mjs';

(async function () {
  const app = await NestFactory.create(ZSchoolModule);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Classroom API')
    .setDescription('The API for Zthunworks University')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.use(helmet());

  await app.listen(3000);
})();
