import React, { useState, useEffect } from 'react';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import categoriesRepository from '../../repositories/categories';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInitialData(categoriesWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      <>
        {initialData.length === 0 && (<div>Loading...</div>)}

        {initialData.map((category, index) => {
          if (index === 0) {
            return (
              <div key={category.id}>
                <BannerMain
                  videoTitle={initialData[0].videos[0].title}
                  url={initialData[0].videos[0].url}
                  videoDescription="Afinal, o que é React JS? Neste vídeo, Vanessa Tonini e Mario Souto explicam isto para você falando sobre como esta ferramenta surgiu, para que ela serve, quais são suas aplicações e relação com outras ferramentas e como começar a trabalhar com ele. "
                />
                <Carousel
                  ignoreFirstVideo
                  category={initialData[0]}
                />
              </div>
            );
          }

          return (
            <Carousel
              key={category.id}
              category={category}
            />
          );
        })}
      </>

    </PageDefault>
  );
}

export default Home;
