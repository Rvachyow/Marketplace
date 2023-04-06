import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Layout } from "../components/Layout/Layout";
import { FullCard } from "../paiges/FullCard/FullCard";
import { Main } from "../paiges/Main/Main";
import { Route, Routes } from "react-router-dom";

export const Marketplace = () => {
  return <Layout header={<Header/>} footer={<Footer/>}>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/fullcard" element={<FullCard/>}/>
    </Routes>
  </Layout>;
};