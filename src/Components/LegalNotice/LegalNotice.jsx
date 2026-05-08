import styles from "./LegalNotice.module.css";

const LegalNotice = () => {
    return (
        <main className={styles.page}>
            <section className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Aviso Legal</h1>

                    <div className={styles.content}>
                        <section className={styles.block}>
                            <h2 className={styles.heading}>1. Datos identificativos</h2>
                            <p className={styles.text}>
                                En cumplimiento de la normativa vigente, se informa que este
                                sitio web es propiedad de:
                            </p>
                            <div className={styles.meta}>
                                <p><strong>Titular:</strong> Anna Afanaseva</p>
                                <p><strong>NIF/NIE:</strong> Z2331***Y</p>
                                <p><strong>Domicilio:</strong> calle Miguel Angel Blanco 62 5A, Oviedo</p>
                                <p>
                                    <strong>Correo electrónico:</strong>{" "}
                                    <a href="mailto:annaoffbesp@gmail.com">annaoffbesp@gmail.com</a>
                                </p>
                                <p><strong>WhatsApp:</strong> +34641189316</p>
                                <p><strong>Telegram:</strong> @annaF_B</p>
                            </div>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>2. Objeto</h2>
                            <p className={styles.text}>
                                El presente sitio web tiene como finalidad ofrecer información
                                sobre clases de Método Feldenkrais y permitir el contacto con
                                personas interesadas.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>3. Condiciones de uso</h2>
                            <p className={styles.text}>
                                El acceso y uso del sitio web atribuye la condición de usuario e
                                implica la aceptación de las condiciones aquí establecidas.
                            </p>
                            <p className={styles.text}>
                                El usuario se compromete a utilizar el sitio web de forma lícita
                                y sin causar perjuicios.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>4. Propiedad intelectual</h2>
                            <p className={styles.text}>
                                Todos los contenidos del sitio web (textos, imágenes, etc.) son
                                propiedad del titular o se utilizan con autorización, y no pueden
                                ser reproducidos sin permiso.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>5. Responsabilidad</h2>
                            <ul className={styles.list}>
                                <li>El uso indebido del contenido del sitio web por parte de los usuarios</li>
                                <li>Posibles errores técnicos o interrupciones del servicio</li>
                                <li>Contenidos de enlaces externos, sobre los cuales no tiene control</li>
                            </ul>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>6. Enlaces</h2>
                            <p className={styles.text}>
                                Este sitio web puede contener enlaces a páginas externas. El
                                titular no se responsabiliza del contenido ni de las políticas de
                                dichos sitios.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>7. Protección de datos</h2>
                            <p className={styles.text}>
                                Los datos personales recogidos a través de este sitio web se
                                tratarán conforme a la Política de Privacidad.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>8. Modificaciones</h2>
                            <p className={styles.text}>
                                El titular se reserva el derecho de modificar el contenido del
                                sitio web sin previo aviso.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>9. Legislación aplicable</h2>
                            <p className={styles.text}>
                                La relación entre el usuario y el titular se regirá por la
                                legislación española.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LegalNotice;