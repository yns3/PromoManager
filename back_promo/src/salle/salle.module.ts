import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalleService } from './salle.service';
import { SalleController } from './salle.controller';
import { Salle } from './salle.entity/salle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Salle])],
  providers: [SalleService],
  controllers: [SalleController]
})

export class SalleModule {}
