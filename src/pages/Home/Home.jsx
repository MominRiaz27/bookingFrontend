import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar.jsx"
import Header from "../../components/header/Header.jsx"
import Featured from "../../components/featured/featured.jsx"
import PropertyList from "../../components/propertylist/propertylist.jsx"
import FeaturedProperties from "../../components/featuredproperties/featuredproperties.jsx"
import MailList from "../../components/mailList/maillist.jsx"
import Footer from "../../components/footer/footer.jsx"

const Home=()=>{
    return(
        <div>
            <Navbar />
            <Header />
            <div className="HomeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Home Guests Love</h1>
                <FeaturedProperties />
                <MailList/>
                <Footer/>
            </div>
        </div>
    );
};
export default Home;