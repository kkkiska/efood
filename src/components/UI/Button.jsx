const Button = ({
  children,
  className,
  href,
  onClick = function () {
    return undefined;
  },
}) => {
  if (href) {
    return (
      <a href={href} className={'button' + className}>
        {children}
      </a>
    );
  } else {
    return (
      <button
        className={'button ' + className}
        onClick={() => {
          onClick();
        }}
      >
        {children}
      </button>
    );
  }
};

export default Button;
