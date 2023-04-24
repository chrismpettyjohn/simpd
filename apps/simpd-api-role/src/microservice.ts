import 'dotenv/config';
import {NestFactory} from '@nestjs/core';
import {RoleModule} from './role.module';
import {ROLE_SERVICE_NAME, ROLE_SERVICE_PROTO} from '@simpd/api-lib';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RoleModule,
    {
      transport: Transport.GRPC,
      options: {
        package: ROLE_SERVICE_NAME,
        protoPath: ROLE_SERVICE_PROTO,
      },
    }
  );
  await app.listen();
}

bootstrap();
