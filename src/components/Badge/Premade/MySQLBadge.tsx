import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const MySQLBadge = ({ size = 40, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      core={core}
      name="MySQL"
      textColor="white"
      backgroundColor1="#00758F"
      backgroundColor2="#F29111"
    />
  );
};

export default MySQLBadge;
