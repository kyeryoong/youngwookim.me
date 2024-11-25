import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const MongoDBBadge = ({ size = 40, showName = true, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      showName={showName}
      core={core}
      name="MongoDB"
      textColor="white"
      backgroundColor1="#00684A"
    />
  );
};

export default MongoDBBadge;
