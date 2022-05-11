import React from 'react';
import './table.css';

const Line = () => {
  return (
    <table className='table'>
      <tr className='table-header'>
        <th>Título</th>
        <th>Preço</th>
        <th>Categoria</th>
        <th>Data</th>
      </tr>
      <tr className='table-line'>
        <td>Desenvolvimento de site</td>
        <td>R$170,00</td>
        <td>Venda</td>
        <td>12/05/2001</td>
      </tr>
    </table>
  );
};

export default Line;
