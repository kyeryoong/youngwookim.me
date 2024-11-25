import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const StyledComponentsBadge = ({ size = 40, showName = true, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      showName={showName}
      core={core}
      name="styled components"
      textColor="white"
      backgroundColor1="#F3B661"
      backgroundColor2="#DA6B90"
      customImage="styled components.png"
    />
  );
};

export default StyledComponentsBadge;
