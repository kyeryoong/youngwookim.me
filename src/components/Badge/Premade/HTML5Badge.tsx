import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const HTML5Badge = ({ size = 40, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      core={core}
      name="HTML5"
      textColor="white"
      backgroundColor1="#E34C26"
    />
  );
};

export default HTML5Badge;
