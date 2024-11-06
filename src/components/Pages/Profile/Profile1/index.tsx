import { observer } from 'mobx-react-lite';

import jetBrainsMono from '@/font/jetBrainsMono';

import * as S from './styled';

const Profile1 = observer(() => {
  const handleEmailClick = () => {
    window.open(
      'mailto:kyeryoong@gmail.com?subject=안녕하세요, youngwookim.me을 통해서 이메일 드립니다.',
    );
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/kyeryoong');
  };

  return (
    <S.ProfilePageWrapper>
      <S.YoungWoo className={jetBrainsMono.className}>
        <S.Line $delay={0}>
          <S.Text.DarkGray>&#47;&#47; Let me introduce myself.</S.Text.DarkGray>
        </S.Line>
        <br />
        <S.Line $delay={200}>
          <S.Text.Blue>let</S.Text.Blue>&nbsp;&nbsp;
          <S.Text.White>youngwoo</S.Text.White>&nbsp;&nbsp;
          <S.Text.Red>=</S.Text.Red>&nbsp;&nbsp;
          <S.Text.Red>&#123;</S.Text.Red>
        </S.Line>
        <S.Line $delay={400}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <S.Text.White>name</S.Text.White>
          <S.Text.Gray>:</S.Text.Gray>&nbsp;&nbsp;
          <S.Text.Gray>&#34;</S.Text.Gray>
          <S.Text.Yellow>Kim Young-Woo</S.Text.Yellow>
          <S.Text.Gray>&#34;</S.Text.Gray>
          <S.Text.Gray>,</S.Text.Gray>
        </S.Line>
        <S.Line $delay={600}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <S.Text.White>birth</S.Text.White>
          <S.Text.Gray>:</S.Text.Gray>&nbsp;&nbsp;
          <S.Text.Red>new</S.Text.Red>&nbsp;&nbsp;
          <S.Text.Green>Date</S.Text.Green>
          <S.Text.Orange>(</S.Text.Orange>
          <S.Text.Purple>1995</S.Text.Purple>
          <S.Text.Gray>,</S.Text.Gray>&nbsp;
          <S.Text.Purple>7</S.Text.Purple>
          <S.Text.Gray>,</S.Text.Gray>&nbsp;
          <S.Text.Purple>29</S.Text.Purple>
          <S.Text.Orange>)</S.Text.Orange>
          <S.Text.Gray>,</S.Text.Gray>
        </S.Line>
        <S.Line $delay={800}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <S.Text.White>position</S.Text.White>
          <S.Text.Gray>:</S.Text.Gray>&nbsp;&nbsp;
          <S.Text.Blue>front-end</S.Text.Blue>
          <S.Text.Gray>,</S.Text.Gray>
        </S.Line>
        <S.Line $delay={1000}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <S.Text.White>email</S.Text.White>
          <S.Text.Gray>:</S.Text.Gray>&nbsp;&nbsp;
          <S.Text.Gray>&#34;</S.Text.Gray>
          <S.Text.Yellow $hover onClick={handleEmailClick}>
            kyeryoong@gmail.com
          </S.Text.Yellow>
          <S.Text.Gray>&#34;</S.Text.Gray>
          <S.Text.Gray>,</S.Text.Gray>
        </S.Line>
        <S.Line $delay={1200}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <S.Text.White>github</S.Text.White>
          <S.Text.Gray>:</S.Text.Gray>&nbsp;&nbsp;
          <S.Text.Gray>&#34;</S.Text.Gray>
          <S.Text.Yellow $hover onClick={handleGitHubClick}>
            github.com/kyeryoong
          </S.Text.Yellow>
          <S.Text.Gray>&#34;</S.Text.Gray>
        </S.Line>
        <S.Line $delay={1400}>
          <S.Text.Red>&#125;</S.Text.Red>
          <S.Text.Gray>&#59;</S.Text.Gray>
        </S.Line>
      </S.YoungWoo>
    </S.ProfilePageWrapper>
  );
});

export default Profile1;
