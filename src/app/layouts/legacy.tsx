import { useRouter } from "next/router";
import { useRef } from "react";
import KemetDrawer from "kemet-ui/dist/components/kemet-drawer/kemet-drawer";
import Script from "next/script";
import paths from "../shared/paths";
import "../shared/styles";
import "../styles/shared.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const kemetDrawerRef = useRef<KemetDrawer>(null);

  if (kemetDrawerRef.current) {
    kemetDrawerRef.current.addEventListener("kemet-drawer-opened", () => {
      kemetDrawerRef.current!.opened = true;
    });

    kemetDrawerRef.current.addEventListener("kemet-drawer-closed", () => {
      kemetDrawerRef.current!.opened = false;
    });
  }

  function handleButtonClick() {
    router.push("/about");
    if (kemetDrawerRef.current) kemetDrawerRef.current.opened = false;
  }

  return (
    <>
      <kemet-drawer side="right" effect="push" overlay ref={kemetDrawerRef}>
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
          <button
            aria-label="menu"
            onClick={() => (kemetDrawerRef.current!.opened = true)}
          >
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
