import { observer } from 'mobx-react-lite';

import store from '@/stores/store';

import * as S from './styled';

const LanguageRadioButton = observer(() => {
  const handleEnglishClick = () => {
    store.setLanguage('en');
  };

  const handleKoreanClick = () => {
    store.setLanguage('kr');
  };

  return (
    <S.LanguageRadioButtonWrapper>
      <S.RadioButtonWrapper>
        <S.RadioButton onClick={handleEnglishClick}>
          {store.language === 'en' && <S.Radio />}
        </S.RadioButton>
        <S.Label>{store.language === 'en' ? 'English' : '영어'}</S.Label>
      </S.RadioButtonWrapper>

      <S.RadioButtonWrapper>
        <S.RadioButton onClick={handleKoreanClick}>
          {store.language === 'kr' && <S.Radio />}
        </S.RadioButton>
        <S.Label>{store.language === 'en' ? 'Korean' : '한국어'}</S.Label>
      </S.RadioButtonWrapper>
    </S.LanguageRadioButtonWrapper>
  );
});

export default LanguageRadioButton;
