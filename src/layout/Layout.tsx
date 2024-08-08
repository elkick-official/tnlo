import { Layout } from "antd";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { TNSidebar } from "../components";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { getUserById } from "../api";
import useDetailStore from "../store/useStore";
import { isTokenExpired } from "../utils/AxiosApi/AxiosApiService";
const { Content } = Layout;

const LayoutMain = () => {
  const { setUserDetails, clearUserDetails } = useDetailStore();
  const navigate = useNavigate();

  const decodeToken = async (token: string) => {
    try {
      const decoded = jwtDecode(token);
      if (isTokenExpired(token)) {
        localStorage.removeItem("_token");
        navigate("/login");
        clearUserDetails();
        return;
      }

      if (decoded?.id) {
        const userDetailsResponse = await getUserById(decoded?.id, token);
        setUserDetails(userDetailsResponse);
      }
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("_token");
    if (token) decodeToken(token);
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
