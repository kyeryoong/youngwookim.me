import { useEffect, useState } from 'react';

import { achievementDataType } from '../data';
import ImageCarousel from '../ImageCarousel';
import ImageItem from '../ImageCarousel/ImageItem';
import * as S from './styled';

type ImageViewerProps = {
  show: boolean;
  imageData: achievementDataType;
  onClose: () => void;
};

const WIDTH = '100vw';
const HEIGHT = '80dvh';

const ImageViewer = ({ show, imageData, onClose }: ImageViewerProps) => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const handleLeftButtonClick = () => {
    setImageIndex((prev) => prev - 1);
  };

  const handleRightButtonClick = () => {
    setImageIndex((prev) => prev + 1);
  };

  useEffect(() => {
    setImageIndex(0);
  }, [show]);

  return (
    <S.ImageViewerWrapper show={show}>
      <S.CloseButton onClick={onClose} />

      <ImageCarousel width={WIDTH} height={HEIGHT} index={imageIndex}>
        {imageData?.images.map((image, index) => (
          <ImageItem
            width={WIDTH}
            height={HEIGHT}
            imgSrc={image}
            key={index}
            alt={imageData.alt}
            style={{ objectFit: 'contain' }}
          />
        ))}
      </ImageCarousel>

      <S.LeftButton onClick={handleLeftButtonClick} disabled={imageIndex === 0} />
      <S.RightButton
        onClick={handleRightButtonClick}
        disabled={imageIndex === imageData?.images?.length - 1}
      />
    </S.ImageViewerWrapper>
  );
};

export default ImageViewer;
