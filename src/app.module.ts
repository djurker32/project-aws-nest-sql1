import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { Cat } from './cats/entities/cat.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

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
    CatsModule,
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
