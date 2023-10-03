const Button = ({
  label,
  icon,
  borderColor,
  backgroundColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center py-4 px-7 gap-1 text-lg border font-montserrat leading-none rounded-full ${
        fullWidth && "w-full"
      }
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : " bg-coral-red border-coral-red text-white"
    }`}
    >
      {label}
      {icon && (
        <img src={icon} alt="icon" className="rounded-full w-5 h-5 ml-2" />
      )}
    </button>
  );
};

export default Button;
