import React, { useContext } from 'react';
import './table.css';
import Context from '../../context';
import { formatNumber } from '../../utils';

const Line = () => {
  const widths = window.screen.width;
  const { dataArray } = useContext(Context);

  return (
    <div className='table-content'>
      <div className='table-header'>
        {widths <= 768 ? (
          <div className='table-title'>
            <h3>Listagem</h3>
            <span>
              {dataArray.length} {dataArray.length > 1 ? 'itens' : 'item'}
            </span>
          </div>
        ) : (
          <div className='table-header-row'>
            <span>Título</span>
            <span>Preço</span>
            <span>Categoria</span>
            <span>Data</span>
          </div>
        )}
      </div>
      <div className='table-rows'>
        {dataArray.map((obj) => {
          return (
            <div className='table-row'>
              <span>{obj.name.toUpperCase()}</span>
              <span
                style={
                  obj.outputSelected
                    ? { color: '#E62E4D' }
                    : { color: '#12A454' }
                }
              >
                {obj.outputSelected && '-'}
                {formatNumber(obj.price)}
              </span>
              <div className='separator'>
                <span>{obj.category}</span>
                <span>{obj.currentDate}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Line;
