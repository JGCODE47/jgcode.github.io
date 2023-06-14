import styled from "@emotion/styled";
import { useState } from 'react';

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s;

  ${GalleryItem}:hover & {
    transform: scale(1.1);
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(-90deg);
  transition: transform 0.3s;
  opacity: 0;

  ${GalleryItem}.active & {
    transform: rotateY(0deg);
    opacity: 1;
  }
`;



const Galery = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActive = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const galleryItems = [
        { image: '../Assers/img/gm.jpg', info: 'Información adicional 1' },
        { image: 'imagen2.jpg', info: 'Información adicional 2' },
        // Agrega más elementos de la galería aquí
    ];
    return (
        <GalleryWrapper>
        {galleryItems.map((item, index) => (
          <GalleryItem
            key={index}
            className={activeIndex === index ? 'active' : ''}
            onClick={() => toggleActive(index)}
          >
            <GalleryImage src={item.image} alt={`Imagen ${index + 1}`} />
            <InfoContainer>{item.info}</InfoContainer>
          </GalleryItem>
        ))}
      </GalleryWrapper>
    )
}

export default Galery
