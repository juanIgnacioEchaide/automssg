
import React, {useState} from 'react';
export default function useCustomizedValues(datosCliente){

    const early_today =<p className={"text-justify p-2"}> {datosCliente.nombre} espero te encuentres bien. Mi nombre es Yveline Chen, 
    oficial exclusive del ICBC, sucursal Flores.
    Me han informado que tenes un turno para hoy {datosCliente.dia} a las {datosCliente.hora} en nuestra sucursal. ¿Es correcto?
    Le quería sacar unos minutos para comentarle que estamos facilitando los trámites presenciales en el banco durante la cuarentena, por los cuidados sanitarios necesarios y obligatorios.
    Por esta vía nunca vamos a pedirle datos personales ni de sus cuentas, y obviamente no todos los trámites se pueden realizar de manera no presencial, como ej. retiro de dólares, ingreso a caja de seguridad, etc. <br></br>Quería confirmar si es alguno de estos el motivo de tu consulta.
    </p>
    const today_afternoon =<p className={"text-justify p-2"}>{datosCliente.nombre} espero te encuentres bien. Mi nombre es Yveline Chen, 
    oficial exclusive del ICBC, sucursal Flores.
    Me han informado que tenes un turno para hoy {datosCliente.dia} a las {datosCliente.hora} en nuestra sucursal. ¿Es correcto?
    Quiero comentarle que:
    <br></br>1. Para facilitar a nuestros clientes sus trámites presenciales durante la cuarentena y seguir brindando nuestra mejor atención personalizada, con los cuidados sanitarios necesarios y obligatorios, *hemos simplificado muchos de nuestros tramites.* Me gustaría asesorarle al respecto.
    <br></br>2. Nunca vamos a pedirle datos personales ni de sus cuentas, y aunque no todos los trámites se pueden realizar de manera no presencial (ej.: ingresar a caja de seguridad u operar por ventanilla), muchos otros hoy se pueden realizar a distancia *con ayuda de un oficial, y con la misma seguridad*. NINGÚN TURNO SE CANCELARÁ sin el consentimiento expreso del cliente.
    <br></br>3. Tenga presente que un cajero automático de la suc. Flores fue renovado para poder extraer hasta 300 dólares por día. Es imprescindible para la extracción de la misma tener vinculada su cuenta en dólares a la Banelco, si necesita, puedo enviarle instrucciones. Por otro lado *no está permitido desde ventanilla* -por normativa vigente- operar en forma alguna en billetes montos menores a AR$150.000, y para montos mayores únicamente con autorización y reserva de fondos previa, así como operar por montos mayores a U$S2.000.
    *¿Le interesa ahorrarse la demora en sucursal?* Puedo asesorarlo ahora mismo. Gracias.
    </p>
    const pp_preacordado=<p className={"text-justify p-2"}>Buenas tardes {datosCliente.nombre} , Mi nombre es Yveline Chen -yen.chen@icbc.com.ar-, Oficial Exclusive del ICBC, suc. Flores, estoy a cargo de sus cuentas. Me presento para que le quede agendado mi contacto por cualquier asesoramiento que requiera sobre sus productos.
    Le quiero comentar además una nueva propuesta que el banco habilitó para clientes Exclusive, se trata de una tasa especial para acceder un préstamo personal, que lo tiene preaprobado por AR${datosCliente.monto}. Por esta vía nunca le pediré datos personales ni de sus cuentas. Si le interesa la propuesta, le puedo pasar un simulador de cuotas.
    <br></br>¡Espero su consulta! Quedo a su disposición.
    </p>
    const tommorrow_morning=<p className={"text-justify p-2"}>
    Buenas tardes {datosCliente.nombre}, Mi nombre es Yveline Chen -yen.chen@icbc.com.ar-, Oficial Exclusive del ICBC, suc. Flores.
    Me comunico con Ud. porque tiene un turno asignado mañana {datosCliente.dia} a las {datosCliente.hora}. ¿Es correcto?
    Quiero comentarle que: 
    <br></br>1. Para facilitar a nuestros clientes sus trámites presenciales durante la cuarentena y seguir brindando nuestra mejor atención personalizada, con los cuidados sanitarios necesarios y obligatorios, *hemos simplificado muchos de nuestros tramites.* Me gustaría asesorarle al respecto.
    <br></br>2. Nunca vamos a pedirle datos personales ni de sus cuentas, y aunque no todos los trámites se pueden realizar de manera no presencial (ej.: ingresar a caja de seguridad u operar por ventanilla), muchos otros hoy se pueden realizar a distancia *con ayuda de un oficial, y con la misma seguridad*. NINGÚN TURNO SE CANCELARÁ sin el consentimiento expreso del cliente.
    <br></br>3. Tenga presente que un cajero automático de la suc. Flores fue renovado para poder extraer hasta 300 dólares por día. Es imprescindible para la extracción de la misma tener vinculada su cuenta en dólares a la Banelco, si necesita, puedo enviarle instrucciones. Por otro lado *no está permitido desde ventanilla* -por normativa vigente- operar en forma alguna en billetes montos menores a AR$150.000, y para montos mayores únicamente con autorización y reserva de fondos previa, así como operar por montos mayores a U$S2.000.
    *¿Le interesa ahorrarse la demora en sucursal?* Puedo asesorarlo ahora mismo. Gracias.
    </p>

  const customizedValues=[
      {id:1,label:'turno esta mañana',value:early_today},
      {id:2,label:'turno esta tarde',value:today_afternoon},
      {id:3,label:'pp preacordado',value:pp_preacordado},
      {id:4,label:'turno mañana',value:tommorrow_morning}]

    const customOptions=[
        {id:1,label:'turno esta mañana'},
        {id:2,label:'turno esta tarde'},
        {id:3,label:'pp preacordado'}, 
        {id:4,label:'turno mañana'},
        ];

return {customizedValues,customOptions};
  }