import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const GitBadge = ({ size = 40, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge size={size} core={core} name="Git" textColor="white" backgroundColor1="#F05133" />
  );
};

export default GitBadge;
