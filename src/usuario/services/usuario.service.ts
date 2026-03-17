import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'; 
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
    ) { }

    async findByUsuario(usuario: string): Promise<Usuario | undefined> {
        return await this.usuarioRepository.findOne({
            where: { usuario },
            
        });
    }

    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find({
        
        });
    }

    async create(usuario: Usuario): Promise<Usuario> {
        const buscaUsuario = await this.findByUsuario(usuario.usuario);

        if (!buscaUsuario) {
            usuario.senha = await bcrypt.hash(usuario.senha, 10);
            return await this.usuarioRepository.save(usuario);
        }

        throw new HttpException("O Usuário já existe!", HttpStatus.BAD_REQUEST);
    }
}