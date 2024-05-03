import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { SalleService } from './salle.service';
import { Salle } from './salle.entity/salle.entity';

@Controller('salle')
export class SalleController {
    constructor(private service: SalleService) { }


    @Get()
    getAll(@Param() params) {
        return this.service.getSalles();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getSalle(params.id);
    }

    @Post()
    create(@Body() Salle: Salle) {
        return this.service.createSalle(Salle);
    }

    @Put()
    update(@Body() Salle: Salle) {
        return this.service.updateSalle(Salle);
    }

    @Delete(':id')
    deleteSalle(@Param() params) {
        return this.service.deleteSalle(params.id);
    }
}
