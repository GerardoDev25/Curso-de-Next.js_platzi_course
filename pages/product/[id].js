import React from 'react';
import { useRouter } from 'next/router';

const ProdictId = () => {
  const { query } = useRouter();

  return <div>ProdictId: {query.id}</div>;
};

export default ProdictId;