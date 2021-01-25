import React from 'react';
import { GetServerSideProps } from 'next';
import api from '../product/api';
import { Product } from '../product/types';
import { Container, Box, Stack, Text } from '@chakra-ui/react';

interface Props {
  results: Product[];
}

const IndexPage: React.FC<Props> = ({ results }) => {
  console.log({ results });

  return (
    <Box centerContent padding={4}>
      <Stack width="100%" backgroundColor="white" borderRadius={2} boxShadow="sm" padding={4}>
        {results.map(product => <Stack key={product.id} direction="row">
          <Box
            backgroundColor="gray.50"
            backgroundImage={`url(${product.image})`}
            height={180}
            width={180}
          />
          <Stack>
            <Text>${product.price}</Text>
            <Text>{product.title}</Text>
          </Stack>
        </Stack>)}
      </Stack>
    </Box>
  )
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const results = await api.search((query.q as string));

  return {
    props: {
      results
    }
  };
};

export default IndexPage;