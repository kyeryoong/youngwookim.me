import IconButton from '@/theme/IconButton';
import ImageCarousel from '@/theme/ImageCarousel';

import { achievementDataType } from '../data';
import * as S from './styled';

type ImageViewerProps = {
  show: boolean;
  imageData: achievementDataType;
  onClose: () => void;
};

const ImageViewer = ({ show, imageData, onClose }: ImageViewerProps) => {
  return (
    <S.ImageViewerWrapper show={show}>
      {show && (
        <ImageCarousel
          images={imageData.images}
          carouselOptions={{ showPagination: true, showPrevNextButtons: true }}
          carouselStyle={{ width: '100%', height: '100%' }}
          imageStyle={{
            width: 'fit-content',
            height: 'fit-content',
            maxWidth: '70%',
            maxHeight: '80%',
            objectFit: 'contain',
            borderRadius: '4px',
          }}
        />
      )}

      <S.CloseButtonWrapper>
        <IconButton type={'close'} onClick={onClose} />
      </S.CloseButtonWrapper>
    </S.ImageViewerWrapper>
  );
};

export default ImageViewer;
