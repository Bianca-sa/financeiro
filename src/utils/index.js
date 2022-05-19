export const sumArrayValues = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

export const filterArray = (array, condition) => {
  return array.filter((obj) => obj[condition]).map((obj) => Number(obj.price));
};

export const getCurrentDate = () => {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = String(data.getFullYear());
  const dataAtual = `${dia}/${mes}/${ano}`;
  return dataAtual;
};

export const formatNumber = (number) => {
  const newValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return newValue.format(number);
};
