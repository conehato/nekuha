interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export function Input(props: IInputProps) {
  return (
    <input
      {...props}
      className="bg-white border border-stone-300 rounded-md drop-shadow px-4 py-2"
    />
  );
}
