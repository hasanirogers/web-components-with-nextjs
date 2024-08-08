import Head from "next/head";

interface HeadHTMLProps {
  title: string;
  description: string;
}

export default function HeadHTML({ title, description }: HeadHTMLProps) {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="author" content="Hasani Rogers" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Head>
  );
}
