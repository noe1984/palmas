import React from 'react'
import { TramitesCard } from './TramitesCard'
import imss from '../images/imss.svg'

function Imss() {
    return (     
        <TramitesCard imgSource={imss}>
            <ul>
                <a target="_blank" rel="noreferrer" href="https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-externo/asignacionNSS">Num. Seguro</a><br />
                <a target="_blank" rel="noreferrer" href="https://serviciosdigitales.imss.gob.mx/semanascotizadas-web/usuarios/IngresoAsegurado">Semanas Cotizadas</a><br />
                <a target="_blank" rel="noreferrer" href="https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-externo/vigencia">Vigencia de derechos</a><br /> 
                <a target="_blank" rel="noreferrer" href="https://digital.imss.gob.mx/derechohabiencia/tramite/solicitudConstancia">No Derechohabiencia</a><br />
                <a target="_blank" rel="noreferrer" href="https://serviciosdigitales.imss.gob.mx/portal-ciudadano-web-externo/derechohabientes/tramite/registro">Alta en clínica</a><br />
                <a target="_blank" rel="noreferrer" href="https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-externo/cartilla">Reimpresión De Cartilla</a><br />
                <a target="_blank" rel="noreferrer" href="http://www.imss.gob.mx/imssdigital">Más Trámites...</a><br />
                
            </ul>
        </TramitesCard> 
    )
}

export default Imss 