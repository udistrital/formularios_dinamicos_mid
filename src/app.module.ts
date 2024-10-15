import { Module } from '@nestjs/common';

import { FormularioDinamicoModule } from './formulario-dinamico/formulario-dinamico.module';
import { RequestManagerModule } from './request-manager/request-manager.module';

@Module({
  imports: [FormularioDinamicoModule, RequestManagerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
