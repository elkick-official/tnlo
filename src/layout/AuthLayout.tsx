import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
const {Content} = Layout;

const AuthLayout = () => {
  return (
    <section>
      <Layout style={{ minHeight: '100vh' }}>

     
      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} >asdas</Header> */}
        <Content>
          <Outlet />
        </Content>
      
      </Layout>
      </Layout>
    </section>
  );
};

export default AuthLayout;
