import * as React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout';
import TextComponent from '../components/TextComponet';
import Hello1 from '../components/Hello';
import styles from '../styles/index.scss';


const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
     <div>
      <TextComponent title="Hi">
        <p className={styles.example}>component children API</p>
      </TextComponent>
      <Hello1 name='12' enthusiasmLevel={10}></Hello1>
      <p>aaa</p>
      <a href="/a">sadh </a>
      
      
        <style jsx>
        {
          `
          div {
            color: red
          }
          p {
            color: red
          }
          `
        }
        </style>
     </div>
    </Layout>
    
  )
}

export default IndexPage;
