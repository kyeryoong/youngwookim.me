import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const MongoDBBadge = ({ size = 40, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      core={core}
      name="MongoDB"
      textColor="white"
      backgroundColor1="#00684A"
    />
  );
};

export default MongoDBBadge;
