import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const GitLabBadge = ({ size = 40, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      core={core}
      name="GitLab"
      textColor="white"
      backgroundColor1="#FC6D26"
    />
  );
};

export default GitLabBadge;
