import Lottie from 'react-lottie';

const useLottie = (lottieOptions) => {
  const { height, width, animationName } = lottieOptions;

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationName.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const animatedLogo = (
    <Lottie
      options={defaultOptions}
      height={height}
      width={width}
      style={{
        margin: '0',
      }}
    />
  );

  return [animatedLogo];
};

export default useLottie;
