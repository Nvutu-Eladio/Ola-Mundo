import styles from "./SobreMim.module.css"
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/minhaFoto.jpg"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
            >
                <h3 className={styles.subtitulo}>
                    Olá, eu sou o Nvutu Eladio
                </h3>

                <img 
                   src={fotoSobreMim} 
                   alt="foto sobre mim"
                   className={styles.fotoSobreMim}
                />

                <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de Front-end  e estou feliz de te ver por aqui.
                </p>
                <p className={styles.paragrafo}>
                Minha história com programação começou no Instituto Médio de Economia de Luanda (IMEL), quando fiz o ensino médio integrado ao curso de Informática de gestão. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Javascript, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
                </p>
                <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar Sistemas de informação na Faculdade Anhanguera Educacional - OSASCO. Lá eu tive a oportunidade de estudar desenvolvimento web para ser um dos mantededores do site deles. 
                </p>
        </PostModelo>
     
    )
}