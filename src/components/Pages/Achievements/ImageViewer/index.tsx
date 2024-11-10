import { useEffect, useState } from 'react';

import IconButton from '@/theme/IconButton';

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
    if (show) {
      setImageIndex(0);
    } else {
      setTimeout(() => setImageIndex(0), 1000);
    }
  }, [show]);

  return (
    <S.ImageViewerWrapper show={show}>
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

      <S.CloseButtonWrapper>
        <IconButton type={'close'} onClick={onClose} />
      </S.CloseButtonWrapper>

      <S.LeftButtonWrapper>
        <IconButton type={'left'} onClick={handleLeftButtonClick} disabled={imageIndex === 0} />
      </S.LeftButtonWrapper>

      <S.RightButtonWrapper>
        <IconButton
          type={'right'}
          onClick={handleRightButtonClick}
          disabled={imageIndex === imageData?.images?.length - 1}
        />
      </S.RightButtonWrapper>
    </S.ImageViewerWrapper>
  );
};

export default ImageViewer;
