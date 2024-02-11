import React from "react";

type ContainerType = {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Container = (props: ContainerType) => {
  const {className, children, style} = props;

  return (
    <section className={`container ${className}`} style={style}>
      {children}
    </section>
  );
};
