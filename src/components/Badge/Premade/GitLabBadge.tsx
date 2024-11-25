import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const GitLabBadge = ({ size = 40, showName = true, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      showName={showName}
      core={core}
      name="GitLab"
      textColor="white"
      backgroundColor1="#FC6D26"
    />
  );
};

export default GitLabBadge;
