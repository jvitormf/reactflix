import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function Category() {
  const initialValues = {
    title: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(initialValues);

  function setValue(key, value) {
    setCategory({
      ...category,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categories';
    fetch(URL)
      .then(async (response) => {
        const data = await response.json();
        setCategories([...data]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria!
        {' '}
        {category.title}
      </h1>

      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();

          setCategories([...categories, category]);

          setCategory(initialValues);
        }}
      >

        <FormField
          type="text"
          name="title"
          label="Nome da categoria:"
          value={category.title}
          onChange={handleChange}
        />

        <FormField
          type="textarea"
          name="description"
          label="Descrição:"
          value={category.description}
          onChange={handleChange}
        />

        <FormField
          type="color"
          name="color"
          label="Cor:"
          value={category.color}
          onChange={handleChange}
        />

        <button type="button">Cadastrar</button>
      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category, index) => <li key={`${category}${index}`}>{category.title}</li>)}
      </ul>

      <Link to="/">Voltar para Home!</Link>
    </PageDefault>
  );
}

export default Category;
