import { Module } from '@nestjs/common';
import { FormularioDinamicoController } from './formulario-dinamico/formulario-dinamico.controller';

import { FormularioDinamicoModule } from './formulario-dinamico/formulario-dinamico.module';

@Module({
  imports: [FormularioDinamicoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
