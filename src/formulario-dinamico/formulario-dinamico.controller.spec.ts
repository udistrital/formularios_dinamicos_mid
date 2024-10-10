import { Test, TestingModule } from '@nestjs/testing';
import { FormularioDinamicoController } from './formulario-dinamico.controller';

describe('FormularioDinamicoController', () => {
  let controller: FormularioDinamicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormularioDinamicoController],
    }).compile();

    controller = module.get<FormularioDinamicoController>(FormularioDinamicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
