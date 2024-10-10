import { Controller, Post, Body} from '@nestjs/common';
import {FormularioDinamicoService}from './formulario-dinamico.service'

@Controller('formulario-dinamico')
export class FormularioDinamicoController {
 constructor(private readonly FormularioDinamicoService: FormularioDinamicoService){}
 
    @Post()
    traerFormularioDinamico(@Body() data:any){
        
        console.log(data)
        let dataService = this.FormularioDinamicoService.procesarFormularioDinamico(data)
        return{
            Success: true,
            Status: 200,
            Messaje: 'data formuario dinamico recibido',
            Data: {
                id:123456789,
                valor: dataService
            }
        };
    }
}
