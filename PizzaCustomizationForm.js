import React, { useState } from 'react';

const PizzaCustomizationForm = ({ onSubmit }) => {
  const [base, setBase] = useState('');
  const [sauce, setSauce] = useState('');
  const [cheese, setCheese] = useState('');
  const [veggies, setVeggies] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ base, sauce, cheese, veggies });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Base:
        <select value={base} onChange={(e) => setBase(e.target.value)}>
          <option value="Thin">Thin</option>
          <option value="Thick">Thick</option>
        </select>
      </label>
      <label>
        Sauce:
        <select value={sauce} onChange={(e) => setSauce(e.target.value)}>
          <option value="Tomato">Tomato</option>
          <option value="Barbecue">Barbecue</option>
        </select>
      </label>
      <label>
        Cheese:
        <input type="checkbox" onChange={(e) => setCheese(e.target.checked ? "Mozzarella" : "")} />
        Mozzarella
      </label>
      <label>
        Veggies:
        <input type="checkbox" onChange={(e) => setVeggies(e.target.checked ? [...veggies, "Olives"] : veggies.filter(v => v !== "Olives"))} />
        Olives
      </label>
      <button type="submit">Create Pizza</button>
    </form>
  );
};

export default PizzaCustomizationForm;
