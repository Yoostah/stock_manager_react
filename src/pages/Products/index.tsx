import React, { useCallback, useEffect, useMemo, useState } from 'react';

import InfoCards from '../../components/InfoCards';

import api from '../../services';
import { Container, Product, ProductCategory } from './style';

interface Products {
  [key: number]: number;
  id: number;
  name: string;
  code?: number;
  minimum_stock: number;
  category_id: number;
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

  const productsWithClassifiedStock = useMemo(() => {
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

  const categoryzedProductList = useMemo(() => {
    const categorizedProducts = productsWithClassifiedStock.reduce(
      (map: Array<Products[]>, obj) => {
        if (!map[obj.category_id]) {
          map[obj.category_id] = [obj];
        } else {
          map[obj.category_id].push(obj);
        }

        return map;
      },
      []
    );
    return categorizedProducts;
  }, [productsWithClassifiedStock]);

  return (
    <>
      <div>
        <InfoCards />
      </div>

      {categoryzedProductList.map((category) => {
        return (
          <div key={category[0].category_id}>
            <ProductCategory>{category[0].formattedCategory}</ProductCategory>
            <Container>
              {category.map((product) => {
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
          </div>
        );
      })}
    </>
  );
};

export default Products;
