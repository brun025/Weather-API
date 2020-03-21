import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityController } from './controllers/city.controller';
import { CityService } from './services/city.service';
import { City } from './entities/city.entity';

@Module({
    imports: [TypeOrmModule.forFeature([
        City,
    ])],
    controllers: [
        CityController,
    ],
    providers: [
        CityService,
    ],
})
export class StoreModule {}
