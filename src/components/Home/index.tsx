import { useEffect, useState } from 'react';

import Home1 from './Home1';
import Home2 from './Home2';
import * as S from './styled';

const Home = () => {
  const [page, setPage] = useState<number>(0);

  const [showVideo, setShowVideo] = useState<boolean>(false);

  const handleLoadedData = () => {
    setShowVideo(true);
  };

  useEffect(() => {
    const pageInterval = setInterval(() => {
      setPage((prev) => (prev === 0 ? 1 : 0));
    }, 10000);

    return () => clearInterval(pageInterval);
  }, []);

  return (
    <>
      <S.HomeWrapper page={page}>
        <Home1 />
        <Home2 />
      </S.HomeWrapper>

      <S.Video
        src={'/home/1.webm'}
        onLoadedData={handleLoadedData}
        showVideo={showVideo}
        playsInline
        autoPlay
        loop
        muted
      />
    </>
  );
};

export default Home;
