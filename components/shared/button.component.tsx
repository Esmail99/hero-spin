interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const Button = ({ title, className, ...props }: Props) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold font-mono text-lg py-2 px-4 rounded ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};
