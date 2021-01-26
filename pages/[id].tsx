import React from 'react';
import { GetServerSideProps } from 'next';
import api from '../product/api';
import { Product } from '../product/types';
import { Box, Stack, Text, Image, Button } from '@chakra-ui/react';

interface Props {
  result: Product;
}

const IndexPage: React.FC<Props> = ({ result }) => {
  console.log({ result });

  return (
    <Box padding={4}>
      <Stack width="100%" backgroundColor="white" borderRadius={2} boxShadow="sm" padding={4}>
        <Stack justifyContent="space-between" direction={{ base: "column", sm: "row" }}>
          <Image src={result.image} height={256} width={256} />
          <Stack maxWidth="320">
            <Text color="gray.500" fontSize="sm">
              Estado - Vendido
            </Text>
            <Text fontSize="2xl" fontWeight="bold">
              {result.title}
            </Text>
            <Text fontSize="4xl">
              {result.price.toLocaleString("es-Ar", { style: "currency", currency: "ARS" })}
            </Text>
            <Button colorScheme="blue">Comprar</Button>
          </Stack>
        </Stack>
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