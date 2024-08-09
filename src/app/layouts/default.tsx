import Script from "next/script";
import paths from "../shared/paths";
import "../shared/styles";
import "../styles/shared.scss";
import { useRouter } from "next/router";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function handleButtonClick() {
    router.push("/about");
    setIsDrawerOpen(false);
  }

  function handleDrawerClose() {
    setIsDrawerOpen(false);
  }

  function handleDrawerOpen() {
    setIsDrawerOpen(true);
  }

  return (
    <>
      <kemet-drawer
        side="right"
        effect="push"
        overlay
        opened={isDrawerOpen}
        onkemet-drawer-closed={() => setIsDrawerOpen(false)}
        onkemet-drawer-opened={() => setIsDrawerOpen(true)}
      >
        <nav slot="navigation" className="sl-theme-dark">
          <sl-button size="medium" pill onClick={() => handleButtonClick()}>
            Shoelace Button
          </sl-button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <kemet-button variant="pill" onClick={() => handleButtonClick()}>
            Kemet Button
          </kemet-button>
          <br />
          <br />
          <p>Click either button to view a demo page with Web Components!</p>
        </nav>
        <section slot="content">
          <button aria-label="menu" onClick={() => setIsDrawerOpen(true)}>
            <kemet-icon icon="list" size="32"></kemet-icon>
          </button>
          {children}
        </section>
      </kemet-drawer>
      <Script src={paths.shoelaceBundle} />
      <Script src={paths.kemetBundle} />
    </>
  );
}
