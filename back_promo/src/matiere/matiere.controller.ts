import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MatiereService } from './matiere.service';
import { Matiere } from './matiere.entity/matiere.entity';

@Controller('matiere')
export class MatiereController {
    constructor(private service: MatiereService) { }


    @Get()
    getAll(@Param() params) {
        return this.service.getMatieres();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getMatiere(params.id);
    }

    @Post()
    create(@Body() Matiere: Matiere) {
        return this.service.createMatiere(Matiere);
    }

    @Put()
    update(@Body() Matiere: Matiere) {
        return this.service.updateMatiere(Matiere);
    }

    @Delete(':id')
    deleteMatiere(@Param() params) {
        return this.service.deleteMatiere(params.id);
    }
}
