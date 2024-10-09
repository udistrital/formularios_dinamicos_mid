import { Module } from '@nestjs/common';
import {FormularioDinamicoController} from './formulario-dinamico/formulario-dinamico.controller'
import { HealthController } from './health/health.controller';
@Module({
    controllers:[FormularioDinamicoController, HealthController],
})
export class ControllerModule {
}
