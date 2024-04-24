import React from "react";

export default function useEvent<K extends keyof WindowEventMap>(
  type: K,
  listener: (this: Window, event: WindowEventMap[K]) => any,
) {
  const listenerRef = React.useRef(listener);
  React.useMemo(() => {
    listenerRef.current = listener;
  }, [listener]);

  React.useEffect(() => {
    window.addEventListener(type, listenerRef.current);
    return () => {
      window.removeEventListener(type, listenerRef.current);
    };
  }, [type]);
}
