import { Controller, Get, Post, Param, Body, Put } from "@nestjs/common";
import { CityService } from "../services/city.service";
import { City } from "../entities/city.entity";

// localhost:3000/v1/cities
@Controller('v1/cities')
export class CityController {
    constructor(private readonly service: CityService){}

    @Get()
    async getAll(){
        try {
            const cities = await this.service.get();
            return cities;
        } catch (error) {
            return 'Error';
        }
    }

    @Get(':code')
    async getByCode(@Param('code') code){
        try {
            const city = await this.service.getByCode(code);
            return city;
        } catch (error) {
            return 'Error';
        }
    }

    @Post()
    async post(@Body() model: City){
        try {
            await this.service.post(model);
            return 'Cidade salva com sucesso!';
        } catch (error) {
            return 'Error';
        }
    }

    @Put(':id')
    async update(@Param('id') id, @Body() model: City){
        try {
            await this.service.put(id, model);
            return 'Cidade atualizada com sucesso!';
        } catch (error) {
            return 'Error';
        }
    }
}
