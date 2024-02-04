import { observer } from 'mobx-react';
import * as S from './styled';
import { useEffect, useState } from 'react';

const Profile2 = observer(() => {
  const xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.open('HEAD', window.location.href.toString(), false);
  xmlHttpRequest.setRequestHeader('ContentType', 'text/html');
  xmlHttpRequest.send('');

  // const serverDate = xmlHttpRequest.getResponseHeader('Date') ?? '';

  const today = new Date();
  const data = new Date(2023, 6, 3);

  let workingDays = Math.abs(today.getTime() - data.getTime());
  workingDays = Math.ceil(workingDays / (1000 * 60 * 60 * 24));

  function easeOutExpo(t: number): number {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function useCountUp(end: number, start = 0, duration = 2000) {
    const [count, setCount] = useState(start);
    const frameRate = 1000 / 60;
    const totalFrame = Math.round(duration / frameRate);

    useEffect(() => {
      let currentNumber = start;
      const counter = setInterval(() => {
        const progress = easeOutExpo(++currentNumber / totalFrame);
        setCount(Math.round(end * progress));

        if (progress === 1) {
          clearInterval(counter);
        }
      }, frameRate);
    }, [end, frameRate, start, totalFrame]);

    return count;
  }

  return (
    <S.PageWrapper>
      <S.WorkingExperienceWrapper>
        <S.WorkingExperienceDays>{useCountUp(workingDays, 0, 500)}</S.WorkingExperienceDays>
        <S.WorkingExperienceLabel>days of working experience</S.WorkingExperienceLabel>
      </S.WorkingExperienceWrapper>
      <S.CompanyWrapper>
        <S.CompanyLogo
          width={1600}
          height={200}
          src={'/profile/tmax_waplai_logo.png'}
          alt="Tmax WAPL"
        />
        <S.CompanyName>티맥스와플닷에이아이</S.CompanyName>
        <S.CompanyDays>2023.7.3 ~ 현재</S.CompanyDays>
      </S.CompanyWrapper>
    </S.PageWrapper>
  );
});

export default Profile2;
