function calcularEdad(fecha) {
  let hoy = new Date();
  let fechaNacimiento = new Date(fecha);
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  let mes = hoy.getMonth() - fechaNacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
  }

  return edad;
  document.write(edad);
}