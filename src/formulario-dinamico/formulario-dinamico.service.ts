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
        data.campo.forEach((campo: any) => {
            if(campo.agrupado===false){
                desagrupados[campo.endpoint]=[];
                desagrupados[campo.endpoint].push(campo);
            }else{
                if (agrupadoPorEndpoint[campo.endpoint]===agrupadoPorEndpoint[campo.servicio] ) {
                    agrupadoPorEndpoint[campo.endpoint] = {
                        endpoint: campo.endpoint,
                        servicio: campo.servicio,
                        items: []
                    };
                }
        
                const { endpoint, servicio, ...camposRestantes } = campo;
                agrupadoPorEndpoint[campo.endpoint].items.push({
                    ...camposRestantes,
                });
            }
        });
        return {
            agrupados: agrupadoPorEndpoint,
            desagrupados: desagrupados
        } ;
    }
}
