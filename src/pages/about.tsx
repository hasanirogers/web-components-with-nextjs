import LayoutDefault from "../app/layouts/default";
import { ReactElement } from "react";
import Head from "../app/components/Head";
import { useRouter } from "next/router";
import "./about.scss";

export default function About() {
  const router = useRouter();
  return (
    <>
      <Head
        title="About | Web Components + Next.js"
        description="An example on how to use Web Component in an Next.js app."
      />
      <main className={"main"}>
        <p>Enjoying the demo?</p>
        <kemet-button variant="pill" onClick={() => router.push("/")}>
          <kemet-icon icon="chevron-left" slot="left"></kemet-icon>
          Return Home
        </kemet-button>
      </main>
    </>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
