import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const JavaScriptBadge = ({ size = 40, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      core={core}
      name="JavaScript"
      textColor="black"
      backgroundColor1="#F7DF1E"
    />
  );
};

export default JavaScriptBadge;
