import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const JavaScriptBadge = ({ size = 40, showName = true, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      showName={showName}
      core={core}
      name="JavaScript"
      textColor="black"
      backgroundColor1="#F7DF1E"
    />
  );
};

export default JavaScriptBadge;
