import Image from "next/image";
import { useTheme } from "@interchain-ui/react";
import logoLight from "../../images/logo-light.svg";
import logoDark from "../../images/logo-dark.svg";

export type LogoProps = {
  width?: number;
};

export function Logo({ width = 200 }: LogoProps) {
  const theme = useTheme();
  return theme.colorMode === "light"
    ? <Image src={logoLight} alt="logo" width={width} />
    : <Image src={logoDark} alt="logo" width={width} />;
}
