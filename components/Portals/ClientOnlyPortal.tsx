import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function ClientOnlyPortal({
  children,
  selector,
}: Readonly<{ children: React.ReactNode; selector: string }>) {
  const ref = useRef<HTMLElement>();
  const [mounted, setMount] = useState(false);

  useEffect(() => {
    const element = document.querySelector(selector);
    if (element) {
      ref.current = element as HTMLElement; //Revise
      setMount(true);
    } else {
      throw new Error(`No portal found with this selector: ${selector}`);
    }
  }, [selector]);

  return mounted ? createPortal(children, ref.current!) : null;
}
