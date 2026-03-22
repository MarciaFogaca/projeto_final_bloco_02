import { Body, Controller, Delete, Get, HttpCode,
     HttpStatus, Param, Post, Put, ParseIntPipe , UseGuards} from "@nestjs/common";
import { CategoriaService } from "../services/categoria.service";
import { Categoria } from "../entities/categoria.entity";
import { AuthGuard } from "@nestjs/passport";

@UseGuards(AuthGuard('jwt'))
@Controller("/categorias")
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) { }

    @Get()
    findAll(): Promise<Categoria[]> { return this.categoriaService.findAll(); }

    @Get('/:id')
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return this.categoriaService.findById(id);
    }

    @Get('/tipo/:tipo')
    findByTipo(@Param('tipo') tipo: string): Promise<Categoria[]> {
        return this.categoriaService.findByTipo(tipo);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.create(categoria);
    }

    @Put()
    update(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.update(categoria);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.categoriaService.delete(id);
    }
}