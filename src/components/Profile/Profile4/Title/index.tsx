import { observer } from 'mobx-react-lite';

import * as S from './styled';

const Title = observer(() => {
  return (
    <S.Title>
      Things
      <br />
      About Me
    </S.Title>
  );
});

export default Title;
