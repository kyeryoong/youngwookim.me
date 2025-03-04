import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const MobXBadge = ({ size = 40, showName = true, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      showName={showName}
      core={core}
      name="MobX"
      textColor="white"
      backgroundColor1="#EA6618"
    />
  );
};

export default MobXBadge;
