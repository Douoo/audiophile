import styles from "./Overlay.module.css";
export function Overlay({
  children,
  className,
  onOverlayClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onOverlayClick: () => void;
}) {
  return (
    <div className={`${styles.backdrop} ${className}`} onClick={onOverlayClick}>
      {children}
    </div>
  );
}
