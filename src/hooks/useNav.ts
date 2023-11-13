import { useState } from "react";

export const useNav = () => {
  const [target, setTarget] = useState<string | null>("袋");

  const navigateHooks = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTarget(e.currentTarget.textContent);
  };

  return { target, setTarget, navigateHooks };
};
