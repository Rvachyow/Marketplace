import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Layout } from "../components/Layout/Layout";
import { Main } from "../paiges/Main/Main";

export const Marketplace = () => {
  return <Layout header={<Header/>} footer={<Footer/>}>
    <Main></Main>
  </Layout>;
};