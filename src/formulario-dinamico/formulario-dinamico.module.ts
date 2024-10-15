import { Module } from '@nestjs/common';
import {FormularioDinamicoController} from './formulario-dinamico.controller';
import {FormularioDinamicoService} from './formulario-dinamico.service';

@Module({
    controllers:[FormularioDinamicoController],
    providers: [FormularioDinamicoService],
    imports: []
})
export class FormularioDinamicoModule {}
