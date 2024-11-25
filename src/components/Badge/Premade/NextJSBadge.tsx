import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const NextJSBadge = ({ size = 40, showName = true, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      showName={showName}
      core={core}
      name="Next.js"
      textColor="white"
      backgroundColor1="#484848"
      customImage="Nextjs.svg"
    />
  );
};

export default NextJSBadge;
