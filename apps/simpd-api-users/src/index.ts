import 'dotenv/config';
import {NestFactory} from '@nestjs/core';
import {UserModule} from './user.module';
import {WsAdapter} from '@nestjs/platform-ws';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  // @ts-ignore
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(process.env.PORT!);
}

bootstrap();
