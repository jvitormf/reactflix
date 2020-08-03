import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

import { Table, CategoryColor } from '../Category/styles';

function Video() {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState({});
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);

  const { handleChange, values } = useForm({
    title: '',
    url: '',
    category: '',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoryFetched) => {
        setCategories(categoryFetched);
      });

    videosRepository.getAllWithCategory()
      .then((videosFetched) => {
        setVideos(videosFetched);
      });
  }, [video]);

  return (
    <PageDefault>
      <>
        <div style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        }}
        >

          <h1>Cadastro de vídeo!</h1>
          <Button type="button">
            <Link to="/new/category">
              Cadastrar categoria
            </Link>
          </Button>
        </div>

        <form onSubmit={(event) => {
          event.preventDefault();

          const selectedCategory = categories.find((category) => category.title === values.category);

          const videoCreated = {
            title: values.title,
            url: values.url,
            categoryId: selectedCategory.id,
          };

          videosRepository.create(videoCreated).then(() => {
            setVideo(videoCreated);
            alert('Vídeo adicionado com sucesso!');
          });
        }}
        >

          <FormField
            type="text"
            name="title"
            label="Title do vídeo:"
            value={values.title}
            onChange={handleChange}
          />

          <FormField
            type="text"
            name="url"
            label="Url do vídeo:"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            type="text"
            name="category"
            label="Categoria do vídeo:"
            value={values.category}
            onChange={handleChange}
            suggestions={categoryTitles}
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Link</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td><a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a></td>
                <td>
                  <CategoryColor style={{ backgroundColor: item.category.color, borderRadius: '10px' }}>{item.category.title}</CategoryColor>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </PageDefault>
  );
}

export default Video;
