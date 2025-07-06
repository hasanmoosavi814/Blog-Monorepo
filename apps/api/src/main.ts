import { swaggerConfigInit } from "./config/swagger.config";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swaggerConfigInit(app);
  app.useGlobalPipes(new ValidationPipe());

  const { PORT = 5700, HOST_URL = `http://localhost:${PORT}` } = process.env;

  await app.listen(PORT);

  console.log(`🚀 Server is running on ${HOST_URL}`);
  console.log(`📚 Swagger Docs available at ${HOST_URL}/swagger`);
}

bootstrap();
