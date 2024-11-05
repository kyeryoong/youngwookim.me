import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const ReactBadge = ({ size = 40, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      core={core}
      name="React"
      textColor="white"
      backgroundColor1="#61DAFB"
    />
  );
};

export default ReactBadge;
