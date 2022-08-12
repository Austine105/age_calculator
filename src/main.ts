import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'verbose'],
  });

  await app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
  });
}
bootstrap();
