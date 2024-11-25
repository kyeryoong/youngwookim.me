import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const VercelBadge = ({ size = 40, showName = true, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      showName={showName}
      core={core}
      name="Vercel"
      textColor="white"
      backgroundColor1="#484848"
    />
  );
};

export default VercelBadge;
