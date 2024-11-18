import { Achievement, Categories, Companies, Courses, CTA, Footer, Hero, Feedback, Navbar } from "../../Components/Home";

const HomePage = () => {

    return (
        <div className="overflow-hidden">
            <Navbar />
            <Hero />
            <Companies />
            <Courses />
            <Achievement />
            <Categories />
            <Feedback />
            <CTA />
            <Footer />
        </div>
    );
}

export default HomePage;