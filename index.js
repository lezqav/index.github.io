
 const datos = {nombre:"Allan Schmidt", edad:46, direccion:"5406 Walnut Hill Ln",email:"allan.schmidt@example.com",telefono:"(402) 490-9023",};
 const objetivos = "Ser un buen profesional en la especialidad de Tecnologia informatica y programacion de Front end.Poseo comprobada capacidad para el trabajo en equipo y tengo la serenidad necesaria para resolver situaciones bajo presion.Soy una persona proactiva, dinamica, con empatia y responsablidad.Con ganas de incorporarme a una institucion de primer nivel.";
 const antecedentes = "Antecedentes laborales: Empresa Coto cicsa año 2000 hasta 2005 (operador camaras de seguridad) , Empresa Clarin s.r.l 2005 hasta 2015 (Programador de portadas virtuales) , Empresa Solu.Dat 2015 hasta 2020 (Chequeos de seguridad interpresarial) , Empresa Salitre.S.A 2020 hasta 2022 (Analista de sistema en LAN).  ";
 
const estudios = "Secundario completo :   EEMNº129 Belgrano - universitario incompleto: 3er año Universidad de La Plata  - Adicionales: Programador senior IAC (Instituto Argentino de Computacion).";
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