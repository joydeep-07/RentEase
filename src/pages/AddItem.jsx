import React from 'react'
import AdminNav from '../components/AdminNav';

const AddItem = () => {
  return (
    <div>
      <AdminNav />
      <h1 className="py-15 uppercase text-center text-[var(--text-muted)] text-2xl">
        Add New Item from here
      </h1>
    </div>
  );
}

export default AddItem