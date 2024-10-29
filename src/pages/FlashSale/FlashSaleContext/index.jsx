import { createContext, useEffect, useState } from 'react';

export const FlashSaleContext = createContext();
// eslint-disable-next-line react/prop-types
export const FlashSaleProvider = ({ children }) => {
  const [isFlashSaleActive, setIsFlashSaleActive] = useState(false);

  const [flashSaleDuration, setFlashSaleDuration] = useState(60);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlashSaleActive(false); // Hết thời gian flash sale
    }, flashSaleDuration * 1000);
    //Chuyển đổi sang mili giây
    return () => clearTimeout(timer);
  }, [flashSaleDuration]);
  const value = {
    isFlashSaleActive,
    setIsFlashSaleActive,
    flashSaleDuration,
    setFlashSaleDuration,
  };

  return (
    <FlashSaleContext.Provider value={value}>
      {children}
    </FlashSaleContext.Provider>
  );
};
