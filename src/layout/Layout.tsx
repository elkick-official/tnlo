import { Outlet, useNavigate } from "react-router-dom";
import { TNSidebar } from "../components";
import { Layout } from "antd";
import { useEffect } from "react";
const { Content } = Layout;

const LayoutMain = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("_token");
    if (!token) {
      navigate("/login");
    }
  }, []);

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
