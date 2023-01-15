import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { Cat } from './cats/entities/cat.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.RDS_HOSTNAME || 'localhost',
      port: parseInt(process.env.RDS_PORT) || 5432,
      database: process.env.RDS_DB_NAME || 'nest1',
      username: process.env.RDS_USERNAME || 'postgres',
      password: process.env.RDS_PASSWORD || 'example',
      entities: [Cat],
      synchronize: true,
    }),
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
