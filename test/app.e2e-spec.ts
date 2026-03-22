import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest'; 
import { AppModule } from './../src/app.module';
import { DataSource } from 'typeorm';

describe('Auth (e2e)', () => {
  let app: INestApplication;
  let dataSource: DataSource;
  let token: string;

  const usuarioTeste = {
    nome: 'Teste E2E',
    usuario: 'teste@email.com',
    senha: '12345678',
    foto: 'https://foto.com/teste.jpg'
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    dataSource = app.get(DataSource);
  });

  afterEach(async () => {
    await dataSource.query('DELETE FROM tb_usuarios');
    await dataSource.query('ALTER TABLE tb_usuarios AUTO_INCREMENT = 1');
  });

  afterAll(async () => {
    await app.close();
  });

  it('01 - Deve cadastrar um novo usuário', async () => {
    const resposta = await request(app.getHttpServer())
      .post('/usuarios/cadastrar')
      .send(usuarioTeste)
      .expect(201);

    expect(resposta.body.id).toBeDefined();
    expect(resposta.body.usuario).toBe(usuarioTeste.usuario);
  });

  it('02 - Deve logar e retornar token', async () => {
    await request(app.getHttpServer())
      .post('/usuarios/cadastrar')
      .send(usuarioTeste);

    const resposta = await request(app.getHttpServer())
      .post('/auth/logar')
      .send({
        usuario: usuarioTeste.usuario,
        senha: usuarioTeste.senha
      })
      .expect(200);

    expect(resposta.body.token).toBeDefined();
    token = resposta.body.token;
  });

  it('03 - Não deve logar com senha incorreta', async () => {
    await request(app.getHttpServer())
      .post('/usuarios/cadastrar')
      .send(usuarioTeste);

    await request(app.getHttpServer())
      .post('/auth/logar')
      .send({
        usuario: usuarioTeste.usuario,
        senha: 'senhaerrada'
      })
      .expect(401);
  });

  it('04 - Não deve logar com usuário inexistente', async () => {
    await request(app.getHttpServer())
      .post('/auth/logar')
      .send({
        usuario: 'naoexiste@email.com',
        senha: '12345678'
      })
      .expect(404);
  });

  it('05 - Deve acessar rota protegida com token válido', async () => {
    await request(app.getHttpServer())
      .post('/usuarios/cadastrar')
      .send(usuarioTeste);

    const login = await request(app.getHttpServer())
      .post('/auth/logar')

      .send({
        usuario: usuarioTeste.usuario,
        senha: usuarioTeste.senha
      });

    token = login.body.token;

    await request(app.getHttpServer())
      .get('/usuarios/all')
      .set('Authorization', token)
      .expect(200);
  });

  it('06 - Não deve acessar rota protegida sem token', async () => {
    const resposta = await request(app.getHttpServer()) 
      .get('/usuarios/all');

    expect(resposta.status).not.toBe(200); 
  });
});