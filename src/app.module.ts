import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreModule } from 'src/modules/store/store.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src'),   // <-- path to the static files
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'weather',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    StoreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
