import React, { useEffect, useMemo, useState } from 'react';

import { FiArrowUpCircle } from 'react-icons/fi';

import InfoCards from '../../components/InfoCards';
import Card from '../../components/Card';
import Loader from '../../components/Loader';

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

interface IStockStatus {
  outOfStock?: number;
  inStock?: number;
  minimunStock?: number;
  totalItems?: number;
  [key: string]: number | undefined;
}

enum ProductsFilterTypes {
  withStock = 'OK',
  outOfStock = 'DANGER',
  withMinimumStock = 'WARNING',
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [filteredProducts, setFileredProducts] = useState<Products[]>([]);
  const [stockStatus, setProductStatus] = useState<IStockStatus>({});
  const [productsFilter, setProductsFilters] = useState<string[]>([]);

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

  useEffect(() => {
    async function getStockStatus() {
      try {
        const { data } = await api.get<IStockStatus>('/item/inventory-status');
        setProductStatus(data);
      } catch (error) {
        throw new Error(error);
      }
    }
    getStockStatus();
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

  useEffect(() => {
    if (productsFilter.length) {
      const filteredProductsList = productsWithClassifiedStock.filter((prod) =>
        productsFilter.includes(prod.status)
      );
      setFileredProducts(filteredProductsList);
    } else {
      setFileredProducts(productsWithClassifiedStock);
    }
  }, [productsFilter, productsWithClassifiedStock]);

  const categoryzedProductList = useMemo(() => {
    const categorizedProducts = filteredProducts.reduce(
      (categoryzedProducts: Array<Products[]>, product) => {
        if (!categoryzedProducts[product.category_id]) {
          categoryzedProducts[product.category_id] = [product];
        } else {
          categoryzedProducts[product.category_id].push(product);
        }

        return categoryzedProducts;
      },
      []
    );
    return categorizedProducts;
  }, [filteredProducts]);

  function handleFilter(filter: string) {
    if (productsFilter.includes(filter)) {
      const filteredItems = productsFilter.filter(
        (filteredItem) => filteredItem !== filter
      );
      setProductsFilters([...filteredItems]);
    } else {
      setProductsFilters([...productsFilter, filter]);
    }
  }
  console.log(stockStatus);
  return (
    <>
      <InfoCards>
        {stockStatus && (
          <>
            <Card
              value={ProductsFilterTypes.withStock}
              filterProducts={handleFilter}
            >
              {Object.getOwnPropertyNames(stockStatus).length ? (
                <>
                  <div>
                    <p>Produtos com Estoque</p>
                    <strong>{`${stockStatus.inStock}/${stockStatus.totalItems}`}</strong>
                  </div>
                  <FiArrowUpCircle size={20} />
                </>
              ) : (
                <Loader />
              )}
            </Card>
            <Card
              value={ProductsFilterTypes.outOfStock}
              filterProducts={handleFilter}
            >
              {Object.getOwnPropertyNames(stockStatus).length ? (
                <>
                  <div>
                    <p>Produtos sem Estoque</p>
                    <strong>{`${stockStatus.outOfStock}/${stockStatus.totalItems}`}</strong>
                  </div>
                  <FiArrowUpCircle size={20} />
                </>
              ) : (
                <Loader />
              )}
            </Card>
            <Card
              value={ProductsFilterTypes.withMinimumStock}
              filterProducts={handleFilter}
            >
              {Object.getOwnPropertyNames(stockStatus).length ? (
                <>
                  <div>
                    <p>Produtos com Estoque Mínimo</p>
                    <strong>{`${stockStatus.minimunStock}/${stockStatus.totalItems}`}</strong>
                  </div>
                  <FiArrowUpCircle size={20} />
                </>
              ) : (
                <Loader />
              )}
            </Card>
          </>
        )}
      </InfoCards>

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
