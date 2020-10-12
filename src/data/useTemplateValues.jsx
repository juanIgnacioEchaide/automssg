
import React, {useState} from 'react';

export default function useTemplateValues(){
    const m =<p>*Yveline Chen*<br></br>
                    Oficial de Negocios Exclusive<br></br>
                    *ICBC (Argentina) S.A.*<br></br>
                    yen.chen@icbc.com.ar<br></br>
                    Cel & Whatsapp: +54 11 6119-2762<br></br>   
                    Sucursal Flores - Avda Rivadavia 6312 (C1406GLT) CABA, Argentina<br></br>
                </p>
    const m01=<p>Mi nombre es Yveline Chen, oficial exclusive del ICBC, sucursal Flores.
                Tenes un turno para el día de hoy, ¿es correcto?<br></br>
                Le quería sacar unos minutos para comentarle que estamos facilitando los trámites presenciales en el banco durante la cuarentena, por los cuidados sanitarios necesarios y obligatorios.
                Por esta vía nunca vamos a pedirle datos personales ni de sus cuentas, y obviamente no todos los trámites se pueden realizar de manera no presencial, como ej. retiro de dólares, ingreso a caja de seguridad, etc. Quería confirmar si es alguno de estos el motivo de tu consulta.
                </p>
    const m02=<p>
                Buenas tardes, Mi nombre es Yveline Chen -yen.chen@icbc.com.ar-, Oficial Exclusive del ICBC, suc. Flores.
                Le quería sacar unos minutos porque estamos avisando a los clientes que sacaron prestamos hace dos años con tasas de más de 70%, para que se acerquen a firmar la nueva tasa, porque bajó casi un 10%, disminuyeron de esta manera el plazo de su préstamo, manteniendo una cuota similar.
                </p>
    const m03=<p>
                Buenos días, Mi nombre es Yveline Chen -yen.chen@icbc.com.ar-, Oficial Exclusive del ICBC, suc. Flores.
                Me comunico con Ud. porque tiene un turno asignado hoy. ¿Es correcto?
                </p>
    const m04=<p>Buenas tardes, Mi nombre es Yveline Chen -yen.chen@icbc.com.ar-, Oficial Exclusive del ICBC, suc. Flores.
                Me comunico con Ud. porque tiene un turno asignado mañana. ¿Es correcto?
                </p>
    const m05=<p>
                Quiero comentarle que:<br></br>
                1. Para facilitar a nuestros clientes sus trámites presenciales durante la cuarentena y seguir brindando nuestra mejor atención personalizada, con los cuidados sanitarios necesarios y obligatorios, *hemos simplificado muchos de nuestros tramites.* Me gustaría asesorarle al respecto.<br></br>
                2. Nunca vamos a pedirle datos personales ni de sus cuentas, y aunque no todos los trámites se pueden realizar de manera no presencial (ej.: ingresar a caja de seguridad u operar por ventanilla), muchos otros hoy se pueden realizar a distancia *con ayuda de un oficial, y con la misma seguridad*. NINGÚN TURNO SE CANCELARÁ sin el consentimiento expreso del cliente.<br></br>
                </p>
    const m06=<p>3. Tenga presente que un cajero automático de la suc. Flores fue renovado para poder extraer hasta 300 dólares por día. Es imprescindible para la extracción de la misma tener vinculada su cuenta en dólares a la Banelco, si necesita, puedo enviarle instrucciones. Por otro lado *no está permitido desde ventanilla* -por normativa vigente- operar en forma alguna en billetes montos menores a AR$150.000, y para montos mayores únicamente con autorización y reserva de fondos previa, así como operar por montos mayores a U$S2.000.
                *¿Le interesa ahorrarse la demora en sucursal?* Puedo asesorarlo ahora mismo. Gracias.
                </p>
    const m07=<p>Restricciones para compra de moneda extranjera para atesoramiento:<br></br>
                •Encontrarse en el listado de inhabilitados para operar en cambios por el BCRA.<br></br>
                •Ser beneficiario de préstamos tasa cero otorgados según Com A 6993 a autónomos y/o monotributistas, préstamos tasa subsidiada según Com A6937 (Fogar 24 u otros), préstamos Hipotecarios UVA (hasta la vigencia del artículo 2º del Decreto N° 319/20)  y/o que hayan ingresado a la refinanciación de sus tarjetas de créditos y/o préstamos (punto 4 de la Comunicación “A” 6949 y complementarias).<br></br>
                •Beneficiario de algún plan o programa caracterizado como de ayuda social.<br></br>
                •Su CUIL se encuentra dada de baja en AFIP para operar.<br></br>
                •El Limite máximo es de 200 USD o su equivalente en moneda extranjera, habilitados en el mes calendario vigente en cualquiera de las entidades habilitadas para operar en cambios.<br></br>
                •Si realizó pagos en pesos de consumos en moneda extranjera efectuados con su tarjeta de crédito o debito, puede comprar u$s por el monto restante; si superan los 200 u$s, contabilizará para descontar el cupo de los meses siguientes. Ej: Se realiza un consumo por 600 u$s con la tarjeta de crédito, ese cliente no podrá comprar dólar de atesoramiento por 3 meses.<br></br>
                •Queda inhabilitado si realizó venta de títulos valores contra dólares en los últimos 90 días
                </p>
    const m08=<p>Estamos atendiendo con demora de 1~2 horas de atención por las medidas sanitarias requeridas y obligatorias. Puedo asesorarlo y evitar esa demora o *¿su trámite es exclusivamente presencial, ej. por ventanilla?* De no ser exclusivamente presencial, soy *oficial de negocios Exclusive* y actualmente contamos con herramientas para atender el 90% de las consultas de los clientes de forma online o por teléfono para evitar que los clientes se expongan al riesgo de contagio.
                </p>
    const m09=<p>Soy *oficial de negocios Exclusive* y actualmente contamos con herramientas para atender el 90% de las consultas de los clientes de forma online o por teléfono para evitar que los clientes se expongan al riesgo de contagio. Ya que las demoras de atención rondan entre 1~2 horas en sucursal por las medidas sanitarias requeridas y obligatorias. ¿Puedo asesorarlo y evitar esa demora?
                </p>
    const m10=<p>En la sucursal operamos con las siguientes *restricciones obligatorias* establecidas por el Banco Central que ocasionan demoras en la atención: 1. Ingresan 2 clientes por vez a la sucursal; 2. Reducción de personal por ser personas de riesgo de contagio o con familiares a cargo; 3. Reducción de personal con rotación quincenal obligatoria. Por lo que *facilitamos y simplificamos* muchos de nuestros trámites para disminuir la cantidad de gente que se acerca al establecimiento.
                </p>
    const m11=<p>Perfecto. Recuerde las condiciones actuales de atención. Muchas gracias por responder. ¡Que tenga un lindo día!</p>
    const m12=<p>Perfecto, muchas gracias por responder. ¡Que tenga un lindo día y buen fin de semana!</p>
    const m13=<p>Acabo de enviarle la solicitud por mail, tiene que abrirlo desde su celular y seguir las instrucciones. Una vez que finalice y haya salido todo bien, me deja un aviso por acá. Recuerde tomar la foto en un lugar con mayor entrada de luz, por ej. un patio o una terraza, y debe tener buena conexión a internet. ¡Muchas gracias!</p>
    const m14=<p>Excelente/De nada, Espero le haya sido útil la información y pueda resolver su consulta a la brevedad/Me alegro haber podido ayudar por este medio, quedo a su disposición por cualquier consulta que le vuelva a surgir y requiera de mi asesoramiento. ¡Que tenga un lindo día!</p>
    const m15=<p>Le pedimos por favor, anule su turno desde el mail que le llegó por correo con el comprobante del turno, ya que de esa manera el vacante podrá ser habilitado para otros clientes. ¡Muchas gracias!</p>
    const m16=<p>El cajero que *entrega billetes en dólares* está ubicada cercana al vidrio de la mano derecha, ni bien ingresa a la sucursal. El lobby funciona los días hábiles de 8 a 17 hs, el horario con menor tráfico de uso es por la mañana de 8~10 am y tenga presente que de 15~16 hs hay balanceo de cajeros por lo que puede estar cerrado. Es importante que verifique antes desde Access banking si *tiene vinculada la cuenta dólares* a su tarjeta Banelco. 
                <br></br>Los pasos a seguir son: Tarjetas – Visa débito – vinculación de cuentas, si no la tiene vinculada, presione "Modificar". Además debe considerar que su *límite de extracción diario* en los cajeros automáticos incluye también las extracciones en dólares: disminuye su disponible de extracción según el tipo de cambio vigente, por ej. Si su límite diario de extracción es de AR$30.000 y ya retiró AR$15.000, entonces le queda disponible para retirar de AR$15.000 o U$S200 (en base a un tipo de cambio de $75 el dólar, no se consideran para el cálculo ningún tipo de impuesto). Para modificar su límite de extracción, puede hacerlo desde Access banking, siguiendo los siguientes pasos: Tarjetas – Visa débito – Cambio de límites.
                </p>
    const m17=<p>También disponemos de cajeros que entregan dólares las 24 hs en otras sucursales. Puede indicarme cuál es la localidad o el/los barrios que concurre más frecuentemente y puedo informarle las sucursales cercanas con Banelcos que operan la misma.</p>
    const m18=<p>Si desea retirar más de US$2000 el día de su turno, deberá enviarme a yen.chen@icbc.com.ar indicando en el asunto *Reserva de fondos* – su número de DNI – nombre y apellido, ya que supera el monto que no requiere autorización. En el cuerpo del mail debe informar Monto, fecha del turno y sucursal de extracción por ventanilla y aguardar mi confirmación de la reserva.
                </p>
    const m19=<p>Por el momento no contamos con disponibilidad de llaves para nuevas aperturas de cajas de seguridad.</p>
    const m20=<p>Debe presentarse por ventanilla en sucursal de origen con denuncia policial y DNI virtual o comprobante de trámite nuevo, y es imprescindible contar con firma digitalizada en nuestro sistema.
                Para gestionar el DNI le paso el siguiente link: http://turnos.mininterior.gov.ar/turnosWeb/
                </p>
    const m21=<p>*Si no tiene acceso a Access o Mobile banking*, desde el inicio de la cuarentena incluimos un *nuevo servicio por reconocimiento facial* para que pueda desbloquear a distancia, fácil y rápidamente. Para saber cómo, ingrese a https://www.accessbanking.com.ar/RetailHomeBankingWeb/init.do, presione “No puedo ingresar” y escanee el código QR con su celular. O si ya tiene descargada la app ICBC Mobile Banking, presione en "No puedo ingresar" y "Generación online".
                </p>
    const m22=<p>Este es un trámite exclusivamente NO PRESENCIAL que no se toma en sucursal. Puede pedirlo desde Access/Mobile banking o llamando a Centro Hola al 0810-444-4652 o 4820-2021, o bien desde su celular marcando *4652, atendemos los días hábiles de 8~20 hs. Para *baja de cuentas* desde Mobile banking, ni bien ingresa a la app sobre las tres líneas en la esquina superior izquierda, elija gestión de productos, dar de baja mis productos y seleccione la cuenta que desea cancelar; Y desde Access banking, puede solicitar *baja de tarjetas de crédito* en la sección pedidos y reclamos, eligiendo la tarjeta y el motivo “Baja tarjeta Titular”. También puede cancelar las tarjetas llamando sin clave al 0810-777-3632 de 10~16 hs, el horario con menor tráfico de atención telefónico siempre es a 1ra hora. Recuerde siempre conservar el número de reclamo para realizar seguimiento.
                </p>
    const m23=<p>Este es un trámite exclusivamente NO PRESENCIAL que no se toma en sucursal. Puede pedirlo desde Access banking o llamando a Centro hola al 0810-444-4652 o 4820-2021, o bien desde su celular marcando *4652, atendemos los días hábiles de 8~20 hs, el horario con menor tráfico de atención telefónico siempre es a 1ra hora. Si *elige realizarlo por Access banking*, vaya a sección “pedidos y reclamos”, elija el producto a reclamar y elija el motivo. Solo podrá completar los espacios en blanco. Recuerde siempre conservar el número de reclamo para realizar seguimiento.
                </p>
    const m24=<p>Puede *blanquear todas las claves sin necesidad de acudir a una sucursal* y de manera sencilla desde Access Banking, en página de inicio opción Gestión de claves. Para ello es necesario tener activo “ICBC token virtual”, si nunca lo generó: será necesario solicitarlo desde un cajero de la red banelco –exclusivamente– con su tarjeta de débito. Puede ver cómo hacerlo en el siguiente video: https://www.youtube.com/watch?v=V-Vr__4nzHU. En caso que *la clave débito está bloqueada y no tiene activa el Token Virtual*, acuda a la sucursal y pida blanqueo de pin débito. Se recomienda que solicite la clave Token virtual luego de blanquear la clave debito para futuros eventos.</p>
    const m25=<p>Si desea cancelar de forma anticipada un crédito prendario o hipotecario, desde Access banking, opción préstamos, seleccionando “detalle”, puede informarse sobre el monto para pre cancelar su crédito. Una vez acreditado la totalidad de dicho monto (mediante depósito o transferencia a la cuenta donde se debita el préstamo), deberá concurrir a la sucursal con turno a firmar una “carta de pre cancelación”. Al día siguiente, verificado el débito en su totalidad a través de Access o Mobile banking, deberá informar telefónicamente a Centro Hola o mandando un Whatsapp a ICBC Hola al +5491148205255 indicando la sucursal donde desea recibir la correspondiente documentación “cancelación de prenda o hipoteca”, según sea el caso. Y por último sacar un turno a 10 días en la sucursal indicada.</p>
    const m26=<p>Si desea cancelar total de forma anticipada un crédito personal, desde Access banking, opción préstamos, seleccionando “detalle”, puede informarse sobre el monto para pre cancelar su crédito. Una vez acreditado el monto que desea pre cancelar (mediante depósito o transferencia a la cuenta donde se debita el préstamo), podrá solicitar la cancelación anticipada por Centro hola –si es parcial o total– o desde Access banking –únicamente si es por el total–, opción “pedidos y reclamos”, eligiendo el préstamo a pre cancelar y seleccionando como Motivo “Préstamo – Cancelación Total”, luego debe completar únicamente los datos en blanco. Dentro de máximo 4 días se resolverá el pedido y le llegará la confirmación vía mail o carta –en caso que no tenga mail–.</p>
    const m27=<p>Para anular o pedir que le bonifiquen la renovación de la tarjeta de crédito, es un trámite exclusivamente NO PRESENCIAL, que debe hacerlo: 1. Llamando al 0810-777-3632 de 10-16 hs., esta línea atiende sin clave hola y sin demoras (el horario de menor tráfico de llamadas es a las 10am). Lo atiende un operador, le toma el trámite de anulación o bonificación, y solo si desea puede mantener la tarjeta o bien en el momento pide la baja. Como última instancia, si no logra resolverlo telefónicamente, puede canalizar su pedido a través de nuestras redes sociales de ICBC Argentina, sea Facebook, IG o Twiiter.</p>
    const m28=<p>Si *tiene dinero en cuenta*, puede abonar a través de Centro Hola o Access/Mobile Banking, y *si tiene efectivo* puede pagar desde un cajero automático Banelco de cualquier banco, ingresando número de cuenta o tarjeta Visa o Mastercard. También puede pagar sus tarjetas ICBC desde la opción pago servicios del *home banking de otro banco*, agregando servicio Visa o Mastercard, e ingresando los 16 números de su tarjeta ICBC.<br></br>
                Le dejo instructivo para pagar por cajero automático: https://www.youtube.com/watch?v=qONtNxnneVU<br></br>
                Le dejo instructivo para abonar a través de ICBC Mobile banking, opción “PAGAR” de cada tarjeta: https://www.youtube.com/watch?v=HqMBfB1Cghg<br></br>
                Le dejo instructivo para pagar a través de pago servicios: https://www.youtube.com/watch?v=_rO7fFJM1pM<br></br>
                </p>
    const m29=<p>Durante la cuarentena los pagos por ventanilla no están habilitados. En caso que tenga la tarjeta bloqueada o la cuenta embargada y no puede realizar los pagos desde un cajero automático, debe depositar o transferir a una cuenta de Cobranzas ICBC y enviarles el comprobante de pago y sus datos por mail para que computen el pago a su orden. Puede informarse sobre la cuenta y mail para recibir el comprobante llamando al 4820-5100.</p>
    const m30=<p>La nueva normativa del BCRA restringe aperturas de caja de ahorro en dólares a personas que *no puedan demostrar ingresos reales* por más de $40.000 o quienes *cobran subsidio del ANSES*. ¿Tiene algún recibo de sueldo o acumula ingresos en más de 2 trabajos y cumpla el primer requisito? En el caso que ya no cobra ningún subsidio del ANSES, y su sueldo alcance al mínimo ingreso requerido, vuelva a consultarlo dentro de 30 días o acuda al ANSES para verificar el estado.</p>
    const m31=<p>La caja de ahorro en dólares tiene un costo mensual de US$11. Clientes que acreditan el sueldo únicamente acceden a la caja de ahorro en dólares sin costo cuando está la cuenta dentro de un paquete.<br></br>
                Si necesita caja de ahorro en dólares sin costo, puedo abrirle el paquete de productos ahorro sueldo.<br></br>
                Este trámite lo hacemos de manera no presencial, solo debe enviarme a yen.chen@icbc.com.ar su dni frente y dorso escaneado -en formato PDF- con un escáner o app de escáner descargada desde su celular, luego cargaré el trámite junto al dni y le enviaré por mail un link para aceptar la alta del producto, el cual debe ser abierto desde un celular o pc con cámara. Una vez finalizado, le llegará el contrato a su correo.
                </p>
    const m32=<p>La caja de ahorro en dólares tiene un costo mensual de US$11. Clientes que acreditan el sueldo únicamente acceden a la caja de ahorro en dólares sin costo cuando está la cuenta dentro de un paquete con tarjeta de crédito. ¿Le gustaría que comencemos este trámite de forma online? Solo debe enviarme a yen.chen@icbc.com.ar su dni frente y dorso escaneado -en formato PDF- con un escáner o app de escáner descargada desde su celular.<br></br>
                Luego cargaré el trámite junto al dni y le enviaré por mail un link para aceptar la alta del producto, el cual debe ser abierto desde un celular o pc con cámara. El trámite es muy sencillo y cuenta con la ayuda de un oficial, y la misma seguridad que desde sucursal.
                </p>
    const m33=<p>La caja de ahorro en dólares tiene un costo mensual de US$11. *Le ofrezco un paquete de productos* que solo tiene caja de ahorro en pesos y dólares, cuya comisión será bonificada por 3 meses. Luego la misma pasa a valer $620.- mensual y solo *podrá ser bonificado* según:<br></br>
                - *Consumo mensual entre tarjetas de débito y/o crédito*: 50% de bonificación sobre el mantenimiento mensual si alcanza a un consumo mensual de $30.000; y 100% de bonificación si alcanza a un consumo mensual de $50.000.<br></br>
                - *Dinero en caja de ahorro o cuenta corriente*: 50% de bonificación sobre su mantenimiento mensual si alcanza mensualmente a AR$30.000; y 100% de bonificación si alcanza a AR$50.000 en cuenta.<br></br>
                - *Ahorro en fondos comunes de inversión*: 50% de bonificación sobre su mantenimiento mensual si acumula AR$150.000; y 100% de bonificación si acumula más de AR$250.000.<br></br>
                ¿Le gustaría que comencemos este trámite de forma online? Solo debe enviarme a yen.chen@icbc.com.ar su dni frente y dorso escaneado -en formato PDF- con un escáner o app de escáner descargada desde su celular.<br></br>
                Luego cargaré el trámite junto al dni y le enviaré por mail un link para aceptar la alta del producto, el cual debe ser abierto desde un celular o pc con cámara.<br></br>
                </p>
    const m34=<p>La caja de ahorro en dólares tiene un costo mensual de US$11. *Le ofrezco un paquete de productos Clásico* que tiene caja de ahorro en pesos y dólares y tarjeta de crédito, cuya comisión y renovación anual de la tarjeta será bonificada por 6 meses. Luego la misma pasa a valer $1011.- mensual que *podrá ser bonificado* según:<br></br>
                - *Consumo mensual entre tarjetas de débito y/o crédito*: 50% de bonificación sobre el mantenimiento mensual si alcanza a un consumo mensual de $30.000; y 100% de bonificación si alcanza a un consumo mensual de $50.000.<br></br>
                - *Dinero en caja de ahorro o cuenta corriente*: 50% de bonificación sobre su mantenimiento mensual si alcanza mensualmente a AR$30.000; y 100% de bonificación si alcanza a AR$50.000 en cuenta.<br></br>
                - *Ahorro en fondos comunes de inversión*: 50% de bonificación sobre su mantenimiento mensual si acumula AR$150.000; y 100% de bonificación si acumula más de AR$250.000.<br></br>
                ¿Le gustaría que comencemos este trámite de forma online? Solo debe enviarme a yen.chen@icbc.com.ar su dni frente y dorso escaneado -en formato PDF- con un escáner o app de escáner descargada desde su celular.<br></br>
                Luego cargaré el trámite junto al dni y le enviaré por mail un link para aceptar la alta del producto, el cual debe ser abierto desde un celular o pc con cámara.
                </p>
    const m35=<p>Le comento que el banco implementó desde septiembre el servicio *Smart benefit* que premia de forma automática a los clientes que cumplen los requisitos de bonificación según tipo de paquete.
                En su caso, al ser un paquete Exclusive banking, los requisitos son los siguientes:<br></br>
                - *Consumo mensual entre tarjetas de crédito y débito*: 50% de bonificación sobre el mantenimiento mensual si alcanza a un consumo mensual de $60.000; y 100% de bonificación si alcanza a un consumo mensual de $80.000.<br></br>
                - *Dinero en caja de ahorro o cuenta corriente*: 50% de bonificación sobre su mantenimiento mensual si alcanza mensualmente a AR$60.000; y 100% de bonificación si alcanza a AR$80.000 en cuenta.<br></br>
                - *Ahorro en fondos comunes de inversión*: 50% de bonificación sobre su mantenimiento mensual si acumula AR$500.000; y 100% de bonificación si acumula más de AR$700.000.<br></br>
                ¿Le interesa acceder a la propuesta?
                </p>
    const m36=<p>Excelente, lo agrego dentro del programa y luego del vencimiento de la bonificación, ya no requiere que pida renovaciones de la bonificación del paquete, ya que se realizarán de forma automática según consumos/dinero en cuenta o inversiones.</p>
    const m37=<p>Si no le interesa acceder a la propuesta de Smart benefit y considera que sus consumos deberían justificarse para una bonificación, deberá comunicarse telefónicamente al 0810-777-3632 de 10-16 hs., un operador lo atenderá e intentará bonificar sus productos según los criterios de retención de clientes.</p>
    const m38=<p>Procedemos entonces con la baja del paquete y sus cuentas. Por favor en caso que no haya solicitado aun la baja de sus tarjetas de crédito, deberá realizarlos a través de Centro hola o Access banking.</p>
    const m39=<p>ICBC Mall tuvo un *aumento significativo de ventas* mensuales, generando así una demora en la entrega de algunos productos, debido a que tanto los proveedores como los correos, no están trabajando al 100% de su capacidad debido a la cuarentena obligatoria. Sumado al hecho de que el 60% de los clientes optaban por retirar su producto por tienda -opción que ahora no está habilitada-, ocasionando un aumento en la cantidad de envíos que deben realizar los proveedores. Por esta razón:<br></br>
                - Debe considerar en primer lugar que el *plazo de entrega* que figura en la página es de 10-15 días hábiles y debido a la gran demanda y demora hay proveedores que pueden demorar hasta 20-25 días hábiles en entregar.<br></br>
                - Si considera *excedido el plazo* puede realizar un reclamo por Centro Hola para que realicen la revisión del caso.<br></br>
                - Si *ya realizó el reclamo*, indíqueme el número de seguimiento de reclamo y los datos del producto adquirido para ver si podemos derivar el reclamo al área correspondiente y obtener una respuesta pronta.<br></br>
                </p>
    const m40=<p>Durante la cuarentena, la documentación solicitada por nuestro departamento del SIT para justificar origen de fondos o actualizar ingresos por movimientos inusuales en su cuenta, pueden ser enviados escaneados en formato pdf por mail a su oficial de cuentas. Si no tiene su mail, puedo informárselo y evitar que tenga que acudir a la sucursal.</p>
    const m41=<p>Si la documentación para recibir la transferencia se presenta en tiempo y forma, la *acreditación* se realiza dentro de las 48hs hábiles de haber presentado el formulario de Orden de pago. Por lo que si luego desea realizar una *extracción*, deberá solicitar reserva de fondos con una mínima anticipación de 72hs hábiles. Debe tener presente además, que si el monto supera sus transacciones habituales, debe presentar en la sucursal o mediante su oficial *documentación* que respalde los fondos.<br></br>
                Información detallada y formulario para recibir fondos del exterior: https://www.icbc.com.ar/institucional/girosytrans.do?codTmst=1<br></br>
                Si tiene dudas sobre comisiones –ya sean por transferencias o recepciones-, puede informarme monto y tipo de operación, es imprescindible ambos datos para realizar el cálculo.
                </p>
    const m42=<p>Toda información y procedimiento para realizar transferencias al exterior: https://www.icbc.com.ar/wcm/connect/a7e48042-2551-4e23-9cfa-042f5e06093a/ICBC_Access_Banking-Transferencias_internacionales-Tutorial-201909.pdf?MOD=AJPERES&CVID=mRFB25C&CVID=mDZFoPS
                Si tiene dudas sobre comisiones –ya sean por transferencias o recepciones-, puede informarme monto y tipo de operación, es imprescindible ambos datos para realizar el cálculo.
                </p>
    const m43=<p>La comisión debitada corresponde a la cuenta títulos donde opera los títulos, bonos o acciones. Los cobros de los mismos son trimestrales, y se promediando el periodo de uso que le dé. En caso que no haya uso, no tiene costo de mantenimiento.</p>
    const m44=<p>En el mes de septiembre le quedó un saldo a pagar en la tarjeta que se financió de forma automáticamente mediante comunicado del BCRA A7095 en 9 cuotas consecutivas con una tasa de interés del 40%, con 3 meses de gracia (octubre, noviembre y diciembre), por lo que recién se le cobró la primera cuota este mes. Si desea, puede pedir la cancelación anticipada desde:<br></br>
                - Access banking, sección pedidos y reclamos, seleccionando Visa o Mastercard, motivo “BAJA PLAN FINANCIACIÓN”.<br></br>
                - Pagina de Visa home socios o Masterconsultas o llamando a los teléfonos de Visa y Mastercard.<br></br>
                - Centro Hola al 0810-444-4652 o al 4820-2021 de 8-20 hs, el mejor horario para comunicarse es a 1ra hora.<br></br>
                </p>
    const m45=<p>Si desea puedo solicitar la refinanciación de sus productos con cobranzas y para que le diseñen un plan de pago acorde a su economía. Ellos se contactarán con Ud. y una vez que se defina la misma, le indicarán que debe solicitar un turno en la sucursal que desee para firmar el plan de pago.</p>
    const m46=<p>Le pido por favor no acuda a la sucursal ya que me haré cargo del seguimiento de su consulta. Porque desde sucursal solo le brindarán un número de teléfono a donde llamar, y para facilitar su trámite yo lo analizaré con el personal del área correspondiente para brindarle mayor información.
                </p>
    const m47=<p>Quería aprovechar la oportunidad de hacerle una pregunta:<br></br>
                ¿Qué le pareció este nuevo servicio de atención a distancia mediante un oficial de cuentas Exclusive? ¿Le resultó útil?<br></br>
                ¿Sabía que además de simplificar muchos trámites presenciales para realizarlos de forma online: abrir cuentas con reconocimiento facial, invertir con asesoramiento, aumentar el límite de su tarjeta de crédito y muchos otros más, también *estamos premiando* a los clientes que nos recomiendan?<br></br>
                Estamos otorgando hasta el equivalente a AR$300.000 en puntos ICBC Club para quienes quieran invitar a un amigo/compañero a acreditar su sueldo en el ICBC y acceder a todos nuestros servicios Exclusive Banking.<br></br>
                </p>
    const m48=<p>Quería aprovechar la oportunidad de comentarle que estamos premiando a los clientes que nos recomiendan. Se otorga hasta el equivalente a AR$300.000 en puntos ICBC Club para quienes quieran invitar a un amigo/compañero a acreditar su sueldo en el ICBC y acceder a todos nuestros servicios Exclusive Banking.<br></br>
            ¿Le puede interesar?
            </p>
    const m49=<p>Perfecto. No dude en consultarme por cualquier asesoramiento que requieras de mi parte.
                ¡Que tenga un hermoso día!
                </p>
    const m50=<p>Si le interesa, le propongo hacer lo siguiente, *para recomendar:* copie y pegue el siguiente mensaje en su grupo de chat de oficina o envíelo a un amigo de confianza, junto con mi contacto de Whatsapp. El referido solo debe contactarme e indicar que es recomendado por Ud. Luego yo evaluaré si califica como Exclusive y me encargaré de completar el formulario por Ud. para que accede al beneficio.<br></br>
                Hola! Sabías que si cambiás tu sueldo a ICBC ¡vos accedés a un 100% de ahorro en ICBC Mall, préstamo a tasa 0% y muchos beneficios todo el año, y yo sumo puntos por cada persona que recomiendo! Es fácil, rápido y sin costo. Mirá la propuesta http://bit.ly/icbc-recomendados
                Para hacerlo simplemente contáctate con mi oficial Exclusive vía mail yen.chen@icbc.com.ar o al WhatsApp 1161192762 mencionando que le escribís recomendado de mi parte.
                </p>
    const m51=<p>Ojala se lleve su premio, ¡quedamos en contacto por cualquier inquietud!
    Saludos atte. ¡Que Tenga un lindo día!
    </p>
    const m52=<p>Frente el aumento en cantidades de clientes Exclusive en la sucursal, el banco ha decidido incorporar un oficial Exclusive a la sucursal, por lo que comparto la cartera de clientes junto a Marcela Fortuna. Cualquier inquietud puede derivar sus consultas a las 2. </p>
    const m53=<p>Aprovecho la oportunidad para comentarle que como cada vez está más restringido la compra de dólares, es un buen momento para considerar los *trabajos de refacciones de su casa o bien renovar su auto*, ya que, de alguna manera *generan una inversión en dólares* incrementando sus valores.<br></br>
    Si necesita algún asesoramiento financiero que pueda ayudar a concretarlo, no dude en consultarme.</p>
    const m54=<p>Aprovecho la oportunidad para comentarle que estamos actualizando los paquetes de productos de los clientes Exclusive para que sean renovados con tarjetas Platinum/Black manteniendo la misma promoción actual con mejores beneficios de asistencia. Este trámite *fue facilitado durante la cuarentena y se realiza de manera no presencial*, solo debe confirmar la solicitud por mail. Es muy sencillo, práctico y cuenta con la misma seguridad y ayuda de su oficial de cuenta. Como acredita el sueldo con nosotros, *no se le generará ningún tipo de cargo adicional*. Aguardo su aceptación para enviarle el mail.</p>
    const m55=<p>Para asistir a la charla debe registrarse en el siguiente link: , en el cual podrá conectarse a la charla el mismo día. Quedo a su disposición para cualquier consulta. Atentamente, Yveline.</p>
    const m56=<p>No hay ningún problema, esperamos que pueda participar en la próxima edición. Le recuerdo que siempre puede acceder a la información sobre las inversiones disponibles en Fondos Alpha, actualizada de manera mensual a través de https://www.fondosalpha.icbc.com.ar/ y, actualizada cada 24hrs. hábiles en la sección inversiones de Mobile banking. Además, también podemos brindarle un *asesoramiento personalizado* y ayudar a Ud. a *encontrar inversiones ajustadas a su perfil*, evacuando cualquier consulta al respecto por este medio. Atentamente, Yveline.</p>
    const m57=<p>Buenas tardes, espero haya podido conectarse a la charla, me gustaría enviarle la presentación. Ante cualquier asesoramiento que requiera sobre el manejo del FCI por Mobile banking o bien profundizar el conocimiento de nuestro portfolio, con gusto estoy para ayudar. Atentamente, Yveline.</p>
   
    const templateValues= [
        {label:'ejemplo',value:<p>Buenas tardes, espero haya podido conectarse a la charla, me gustaría enviarle la presentación. Ante cualquier asesoramiento que requiera sobre el manejo del FCI por Mobile banking o bien profundizar el conocimiento de nuestro portfolio, con gusto estoy para ayudar. Atentamente, Yveline.</p>}
    ];
  
    return{templateValues}
}