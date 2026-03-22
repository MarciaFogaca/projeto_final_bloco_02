import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'; 
import { UsuarioService } from '../../usuario/services/usuario.service';
import * as bcrypt from 'bcrypt';
import { UsuarioLogin } from '../entities/usuariologin.entity'; 

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService 
    ) {}

    async login(usuarioLogin: UsuarioLogin): Promise<any> {
        let buscaUsuario = await 
        this.usuarioService.findByUsuario(usuarioLogin.usuario);

        if (!buscaUsuario)
            throw new HttpException('Usuário não encontrado!', 
        HttpStatus.NOT_FOUND);

        const senhaOk = await bcrypt.compare(usuarioLogin.senha || '', 
        buscaUsuario.senha || ''); 

        if (!senhaOk) 
            throw new HttpException('Senha incorreta!', 
                HttpStatus.UNAUTHORIZED);

        const payload = { 
            sub: buscaUsuario.id, 
            username: buscaUsuario.usuario 
        };

        return {
            id: buscaUsuario.id,
            nome: buscaUsuario.nome,
            usuario: buscaUsuario.usuario,
            foto: buscaUsuario.foto,
            token: `Bearer ${this.jwtService.sign(payload)}` 
        };
    }
}