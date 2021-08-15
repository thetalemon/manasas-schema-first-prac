import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { Maybe, Transaction } from "../types/graphql-client-api";
import { InferGetStaticPropsType } from 'next';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        getTransactions {
          id
          memo
          in
          out
          transactionDate
        }
      }
    `,
  });

  return {
    props: {
      transactions: data.getTransactions.slice(0, 4),
    },
  };
}


function Transactions(props: Props) {
  const transactions = props.transactions;
  if (transactions.length !== 0) {
    return (
      transactions.map((country:Transaction) => (
        <tr key={country.id} className={styles.card}>
          <td>{country.transactionDate}</td>
          <td>{country.memo}</td>
          <td>{country.in}</td>
          <td>{country.out}</td>
        </tr>
      ))
    )
  }
  return (
    <tr>
      <td>データがありません</td>
    </tr>
  )
}

const Home: NextPage<Props> = ({ transactions }: {transactions: Maybe<Transaction[]>}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>おこづかい帳</title>
        <meta name="description" content="practice next.js and node.js with GraphQL" />
        <link rel="icon" href="/mylogo.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          おこづかい帳
        </h1>
        <table className={styles.grid}>
          <tr>
            <th>取引日付</th>
            <th>用途</th>
            <th>入金</th>
            <th>出金</th>
          </tr>
          <Transactions transactions={transactions} />
        </table>
      </main>
    </div>
  )
}

export default Home
