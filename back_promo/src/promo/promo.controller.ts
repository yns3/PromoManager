import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { PromoService } from './promo.service';
import { Promo } from './promo.entity/promo.entity';

@Controller('promo')
export class PromoController {
    constructor(private service: PromoService) { }


    @Get()
    getAll(@Param() params) {
        return this.service.getPromos();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getPromo(params.id);
    }

    @Post()
    create(@Body() Promo: Promo) {
        return this.service.createPromo(Promo);
    }

    @Put()
    update(@Body() Promo: Promo) {
        return this.service.updatePromo(Promo);
    }

    @Delete(':id')
    deletePromo(@Param() params) {
        return this.service.deletePromo(params.id);
    }
    @Put(':id/matieres')
    async createPromoMatieresRelation(@Param('id') id: string, @Body() body: { matieres: number[] }) {
        const promoId = +id;
        const matiereIds = body.matieres;
        try {
            const updatePromo =
                await this.service.createPromoMatieresRelation(
                promoId,
                matiereIds,
            );
            return {
                message:
                'SUCCESS : Relations entre la Promo et les matières effectuées !',
                data: updatePromo,
            };
        } catch (error) {
            if (error.status === HttpStatus.NOT_FOUND) {
                throw new HttpException('Promo not found', HttpStatus.NOT_FOUND);
            }
            throw new HttpException(
                'ERREUR lors de la relation entre la Promo et les matières !',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
