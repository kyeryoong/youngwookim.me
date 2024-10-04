import { observer } from 'mobx-react-lite';

import { useStore } from '@/stores';

import * as S from './styled';

const LanguageRadioButton = observer(() => {
  const { homeStore } = useStore();

  const handleEnglishClick = () => {
    homeStore.setLanguage('en');
  };

  const handleKoreanClick = () => {
    homeStore.setLanguage('kr');
  };

  return (
    <S.LanguageRadioButtonWrapper>
      <S.RadioButtonWrapper>
        <S.RadioButton onClick={handleEnglishClick}>
          {homeStore.language === 'en' && <S.Radio />}
        </S.RadioButton>
        <S.Label>{homeStore.language === 'en' ? 'English' : '영어'}</S.Label>
      </S.RadioButtonWrapper>

      <S.RadioButtonWrapper>
        <S.RadioButton onClick={handleKoreanClick}>
          {homeStore.language === 'kr' && <S.Radio />}
        </S.RadioButton>
        <S.Label>{homeStore.language === 'en' ? 'Korean' : '한국어'}</S.Label>
      </S.RadioButtonWrapper>
    </S.LanguageRadioButtonWrapper>
  );
});

export default LanguageRadioButton;
