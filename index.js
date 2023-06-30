
 const datos = {nombre:"Darío Fabián Vega", edad:53, direccion:"Ferrari 1160 Colon Entre Rios.",email:"lezqav@gmail.com",telefono:"3447526600",};
 const objetivos = "Ser un buen profesional en la especialidad de la informática. Poseo comprobada capacidad para el trabajo en equipo y tengo la serenidad necesaria para resolver situaciones bajo presión.";
 const antecedentes = "Antecedentes laborales: 1992 a 2007 Técnico PC (Instalación de sistemas operativos / arreglos software -Hardware) San Miguel Buenos Aires.2008 a 2020 Administración de Negocio de tecnología (Arreglos – Ventas artículos tecnológicos – Instalación de software y Hardware)";
 
const estudios = "Secundario completo E.E.M N.º 3  San Miguel Buenos aires/ Título secundario: Bachiller contable administrativo./ Terciario incompleto U.N.L.U Licenciatura administración de empresas.San Miguel Buenos aires/ 1989 - Curso completo aprobado BASIC SR IAC (Instituto argentino de computación) 2021 - Curso aprobado: Se programar (CESSI Argentina).2023 - Curso aprobado Primeros pasos desarrollo Frontend ( Ticmas Academy ) Argentina programa 4.0";
const Datos_Completos = "Nombre : " + datos.nombre + "--  Estudios :" + estudios + "--------------------------------------------------------"+ "--  Edad :" + datos.edad  + "  años. -- Direccion :" + datos.direccion + " --  Email : " + datos.email + " --  Telefono: " + datos.telefono + " --------------------------------------------------------  " + antecedentes + "-------------------------------------------------------- Objetivos laborales: " + objetivos;
 
document.getElementById("nombre").innerHTML = "Nombre: " + datos.nombre;
 document.getElementById("edad").innerHTML = "Edad: " + datos.edad + " años.";
 document.getElementById("direccion").innerHTML = "Direccion: " + datos.direccion;
 document.getElementById("email").innerHTML = "Email: " + datos.email;
 document.getElementById("telefono").innerHTML = "Telefono: " + datos.telefono;
 
 
 document.getElementById("objetivos").innerHTML =  "Objetivos: " + objetivos;
 document.getElementById("antecedentes").innerHTML = "Antecedentes: " + antecedentes;
 document.getElementById("Datos_Completos").innerHTML = "Datos_Completos: " + Datos_Completos;
 document.getElementById("estudios").innerHTML =  "Estudios: " + estudios;