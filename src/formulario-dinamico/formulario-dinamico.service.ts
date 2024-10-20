import { Injectable } from '@nestjs/common';
//import {RequestManagerService}from "../request-manager/request-manager.service"
@Injectable()
export class FormularioDinamicoService {
    constructor(/*private readonly service:RequestManagerService*/) {}

    procesarFormularioDinamico(data: any):any{
        let jsonAgrupado = this.clasificarJson(data)
        //this.service.post(jsonAgrupado, "url")
        return jsonAgrupado
    }

    private clasificarJson(data: any): any {
        const agrupadoPorEndpoint: any = {};
        const desagrupados: any = {}
        data.campos.forEach((campos: any) => {
            if(campos.agrupado===false){
                desagrupados[campos.endpoint]=[];
                desagrupados[campos.endpoint].push(campos);
            }  else {
                // Verifica si ya existe el grupo por endpoint y servicio
                if (!agrupadoPorEndpoint[campos.endpoint]) {
                    agrupadoPorEndpoint[campos.endpoint] = {};
                }
                
                if (!agrupadoPorEndpoint[campos.endpoint][campos.servicio]) {
                    agrupadoPorEndpoint[campos.endpoint][campos.servicio] = {
                        endpoint: campos.endpoint,
                        servicio: campos.servicio,
                        items: []
                    };
                }
    
                // Extraer endpoint y servicio, y agrupar el resto de los campos
                const { endpoint, servicio, ...camposRestantes } = campos;
                agrupadoPorEndpoint[campos.endpoint][campos.servicio].items.push(camposRestantes);
            }
        });
    
        return {
            agrupados: agrupadoPorEndpoint,
            desagrupados: desagrupados
        };
    }
}
