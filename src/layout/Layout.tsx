import { Outlet } from "react-router-dom";
import { TNSidebar } from "../components";
import { Layout } from "antd";
const { Content } = Layout;

const LayoutMain = () => {
  return (
    <section>
      <Layout style={{ minHeight: "100vh" }}>
        <TNSidebar />
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

export default LayoutMain;
