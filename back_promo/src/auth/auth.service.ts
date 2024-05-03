import { Injectable } from '@nestjs/common';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UtilisateurService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.mdp === pass) {
      const { mdp, ...result } = user;
      return result;
    }
    return null;
  }
}