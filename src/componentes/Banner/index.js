import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minhaFoto.jpg'


export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Hello World
                </h1>

                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou o Nvutu Eladio, estudante de Front-end. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido} 
                    src={circuloColorido}
                    aria-hidden={true} 
                    alt='foto'
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto do Nvutu Eladio'
                />
            </div>

        </div>
    )
}