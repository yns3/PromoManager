import { Module } from '@nestjs/common';
import { PromoService } from './promo.service';
import { PromoController } from './promo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Promo } from './promo.entity/promo.entity';
import { MatiereModule } from 'src/matiere/matiere.module';

@Module({
  imports: [TypeOrmModule.forFeature([Promo]), MatiereModule],
  providers: [PromoService],//MatiereService],
  controllers: [PromoController]
})

export class PromoModule {}
