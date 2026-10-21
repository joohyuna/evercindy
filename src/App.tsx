import { useEffect, useState } from "react";
import type { Theme } from "./type.ts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/section/Intro.tsx";
import Projects from "./components/section/Projects.tsx";
import Skills from "./components/section/Skills.tsx";
import Contact from "./components/section/Contact.tsx";
import styles from "./App.module.css";




function App() {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <>
            <Header theme={theme} onToggleTheme={toggleTheme} />
            <main className={styles.main}>
                <Intro />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
