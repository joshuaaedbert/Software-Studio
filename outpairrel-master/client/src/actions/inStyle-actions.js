export const update = (newProduct) => {
  return {
    type: 'UPDATE',
    payload: newProduct
  };
};
