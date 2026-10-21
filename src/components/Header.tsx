import styles from "./Header.module.css"
import type {Theme} from "../type.ts";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";


interface HeaderProps {
    theme: Theme;
    onToggleTheme?: () => void;
}

const MENUS = [
    { id: "intro", label: "HOME"},
    { id: "projects", label: "WORK"},
    { id: "skills", label: "ABOUT"},
    { id: "contact", label: "CONTACT"}
] as const;
function Header({ theme, onToggleTheme }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);
    return (
        <header className={`${styles.header} ${isScrolled || isOpen ? styles.scrolled : ""}`}>
            <a href="#intro" className={styles.logo} onClick={closeMenu}>
                EverCindy
            </a>
            <div className={styles.actions}>
                <button
                    type="button"
                    className={styles.themeBtn}
                    aria-label={theme === "light" ? "다크 모드로 전환" : "라이트 모드로 전환"}
                    onClick={onToggleTheme}
                >
                    {theme === "light" ? (<FiMoon size={24} />) : (<FiSun size={24} />)}
                </button>

                <button
                    type="button"
                    className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
                    aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
                    aria-expanded={isOpen}
                    aria-controls="nav"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
            <nav id="nav" className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
                <ul>
                    {MENUS.map(({id, label}) => (
                        <li key={id}>
                            <a href={`#${id}`} onClick={closeMenu}>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
