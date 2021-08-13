import Hotel from "./Hotel/Hotel";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Imageslider from "./Imageslider/Imageslider";

const { Header, Content, Footer } = Layout;

const Homepage = () => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={["1"]}>
          <Menu.Item key='1'>nav 1</Menu.Item>
          <Menu.Item key='2'>
            <Link to='/form'>Form </Link>
          </Menu.Item>
          <Menu.Item key='3'>nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content
        className='site-layout'
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className='site-layout-background'
          style={{ padding: 24, minHeight: 380 }}
        >
          <Imageslider />
        </div>
      </Content>
      <Content
        className='site-layout'
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className='site-layout-background'
          style={{ padding: 24, minHeight: 380 }}
        >
          <Hotel />
        </div>
      </Content>
      <Footer style={{ textAlign: "right" }}>Made By Dhairya Talsania</Footer>
    </Layout>
  );
};

export default Homepage;
