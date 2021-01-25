import React from 'react'
import { GetServerSideProps } from 'next'
import api from '../product/api';
import { Product } from '../product/types'

interface Props {
  results: Product[]
}

const IndexPage: React.FC<Props> = ({ results }) => {
  console.log({ results })

  return <div> Hello Twitch </div>
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const results = await api.search(query.q as string);

  return {
    props: {
      results,
    },
  };
};

export default IndexPage