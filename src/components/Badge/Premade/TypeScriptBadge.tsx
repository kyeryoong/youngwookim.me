import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const TypeScriptBadge = ({ size = 40, showName = true, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      showName={showName}
      core={core}
      name="TypeScript"
      textColor="white"
      backgroundColor1="#3178C6"
    />
  );
};

export default TypeScriptBadge;
