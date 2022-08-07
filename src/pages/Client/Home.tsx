import { RightOutlined } from "@ant-design/icons";
import { Col, Layout, Menu, Rate, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { listCategory } from "../../api/categorys";
import { listProduct } from "../../api/product";
import Banner from "../../components/Banner/Banner";
import { CateType } from "../../types/CategoryType";
import { ProductType } from "../../types/ProductType";

type Props = {};

const Home = (props: Props) => {
  const [category, setCategory] = useState<CateType[]>([]);
  const [product, setProduct] = useState<ProductType[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await listCategory();
      setCategory(data);
      console.log(data);
    };
    const getProduct = async () => {
      const { data } = await listProduct();
      setProduct(data);
    };
    getProduct();
    getCategories();
  }, []);

  const categoryMenu = category.map((item) => ({
    key: item.id as string,
    label: item.name,
    icon: <RightOutlined />,
  }));
  console.log(categoryMenu);

  return (
    <Container>
      <BannerAndCategory>
        <Category>
          <MenuC items={categoryMenu} />
        </Category>
        <Content>
          <Banner />
        </Content>
      </BannerAndCategory>

      <ProductContent>
        <Row gutter={[8, 16]}>
          {product.map((item, index) => {
            return (
              <Col span={6}>
                <div className="img-product">
                  <img src={item.img} alt="" width="190px" />
                </div>
                <div className="main-product">
                  <div className="name-product">
                    <NavLink to={`/products/${item.id}`}>
                      <h4 className="title-product">{item.name}</h4>
                    </NavLink>
                  </div>
                  <div className="price-product">
                    <p className="price-product-saleOffPrice">
                      <span>
                        {item.saleOffPrice.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span>
                    </p>
                    <p className="price-product-originalPrice">
                      <span>
                        {item.originalPrice.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span>
                    </p>
                  </div>
                  <div className="brief-product">
                  <p className="brief-product-content">{item.brief}</p>
                  </div>
                  <div>
                  <Rate
                      disabled
                      defaultValue={Math.floor(Math.random() * 6) + 1}
                    />
                  </div>
                </div>
                
              </Col>

              
            );
          })}
        </Row>
        <div>
        <Titlee>Danh mục sản phẩm</Titlee>

        <Row
          style={{
            padding: "30px",
            position: "relative",
            marginBottom: "50px",
          }}
          gutter={16}
        >
          {category.map((item, index) => {
            return (
              <ItemCategory
                key={index}
                span={3}
                color={(Math.floor(Math.random() * 16777215) + 1).toString(16)}
              >
                {item.name}
                <ImgCategory>
                  {/* <img src={item.img} alt="" /> */}
                </ImgCategory>
              </ItemCategory>
            );
          })}
        </Row>
      </div>
      </ProductContent>
    </Container>
  );
};
const Container = styled.div`
  margin: 20px 200px;
`;
const BannerAndCategory = styled(Layout)`
  /* margin: 20px 290px; */
`;
const Category = styled(Layout.Sider)`
  background-color: #fff;
`;
const MenuC = styled(Menu)`
  .ant-menu-item {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    padding-left: 0;
    color: #343a40;
  }
`;
const ProductContent = styled(Layout.Content)`
  margin-top: 72px;
  width: 1200px;
  

  .img-product {
    text-align: center;
  }
  .title-product {
    margin: 10px 0;
  }
  .price-product-saleOffPrice{
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    margin-right: 8px;
    color: #d70018;
    display: inline-block;
  }
  .price-product-originalPrice{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: inline-block;
    color: #707070;
  }
  .brief-product-content{
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #444444;
  }
  .brief-product{
    width: 100%;
    height: 66px;
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    border-radius: 5px;
    padding: 6px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
  }
`;
const Titlee = styled.h2`
  font-style: normal;

  font-weight: 400;

  line-height: 40px;
  color: #444444;
`;
const ItemCategory = styled(Col)`
  width: 111px;
  height: 145px;
  margin: 0 10px;
  background-color: ${(props) => "#" + props.color};
  border-radius: 15px;
  padding: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;
const ImgCategory = styled.div`
  position: absolute;
  right: 14px;
  bottom: 10px;
`;
export default Home;
