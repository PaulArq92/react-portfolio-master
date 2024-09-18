import styles from './App.module.css';
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {HomePage} from "./components/HomePage/HomePage.jsx";
import {About} from "./components/About/About.jsx";
import {Footer} from "./components/Contact/Footer.jsx";
import {LanguageProvider} from "./LanguageContext.jsx";
import {SkillsCarousel} from "./components/Experience/SkillsCarousel.jsx";
import {Timeline} from "./components/Experience/Timeline.jsx";
import {Others} from "./components/Others/Others.jsx";
import {ContactSection} from "./components/Contact/ContactSection.jsx";

function App() {
    return (
        <LanguageProvider>
            <div className={styles.App}>
                <Navbar/>
                <HomePage/>
                <SkillsCarousel />
                <About/>
                <Timeline />
                <Others />
                <ContactSection />
                <Footer/>
            </div>
        </LanguageProvider>
    )
}

export default App
