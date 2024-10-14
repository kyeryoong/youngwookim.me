import { Oval } from 'react-loader-spinner';
import { useTheme } from 'styled-components';

type LoadingSpinnerProps = {
  size?: number;
  weight?: number;
};

const LoadingSpinner = ({ size = 40, weight = size * 0.1 }: LoadingSpinnerProps) => {
  const theme = useTheme();

  return (
    <Oval
      width={size}
      height={size}
      color={theme.color.gray[400]}
      secondaryColor={theme.color.gray[600]}
      strokeWidth={weight}
    />
  );
};

export default LoadingSpinner;
