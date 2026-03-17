import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({ name: 'tb_usuarios' })
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @IsString()
    @Column({ length: 255 }) 
    nome: string;

    @IsNotEmpty()
    @IsEmail()
    @Column({ length: 255, unique: true }) 
    usuario: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @Column({ length: 255 }) 
    senha: string;

    @Column({ length: 5000, nullable: true })
    foto: string;

    produto: Produto[];
}