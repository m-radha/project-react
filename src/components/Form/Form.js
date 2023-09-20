// src/FormPopup.js
import React, { useState } from 'react';
import '../Form/Form.css';

const Form = ({ onClose }) => {

  const formattedDateTime = new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    weekday: 'long'
  });

  const [formData, setFormData] = useState(
    {
      id: '',
      title: '',
      url: '',
      description: '',
      date: formattedDateTime
    });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formdata... ');
    console.log(formData);
    const existingData = JSON.parse(localStorage.getItem('articles')) || [];
    existingData.push(formData);
    localStorage.setItem('articles', JSON.stringify(existingData));

    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <h2>Post new article</h2>

          <input type='number' name='id' value={formData.id} placeholder="id" onChange={handleInputChange} />
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder='title' required />
          <input type="url" name="url" value={formData.imgUrl} onChange={handleInputChange} placeholder='Image url' required />
          <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder='content' style={{ height: 200 }}></textarea>
          <button type="submit" className='nav-button'>post</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
