import styles from "./../styles/button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  classes?: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
}

export default function Button({
  children,
  classes = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const cssClasses = classes
    .split(" ")
    .map((className) => styles[className] || className)
    .join(" ");

  return (
    <button type={type} className={cssClasses} onClick={onClick}>
      {children}
    </button>
  );
}
