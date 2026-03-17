import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { UsuarioService } from '../../usuario/services/usuario.service';
import * as bcrypt from 'bcrypt';
import { UsuarioLogin } from '../entities/usuariologin.entity'; 
@Injectable()
export class AuthService {
    constructor(private usuarioService: UsuarioService) {}

    async login(usuarioLogin: UsuarioLogin): Promise<any> {
        let buscaUsuario = await 
        this.usuarioService.findByUsuario(usuarioLogin.usuario);

        if (!buscaUsuario)
            throw new HttpException('Usuário não encontrado!', 
        HttpStatus.NOT_FOUND);

        const senhaOk = await bcrypt.compare( usuarioLogin.senha || '', 
    buscaUsuario.senha || '' ); 

        if (senhaOk) {
            return buscaUsuario;
        }

        throw new HttpException('Senha incorreta!', 
            HttpStatus.UNAUTHORIZED);
    }
}