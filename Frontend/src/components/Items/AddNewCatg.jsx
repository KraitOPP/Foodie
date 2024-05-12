import React, { useState } from 'react';
import './style.css';

const AddCategoryForm = ({ onAddCategory }) => {
  const [categoryTitle, setCategoryTitle] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [categoryIcon, setCategoryIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryTitle || !categoryDescription || !categoryIcon) {
      alert('Please fill in all fields');
      return;
    }
    onAddCategory({ category_title: categoryTitle, category_description: categoryDescription, category_icon: categoryIcon });
    setCategoryTitle('');
    setCategoryDescription('');
    setCategoryIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container"> 
      <div className="form-group">
        <label>Category Title:</label>
        <input type="text" value={categoryTitle} onChange={(e) => setCategoryTitle(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Category Description:</label>
        <input type="text" value={categoryDescription} onChange={(e) => setCategoryDescription(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Category Icon URL:</label>
        <input type="text" value={categoryIcon} onChange={(e) => setCategoryIcon(e.target.value)} />
      </div>
      <button type="submit" className="btn-submit">Add Category</button>
    </form>
  );
};

export default AddCategoryForm;
