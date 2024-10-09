import { Module } from '@nestjs/common';
import { FormularioDinamicoService } from './formulario-dinamico/formulario-dinamico.service';

@Module({
  providers: [FormularioDinamicoService],
  exports: [FormularioDinamicoService],
})
export class ServicesModule {}
