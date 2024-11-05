import CustomBadge from '../CustomBadge';
import { PremadeBadgeProps } from './props';

const FirebaseBadge = ({ size = 40, core = false }: PremadeBadgeProps) => {
  return (
    <CustomBadge
      size={size}
      core={core}
      name="Firebase"
      textColor="white"
      backgroundColor1="#1E88E5"
      customImage="Firebase.svg"
    />
  );
};

export default FirebaseBadge;
