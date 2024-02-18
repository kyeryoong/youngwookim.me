import { observer } from 'mobx-react';
import { useState } from 'react';

import { description } from './description';
import * as S from './styled';

const Profile3 = observer(() => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <S.PageWrapper>
      <S.Heading>
        What&#39;s on
        <br />
        My Table?
      </S.Heading>
      <S.TableItemsWrapper>
        <S.TableItem.Keyboard
          width={1500}
          height={1000}
          src={'/profile/keyboard_graphic.png'}
          alt="Keyboard"
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={handleMouseLeave}
          itemIndex={0}
          hoveredIndex={hoveredIndex}
        />
        <S.TableItem.Mouse
          width={1000}
          height={1000}
          src={'/profile/mouse_graphic.png'}
          alt="Mouse"
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={handleMouseLeave}
          itemIndex={1}
          hoveredIndex={hoveredIndex}
        />
        <S.TableItem.Monitor
          width={1500}
          height={1500}
          src={'/profile/monitor_graphic.png'}
          alt="Monitor"
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={handleMouseLeave}
          itemIndex={2}
          hoveredIndex={hoveredIndex}
        />
        <S.TableItem.Coffee
          width={1000}
          height={1500}
          src={'/profile/coffee_graphic.png'}
          alt="Coffee"
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={handleMouseLeave}
          itemIndex={3}
          hoveredIndex={hoveredIndex}
        />
        <S.TableItem.Book
          width={1000}
          height={1500}
          src={'/profile/book_graphic.png'}
          alt="Book"
          onMouseEnter={() => setHoveredIndex(4)}
          onMouseLeave={handleMouseLeave}
          itemIndex={4}
          hoveredIndex={hoveredIndex}
        />
      </S.TableItemsWrapper>
      <S.DescriptionWrapper>
        {hoveredIndex !== null ? (
          <S.Description>
            <S.DescriptionImage
              width={1000}
              height={1000}
              src={description[hoveredIndex].imgSrc}
              alt=""
            />
            <S.DescriptionNameEng>{description[hoveredIndex].nameEng}</S.DescriptionNameEng>
            <S.DescriptionNameKor>{description[hoveredIndex].nameKor}</S.DescriptionNameKor>
            <S.DescriptionPrice>
              {`￦ ${description[hoveredIndex].price.toLocaleString('ko-KR')}`}
            </S.DescriptionPrice>
          </S.Description>
        ) : (
          <S.DescriptionPlaceHolder>Place the mouse on the item.</S.DescriptionPlaceHolder>
        )}
      </S.DescriptionWrapper>
    </S.PageWrapper>
  );
});

export default Profile3;
