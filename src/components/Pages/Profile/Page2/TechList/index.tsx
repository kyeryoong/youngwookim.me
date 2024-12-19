import CSS3Badge from '@/components/Badge/Premade/CSS3Badge';
import GitBadge from '@/components/Badge/Premade/GitBadge';
import GitHubBadge from '@/components/Badge/Premade/GitHubBadge';
import GitLabBadge from '@/components/Badge/Premade/GitLabBadge';
import HTML5Badge from '@/components/Badge/Premade/HTML5Badge';
import JavaScriptBadge from '@/components/Badge/Premade/JavaScriptBadge';
import MobXBadge from '@/components/Badge/Premade/MobXBadge';
import NextJSBadge from '@/components/Badge/Premade/NextJSBadge';
import ReactBadge from '@/components/Badge/Premade/ReactBadge';
import StyledComponentsBadge from '@/components/Badge/Premade/StyledComponentsBadge';
import TypeScriptBadge from '@/components/Badge/Premade/TypeScriptBadge';

import * as S from './styled';

const TechList = () => {
  return (
    <S.TechList>
      <S.TechWrapper>
        <HTML5Badge showName={false} size={80} />
        <S.TechName>HTML</S.TechName>
      </S.TechWrapper>
      <S.TechWrapper>
        <CSS3Badge showName={false} size={80} />
        <S.TechName>CSS</S.TechName>
      </S.TechWrapper>
      <S.TechWrapper>
        <JavaScriptBadge showName={false} size={80} />
        <S.TechName>JavaScript</S.TechName>
      </S.TechWrapper>
      <S.TechWrapper>
        <TypeScriptBadge showName={false} size={80} />
        <S.TechName>TypeScript</S.TechName>
      </S.TechWrapper>
      <S.TechWrapper>
        <ReactBadge showName={false} size={80} />
        <S.TechName>React</S.TechName>
      </S.TechWrapper>
      <S.TechWrapper>
        <NextJSBadge showName={false} size={80} />
        <S.TechName>Next.js</S.TechName>
      </S.TechWrapper>
      <S.TechWrapper>
        <MobXBadge showName={false} size={80} />
        <S.TechName>MobX</S.TechName>
      </S.TechWrapper>
      <S.TechWrapper>
        <StyledComponentsBadge showName={false} size={80} />
        <S.TechName>styled components</S.TechName>
      </S.TechWrapper>
      <S.TechWrapper>
        <GitBadge showName={false} size={80} />
        <S.TechName>Git</S.TechName>
      </S.TechWrapper>
      <S.TechWrapper>
        <GitHubBadge showName={false} size={80} />
        <S.TechName>GitHub</S.TechName>
      </S.TechWrapper>
      <S.TechWrapper>
        <GitLabBadge showName={false} size={80} />
        <S.TechName>GitLab</S.TechName>
      </S.TechWrapper>
    </S.TechList>
  );
};

export default TechList;
