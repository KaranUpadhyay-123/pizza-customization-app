import React from 'react';

const InventoryTable = ({ inventory }) => (
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Stock</th>
      </tr>
    </thead>
    <tbody>
      {inventory.map((item) => (
        <tr key={item.type}>
          <td>{item.type}</td>
          <td>{item.stock}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default InventoryTable;
