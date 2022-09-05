const variants = {
  primary: 'bg-emerald-400 font-semibold text-gray-700',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
};

export const Button = props => {
  const {
    children,
    className,
    type = 'button',
    variant = 'primary',
    onClick,
  } = props;

  return (
    <button
      className={`${className} ${variants[variant]} active:scale-95 duration-300 font-bold px-4 py-3 rounded-lg text-sm transition uppercase`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
