import styles from "./Overlay.module.css";
export function Overlay({
  children,
  onOverlayClick,
}: {
  children?: React.ReactNode;
  onOverlayClick: () => void;
}) {
  return (
    <div className={styles.backdrop} onClick={onOverlayClick}>
      {children}
    </div>
  );
}
