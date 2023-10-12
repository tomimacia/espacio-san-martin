const dateTexto = (seconds: number) => {
  const date = new Date(seconds * 1000);
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const settedDate = `${dias[date.getDay()]}, ${date.getDate()} de ${
    meses[date.getMonth()]
  }, ${date.getFullYear()}`;
  return settedDate;
};

export default dateTexto;
