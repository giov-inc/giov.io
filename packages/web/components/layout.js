import Head from "next/head";

export const siteTitle = "GIOV";
export const siteDescription = "Un expert numérique à votre service";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>
          {siteTitle} - {siteDescription}
        </title>
        <meta name="description" content={siteDescription} />
        <meta property="og:image" content="" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
    </>
  );
}
