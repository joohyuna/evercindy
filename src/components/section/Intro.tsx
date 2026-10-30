import styles from "./Intro.module.css"
import dogImg from "../../assets/images/main/cindy_img.png"

function Intro() {
    return (
        <section id="intro" className={styles.intro}>
            <div className={styles.inner}>
                <div className={styles.visual}>
                    <span className={styles.imageRound}>
                        <img
                            src={dogImg}
                            alt="EverCindy의 강아지 일러스트"
                            className={styles.img}
                        />
                    </span>
                </div>
                <h1 className={styles.title}>EverCindy</h1>
                <p className={styles.desc}>디자인을 이해하는 프론트엔드 개발자</p>

                { /* <div className={styles.buttons}>
                    <a href="#project" className={styles.primary}>
                        작업보기
                    </a>
                    <a href="#contact" className={styles.secondary}>
                        연락하기
                    </a>
                </div> */}
            </div>
        </section>
    );
}

export default Intro;