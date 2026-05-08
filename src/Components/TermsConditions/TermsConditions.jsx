import styles from "./TermsConditions.module.css";

const TermsConditions = () => {
    return (
        <main className={styles.page}>
            <section className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Términos y Condiciones</h1>

                    <div className={styles.content}>
                        <section className={styles.block}>
                            <h2 className={styles.heading}>1. Objeto</h2>
                            <p className={styles.text}>
                                Los presentes términos regulan la participación en clases de
                                Método Feldenkrais ofrecidas por el titular.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>2. Naturaleza del servicio</h2>
                            <p className={styles.text}>
                                Las clases tienen carácter educativo y de bienestar. No
                                constituyen un tratamiento médico ni sustituyen la atención
                                sanitaria profesional.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>3. Modalidades de participación</h2>
                            <p className={styles.text}>Se ofrecen las siguientes modalidades:</p>
                            <ul className={styles.list}>
                                <li>Clases sueltas</li>
                                <li>Bonos o abonos de varias sesiones</li>
                            </ul>
                            <p className={styles.text}>
                                Las condiciones específicas (precio, duración, número de
                                sesiones) se comunicarán previamente.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>4. Inscripción</h2>
                            <p className={styles.text}>
                                La participación en las clases requiere inscripción previa y
                                confirmación por parte del titular.
                            </p>
                            <p className={styles.text}>
                                La inscripción o participación en las clases implica la
                                aceptación de los presentes Términos y Condiciones.
                            </p>
                            <p className={styles.text}>
                                La participación de menores de edad requerirá la autorización de
                                sus padres o tutores legales.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>5. Forma de pago</h2>
                            <p className={styles.text}>
                                El pago se realiza de forma presencial o mediante transferencia
                                bancaria, según se acuerde previamente.
                            </p>
                            <p className={styles.text}>
                                No se realizan pagos a través del sitio web.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>6. Cancelaciones y cambios</h2>
                            <p className={styles.text}>
                                Las condiciones de cancelación y cambio se comunicarán
                                previamente y podrán adaptarse de forma individual.
                            </p>
                            <p className={styles.text}>
                                En caso de no asistencia sin aviso previo, la sesión podrá
                                considerarse realizada dentro de un bono o abono.
                            </p>
                            <p className={styles.text}>
                                El titular se reserva el derecho de cancelar o reprogramar una
                                clase por causas justificadas, ofreciendo alternativa o
                                compensación.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>7. Validez de bonos</h2>
                            <p className={styles.text}>
                                La validez de los bonos será informada en el momento de la compra
                                y no será indefinida.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>8. Responsabilidad del participante</h2>
                            <p className={styles.text}>El participante declara:</p>
                            <ul className={styles.list}>
                                <li>Que se encuentra en condiciones físicas adecuadas para realizar la actividad</li>
                                <li>Que informará al titular de cualquier condición relevante (lesiones, dolencias, etc.)</li>
                            </ul>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>9. Responsabilidad</h2>
                            <p className={styles.text}>
                                El titular no se hace responsable de posibles lesiones derivadas
                                de un uso inadecuado de las indicaciones o de la omisión de
                                información relevante por parte del participante.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>10. Modificaciones</h2>
                            <p className={styles.text}>
                                El titular se reserva el derecho de modificar horarios,
                                condiciones o precios, informando previamente a los participantes.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>11. Legislación aplicable</h2>
                            <p className={styles.text}>
                                Estos términos se rigen por la legislación española.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>12. Protección de datos</h2>
                            <p className={styles.text}>
                                Los datos personales facilitados se tratarán conforme a la
                                Política de Privacidad del sitio web.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TermsConditions;