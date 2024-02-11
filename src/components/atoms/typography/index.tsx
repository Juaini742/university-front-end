type ParagraphType = {
  className?: string;
  variant?: "title";
  children?: React.ReactNode;
};

export const Paragraph = (props: ParagraphType) => {
  const {className, variant, children} = props;

  let paragraphStyle = "";

  switch (variant) {
    case "title":
      paragraphStyle += "title";
      break;

    default:
      break;
  }

  return (
    <div className="flex items-center flex-col">
      <p className={`${paragraphStyle} ${className}`}>{children}</p>
      <span className="title-border" />
    </div>
  );
};
