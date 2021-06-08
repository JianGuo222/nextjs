import Head from "next/head";

export default function HelloUserAgent({ userAgent = "Nobody" }) {
  return (
    <>
      <Head>
        <title>Hello User Agent! SSR</title>
      </Head>
      <p>
        {" "}
        Hi <em>{userAgent}</em> !{" "}
      </p>
    </>
  );
}

export const getServerSideProps = async ({ req }) => {
  return {
    props: {
      userAgent: req.headers["user-agent"],
    },
  };
};