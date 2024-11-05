import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const GitHubBadge = ({ size = 40, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      core={core}
      name="GitHub"
      textColor="white"
      backgroundColor1="#444c54"
    />
  );
};

export default GitHubBadge;
