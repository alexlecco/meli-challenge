import React from 'react';
import { GetServerSideProps } from 'next';
import api from '../product/api';
import { Product } from '../product/types';
import { Box, Stack, Text } from '@chakra-ui/react';

interface Props {
  result: Product;
}

const IndexPage: React.FC<Props> = ({ result }) => {
  console.log({ result });

  return (
    <Box padding={4}>
      <Stack width="100%" backgroundColor="white" borderRadius={2} boxShadow="sm" padding={4}>
        <Text>Product</Text>
      </Stack>
    </Box>
  )
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const result = await api.fetch((query.id as string));

  return {
    props: {
      result,
    }
  };
};

export default IndexPage;