import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const FigmaBadge = ({ size = 40, showName = true, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      showName={showName}
      core={core}
      name="Figma"
      textColor="white"
      backgroundColor1="#2E3038"
    />
  );
};

export default FigmaBadge;
