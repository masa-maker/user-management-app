import { Header } from "../organisms/layout/Header";
import { memo,ReactNode, FC } from "react";

type Props = {
  children: ReactNode;
}

export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  )
});