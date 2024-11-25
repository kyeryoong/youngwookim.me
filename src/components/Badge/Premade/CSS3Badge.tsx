import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const CSS3Badge = ({ size = 40, showName = true, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      showName={showName}
      core={core}
      name="CSS3"
      textColor="white"
      backgroundColor1="#2965F1"
    />
  );
};

export default CSS3Badge;
