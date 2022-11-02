import React from 'react';
import { useRouter } from 'next/router';

const ProdictId = () => {
  const { query } = useRouter();

  return <div>ProdictId: {query.productId}</div>;
};

export default ProdictId;
