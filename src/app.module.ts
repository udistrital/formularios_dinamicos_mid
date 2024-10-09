import { Module } from '@nestjs/common';
import { FormularioDinamicoController } from './controllers/formulario-dinamico/formulario-dinamico.controller';
import { HealthController } from './controllers/health/health.controller';

import { ServicesModule } from './services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [FormularioDinamicoController,HealthController],
  providers: [],
})
export class AppModule {}
