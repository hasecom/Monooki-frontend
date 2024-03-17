import { useEffect } from 'react';

const useKeyboardHeight = (callback: (height: number) => void) => {
  useEffect(() => {
    const handleKeyboardShow = (e: any) => {
      const keyboardHeight = e?.keyboard?.height || 0;
      callback(keyboardHeight);
    };

    const handleKeyboardHide = () => {
      callback(0);
    };

    window.addEventListener('keyboardWillShow', handleKeyboardShow);
    window.addEventListener('keyboardDidHide', handleKeyboardHide);

    return () => {
      window.removeEventListener('keyboardWillShow', handleKeyboardShow);
      window.removeEventListener('keyboardDidHide', handleKeyboardHide);
    };
  }, [callback]);
};

export default useKeyboardHeight;