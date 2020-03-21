import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { City } from "../entities/city.entity";
import { Repository } from "typeorm";

@Injectable()
export class CityService{
    constructor(
        @InjectRepository(City)
        private readonly repository: Repository<City>,
    ){}

    async get(): Promise<City[]>{
        return await this.repository.find({
            order: {
                amount: "DESC"
            },
            take: 5
        });
    }

    async getByCode(code: number): Promise<City>{
        return await this.repository.findOne({code: code});
    }

    async post(city: City){
        await this.repository.save(city);
    }

    async put(id: number, city: City){
        await this.repository.update(id, city);
    }
}