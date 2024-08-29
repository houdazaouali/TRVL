import React, { useState } from 'react';
import { Button, Card, Label, TextInput } from 'flowbite-react';
import axios from 'axios';
import './AddAventure.css'

export default function AddAdventure() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adventureData = { title, description, image, price };

    try {
      const response = await axios.post('http://localhost:3001/api/adventures/new-adventure', adventureData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        // Reset the form fields
        setTitle('');
        setDescription('');
        setImage('');
        setPrice('');
        alert('Adventure added successfully!');
      } else {
        alert('Error: ' + response.data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred.');
    }
  };

  return (
    <Card className="adventure-content max-w-sm mx-auto my-4">
      <form onSubmit={handleSubmit} className="form-content">
        <div>
          <Label htmlFor="title" value="Adventure Title" />
          <TextInput
            id="title"
            type="text"
            placeholder="Enter adventure title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="description" value="Description" />
          <TextInput
            id="description"
            type="text"
            placeholder="Enter adventure description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="image" value="Image URL" />
          <TextInput
            id="image"
            type="text"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="price" value="Price" />
          <TextInput
            id="price"
            type="number"
            placeholder="Enter adventure price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className='button-content'>Add Adventure</Button>
      </form>
    </Card>
  );
}
