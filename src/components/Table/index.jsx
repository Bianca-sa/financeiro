import React, { useContext, useEffect } from 'react';
import './table.css';
import Context from '../../context';

const Line = () => {
  const { dataArray } = useContext(Context);
  const widths = window.screen.width;

  return (
    <table className='table'>
      <tr className='table-header'>
        {widths <= 768 ? (
          <div className='table-title'>
            <h3>Listagem</h3>
            <span>4 itens</span>
          </div>
        ) : (
          <>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </>
        )}
      </tr>
      {dataArray.map((obj) => {
        return (
          <tr className='table-line'>
            <td>{obj.name}</td>
            <td>R${obj.price}</td>
            <div className='separator'>
              <td>{obj.category}</td>
              <td>Hoje</td>
            </div>
          </tr>
        );
      })}
    </table>
  );
};

export default Line;
