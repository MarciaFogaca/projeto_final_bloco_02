import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { UsuarioModule } from '../usuario/usuario.module';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [UsuarioModule], 
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}