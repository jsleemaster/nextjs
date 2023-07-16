import { useEffect, useState } from "react";

const useInit = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};

export default useInit;
