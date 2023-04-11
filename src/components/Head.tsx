import { default as NextHead } from "next/head";

export type HeadProps = {
  title?: string;
  description?: string;
};

export default function Head(props: HeadProps) {
  const { title, description } = props;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
