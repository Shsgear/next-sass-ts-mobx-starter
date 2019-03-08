import Head from 'next/head';

interface Props {
  title?:string,
}

export default (props:Props) => (
  <div>
    <Head>
      <title>{ props.title || "行云运动" }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
  </div>
)