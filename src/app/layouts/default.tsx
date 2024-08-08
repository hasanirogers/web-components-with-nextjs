import Script from "next/script";
import paths from "../shared/paths";
import "../shared/styles";
import "../styles/shared.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Script src={paths.shoelaceBundle} />
      <Script src={paths.kemetBundle} />
    </>
  );
}
