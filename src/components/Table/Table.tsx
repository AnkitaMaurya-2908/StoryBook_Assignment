import React from 'react';
import styles from './Table.module.css';
import { TableProps } from './Table.types';
import '../../index.css'

const Table: React.FC<TableProps> = ({ data, headers, theme = 'default' }) => {
  const themeClass = styles[theme] || styles.default;

  return (
    <table className={`${styles.table} ${themeClass}`}>
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {headers.map((header, j) => (
              <td key={j}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;



