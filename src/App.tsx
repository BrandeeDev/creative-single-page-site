import React from 'react';
import Layout from "./UI/Layout";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Schedule from "./components/Schedule";
import ApproachList from "./components/approachs/approachList";
import BrandNaming from "./components/BrandNaming";
import Footer from "./components/Footer";


function App() {
    return (
        <Layout>
            <Header/>
            <Presentation/>
            <Schedule/>
            <ApproachList />
            <BrandNaming />
            <Footer />

        </Layout>
    );
}

export default App;
