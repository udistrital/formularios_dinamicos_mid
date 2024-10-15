import { Test, TestingModule } from '@nestjs/testing';
import { FormularioDinamicoService } from './formulario-dinamico.service';

describe('FormularioDinamicoService', () => {
  let service: FormularioDinamicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormularioDinamicoService],
    }).compile();

    service = module.get<FormularioDinamicoService>(FormularioDinamicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
