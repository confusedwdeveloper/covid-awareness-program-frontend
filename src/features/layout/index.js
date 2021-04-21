import Head from "next/head";
import { Container } from "@material-ui/core";

export default function Layout({
  title = "COVID-19 Awareness Program",
  children,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container maxWidth="md">{children}</Container>
    </>
  );
}
