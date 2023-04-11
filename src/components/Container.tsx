import type { ReactNode } from "react";

export type ContainerProps = {
  children: ReactNode;
};

export default function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <div className="mx-auto px-2 md:px-8 lg:px-20 bg-black">{children}</div>
  );
}
