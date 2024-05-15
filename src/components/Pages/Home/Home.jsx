import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FaqSection from "./FaqSection";
import Feature from "./Feature";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>E-Group Study - HOME</title>
            </Helmet>
            <Banner></Banner>
            <Feature></Feature>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;