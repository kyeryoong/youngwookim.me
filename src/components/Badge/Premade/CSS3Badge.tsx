import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const CSS3Badge = ({ size = 40, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge size={size} core={core} name="CSS3" textColor="white" backgroundColor1="#2965F1" />
  );
};

export default CSS3Badge;
