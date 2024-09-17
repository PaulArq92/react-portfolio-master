import styles from './App.module.css';
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Hero} from "./components/Hero/Hero.jsx";
import {About} from "./components/About/About.jsx";
import {Experience} from "./components/Experience/Experience.jsx";
import {Projects} from "./components/Projects/Projects.jsx";
import {Contact} from "./components/Contact/Contact.jsx";
import {LanguageProvider} from "./LanguageContext.jsx";
import {Academic} from "./components/Academic/Academic.jsx";
import {SkillsCarousel} from "./components/Experience/SkillsCarousel.jsx";
import {Timeline} from "./components/Experience/Timeline.jsx";
import {LanguagesAndHobbies} from "./components/Others/LanguagesAndHobbies.jsx";

function App() {
    return (
        <LanguageProvider>
            <div className={styles.App}>
                <Navbar/>
                <Hero/>
                <SkillsCarousel />
                <About/>
                <Timeline />
                <LanguagesAndHobbies />
                <Contact/>
            </div>
        </LanguageProvider>
    )
}

export default App
