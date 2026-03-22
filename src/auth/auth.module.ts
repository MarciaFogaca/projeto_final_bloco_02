import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport'; 
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { UsuarioModule } from '../usuario/usuario.module';
import { JwtStrategy } from './strategy/jwt.strategy'; 
import { JwtAuthGuard } from './guards/jwt.auth.guard'; 

@Module({
  imports: [
    UsuarioModule,
    PassportModule, 
    JwtModule.register({ 
      secret: process.env.JWT_SECRET ?? 'sua_chave_secreta', 
      signOptions: { expiresIn: '24h' }, 
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,   
    JwtAuthGuard, 
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}