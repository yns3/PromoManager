import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatiereModule } from './matiere/matiere.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromoModule } from './promo/promo.module';
import { UtilisateursModule } from './utilisateur/utilisateur.module';
import { SalleModule } from './salle/salle.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'instamanager',
      entities: ['dist/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),MatiereModule, PromoModule, UtilisateursModule, SalleModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
