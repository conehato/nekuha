interface IButtonProps {
  children: string;
  type?: "solid" | "border";
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export function Button({ children, type = "solid", onClick }: IButtonProps) {
  const typeStyle = type === "solid" ? "bg-sky-600" : "border border-sky-600";
  const container = `flex justify-center items-center px-3 h-8 rounded-md cursor-pointer ${typeStyle}`;

  const textStyle = `font-semibold ${
    type === "solid" ? "text-white" : "text-sky-600"
  }`;

  return (
    <div className={container}>
      <div onClick={onClick} className={textStyle}>
        {children}
      </div>
    </div>
  );
}
