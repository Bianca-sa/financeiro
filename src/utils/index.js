export const sumArrayValues = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += Number(array[i]);
  }
  return sum;
};

export const filterArray = (array, filterCond, mapCond) => {
  return array.filter((obj) => obj[filterCond]).map((obj) => obj[mapCond]);
};

export const getCurrentDate = () => {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = String(data.getFullYear());
  const dataAtual = `${dia}/${mes}/${ano}`;
  return { dataAtual, dia, mes };
};

export const getDate = (currentDay, currentMonth) => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ][currentMonth - 1];
  const dateNow = `${currentDay} de ${month}`;

  if (!currentDay || !currentMonth) {
    return '';
  }

  return dateNow;
};

export const formatNumber = (number) => {
  const newValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return newValue.format(number);
};
