import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { description } from './description';
import * as S from './styled';

const Profile3 = observer(() => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleHoverKeyboard = () => {
    setHoveredIndex(0);
  };

  const handleHoverMouse = () => {
    setHoveredIndex(1);
  };

  const handleHoverMonitor = () => {
    setHoveredIndex(2);
  };

  const handleHoverCoffee = () => {
    setHoveredIndex(3);
  };

  const handleHoverBook = () => {
    setHoveredIndex(4);
  };

  return (
    <S.ProfilePageWrapper>
      <S.Title>
        What&#39;s on
        <br />
        My Desk?
      </S.Title>

      <S.ItemsWrapper>
        <S.Item.Keyboard
          width={1500}
          height={1000}
          src={'/profile/keyboard_graphic.png'}
          alt="Keyboard"
          onMouseEnter={handleHoverKeyboard}
          onMouseLeave={handleMouseLeave}
          $itemIndex={0}
          $hoveredIndex={hoveredIndex}
        />
        <S.Item.Mouse
          width={1000}
          height={1000}
          src={'/profile/mouse_graphic.png'}
          alt="Mouse"
          onMouseEnter={handleHoverMouse}
          onMouseLeave={handleMouseLeave}
          $itemIndex={1}
          $hoveredIndex={hoveredIndex}
        />
        <S.Item.Monitor
          width={1500}
          height={1500}
          src={'/profile/monitor_graphic.png'}
          alt="Monitor"
          onMouseEnter={handleHoverMonitor}
          onMouseLeave={handleMouseLeave}
          $itemIndex={2}
          $hoveredIndex={hoveredIndex}
        />
        <S.Item.Coffee
          width={1000}
          height={1500}
          src={'/profile/coffee_graphic.png'}
          alt="Coffee"
          onMouseEnter={handleHoverCoffee}
          onMouseLeave={handleMouseLeave}
          $itemIndex={3}
          $hoveredIndex={hoveredIndex}
        />
        <S.Item.Book
          width={1000}
          height={1500}
          src={'/profile/book_graphic.png'}
          alt="Book"
          onMouseEnter={handleHoverBook}
          onMouseLeave={handleMouseLeave}
          $itemIndex={4}
          $hoveredIndex={hoveredIndex}
        />
      </S.ItemsWrapper>

      <S.ListWrapper>
        <S.ListElement onMouseEnter={handleHoverKeyboard} onMouseLeave={handleMouseLeave}>
          <S.ListElementLabel $isHovered={hoveredIndex === 0}>Keyboard</S.ListElementLabel>
          <S.ListElementDescription $isHovered={hoveredIndex === 0}>
            {description[0].nameKor}
          </S.ListElementDescription>
        </S.ListElement>

        <S.ListElement onMouseEnter={handleHoverMouse} onMouseLeave={handleMouseLeave}>
          <S.ListElementLabel $isHovered={hoveredIndex === 1}>Mouse</S.ListElementLabel>
          <S.ListElementDescription $isHovered={hoveredIndex === 1}>
            {description[1].nameKor}
          </S.ListElementDescription>
        </S.ListElement>

        <S.ListElement onMouseEnter={handleHoverMonitor} onMouseLeave={handleMouseLeave}>
          <S.ListElementLabel $isHovered={hoveredIndex === 2}>Monitor</S.ListElementLabel>
          <S.ListElementDescription $isHovered={hoveredIndex === 2}>
            {description[2].nameKor}
          </S.ListElementDescription>
        </S.ListElement>

        <S.ListElement onMouseEnter={handleHoverCoffee} onMouseLeave={handleMouseLeave}>
          <S.ListElementLabel $isHovered={hoveredIndex === 3}>Coffee</S.ListElementLabel>
          <S.ListElementDescription $isHovered={hoveredIndex === 3}>
            {description[3].nameKor}
          </S.ListElementDescription>
        </S.ListElement>

        <S.ListElement onMouseEnter={handleHoverBook} onMouseLeave={handleMouseLeave}>
          <S.ListElementLabel $isHovered={hoveredIndex === 4}>Book</S.ListElementLabel>
          <S.ListElementDescription $isHovered={hoveredIndex === 4}>
            {description[4].nameKor}
          </S.ListElementDescription>
        </S.ListElement>
      </S.ListWrapper>
    </S.ProfilePageWrapper>
  );
});

export default Profile3;
