import React from 'react';

import { Table, CategoryColor } from './styles';

function CategoryTable({ categories }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Descrição</th>
          <th>Link</th>
          <th>Cor</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id}>
            <td>{category.id}</td>
            <td>{category.title}</td>
            <td>{category.link_extra.text}</td>
            <td><a href={category.link_extra.url} target="_blank" rel="noopener noreferrer">{category.link_extra.url}</a></td>
            <td>
              <CategoryColor style={{ backgroundColor: category.color, borderRadius: '10px' }}>{category.color}</CategoryColor>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CategoryTable;
