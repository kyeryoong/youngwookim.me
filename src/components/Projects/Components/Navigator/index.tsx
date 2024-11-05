import { useEffect, useState } from 'react';

import * as S from './styled';

const Navigator = () => {
  const [isNavigatorFixed, setIsNavigatorFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight + 200) {
        setIsNavigatorFixed(true);
      } else {
        setIsNavigatorFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return <S.NavigatorWrapper isNavigatorFixed={isNavigatorFixed}></S.NavigatorWrapper>;
};

export default Navigator;
