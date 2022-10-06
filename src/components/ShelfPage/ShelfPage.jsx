import React from 'react';
import ItemForm from './ItemForm';
import ShelfList from './ShelfList';

function ShelfPage() {
  return (
    <div className="container">
      <h2>Shelf</h2>
      <ItemForm />
      <p>All of the available items can be seen here.</p>
      <ShelfList />
    </div>
  );
}

export default ShelfPage;
