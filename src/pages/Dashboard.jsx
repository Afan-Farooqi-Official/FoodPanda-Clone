import Hero from "../components/Hero";
import Header from "../components/Header";
import Banner from '../components/Banner'
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

const Dashboard = () => {
    return(
        <div>
            <Header />
            <Hero />
            <Banner />
            <Pagination />
            <Footer />
        </div>
    )    
}

export default Dashboard;