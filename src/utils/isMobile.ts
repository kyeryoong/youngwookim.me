const isMobile = () => {
  if (window.innerWidth < 1000) {
    return true;
  }

  if (typeof navigator !== 'undefined') {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  }

  return false;
};

export default isMobile;
