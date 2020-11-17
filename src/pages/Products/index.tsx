import React, { useEffect, useMemo, useState } from 'react';

import InfoCards from '../../components/InfoCards';

import api from '../../services';
import { Container, Product, ProductCategory } from './style';

interface Products {
  id: number;
  name: string;
  code?: number;
  minimum_stock: number;
  category: {
    name: string;
  };
  formattedCategory: string;
  stock?: {
    actual_stock: number;
  };
  status: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    api.get<Products[]>('/item').then((response) => {
      const formattedProduct = response.data.map((product) => {
        return {
          ...product,
          formattedCategory: product.category.name,
        };
      });
      setProducts(formattedProduct);
    });
  }, []);

  const classifiedProductList = useMemo(() => {
    const productList = products.map((product) => {
      if (product.stock?.actual_stock) {
        if (product.minimum_stock > product.stock.actual_stock) {
          return { ...product, status: 'OK' };
        }
        if (product.minimum_stock === product.stock.actual_stock) {
          return { ...product, status: 'WARNING' };
        }
        return { ...product, status: 'DANGER' };
      }
      const noStock = { ...product.stock, actual_stock: 0 };
      return { ...product, stock: { ...noStock } };
    });

    return productList;
  }, [products]);

  const panosCategory = useMemo(() => {
    const productList = classifiedProductList.filter(
      (product) => product.formattedCategory === 'Panos'
    );
    return productList;
  }, [classifiedProductList]);

  const officeCategory = useMemo(() => {
    const productList = classifiedProductList.filter(
      (product) => product.formattedCategory === 'Material de Escritório'
    );
    return productList;
  }, [classifiedProductList]);

  return (
    <>
      <div>
        <InfoCards />
      </div>
      <ProductCategory>Panos</ProductCategory>
      <Container>
        {panosCategory &&
          panosCategory.map((product) => {
            return (
              <Product key={product.id} status={product.status}>
                <strong>
                  {product.name}
                  <span>{`[${product?.code}]`}</span>
                </strong>
                <div>
                  <p>
                    {`${product.stock?.actual_stock} / ${product.minimum_stock}`}
                  </p>
                </div>
              </Product>
            );
          })}
      </Container>

      <ProductCategory>Materiais de Escritório</ProductCategory>
      <Container>
        {officeCategory &&
          officeCategory.map((product) => {
            return (
              <Product key={product.id} status={product.status}>
                <strong>
                  {product.name}
                  <span>{`[${product?.code}]`}</span>
                </strong>
                <div>
                  <p>
                    {`${product.stock?.actual_stock} / ${product.minimum_stock}`}
                  </p>
                </div>
              </Product>
            );
          })}
      </Container>
    </>
  );
};

export default Products;
