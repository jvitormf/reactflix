import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';

import { Table, CategoryColor } from './styles';

function Category() {
  const initialValues = {
    title: '',
    color: '#000000',
    linkText: '',
    linkUrl: '',
  };

  const { handleChange, values } = useForm(initialValues);

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://ireactflix.herokuapp.com/categories';

    fetch(URL)
      .then(async (response) => {
        const data = await response.json();
        setCategories([...data]);
      });
  }, [category]);

  return (
    <PageDefault>
      <>
        <div style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        }}
        >
          <h1>Cadastro de Categoria!</h1>
          <Button>
            <Link to="/">Home</Link>
          </Button>
        </div>

        <form onSubmit={(event) => {
          event.preventDefault();

          const categoryCreated = {
            title: values.title,
            color: values.color,
            link_extra: {
              text: values.linkText,
              url: values.linkUrl,
            },
          };

          categoriesRepository.create(categoryCreated).then(() => {
            setCategory(categoryCreated);
            alert('Categoria cadastrada com sucesso!');
          });
        }}
        >

          <FormField
            type="text"
            name="title"
            label="Título da categoria:"
            value={values.title}
            onChange={handleChange}
          />

          <FormField
            type="color"
            name="color"
            label="Cor:"
            value={values.color}
            onChange={handleChange}
          />

          <FormField
            type="text"
            name="linkUrl"
            label="Link:"
            value={values.linkUrl}
            onChange={handleChange}
          />
          <FormField
            type="textarea"
            name="linkText"
            label="Descrição:"
            value={values.linkText}
            onChange={handleChange}
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        {categories.length === 0 && (
          <div>
            Loading...
          </div>
        )}

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
            {categories.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.link_extra.text}</td>
                <td><a href={item.link_extra.url} target="_blank" rel="noopener noreferrer">{item.link_extra.url}</a></td>
                <td>
                  <CategoryColor style={{ backgroundColor: item.color, borderRadius: '10px' }}>{item.color}</CategoryColor>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </PageDefault>
  );
}

export default Category;
