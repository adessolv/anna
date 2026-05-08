import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
    return (
        <main className={styles.page}>
            <section className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Política de Privacidad</h1>

                    <div className={styles.content}>
                        <section className={styles.block}>
                            <h2 className={styles.heading}>1. Responsable del tratamiento</h2>
                            <div className={styles.meta}>
                                <p><strong>Titular:</strong> Anna Afanaseva</p>
                                <p><strong>NIF/NIE:</strong> Z2331***Y</p>
                                <p><strong>Domicilio:</strong> calle Miguel Angel Blanco 62 5A, Oviedo</p>
                                <p>
                                    <strong>Correo electrónico:</strong>{" "}
                                    <a href="mailto:annaoffbesp@gmail.com">annaoffbesp@gmail.com</a>
                                </p>
                            </div>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>2. Datos personales recogidos</h2>
                            <p className={styles.text}>
                                Se podrán recoger los siguientes datos personales:
                            </p>
                            <ul className={styles.list}>
                                <li>Nombre</li>
                                <li>Dirección de correo electrónico</li>
                                <li>Número de teléfono</li>
                                <li>Cualquier otra información que el usuario facilite voluntariamente</li>
                            </ul>
                            <p className={styles.text}>
                                Los datos se recogen a través de formularios de contacto
                                disponibles en el sitio web.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>3. Finalidad del tratamiento de datos</h2>
                            <p className={styles.text}>
                                Los datos personales facilitados serán utilizados para:
                            </p>
                            <ul className={styles.list}>
                                <li>Gestionar solicitudes de información</li>
                                <li>Organizar y gestionar la participación en clases de Método Feldenkrais</li>
                                <li>Contactar con el usuario en relación con los servicios ofrecidos</li>
                                <li>Cumplir con obligaciones legales aplicables</li>
                            </ul>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>4. Base legal</h2>
                            <p className={styles.text}>
                                El tratamiento de los datos se basa en:
                            </p>
                            <ul className={styles.list}>
                                <li>El consentimiento del usuario</li>
                                <li>La ejecución de una relación contractual (en caso de inscripción en clases)</li>
                            </ul>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>5. Conservación de datos</h2>
                            <p className={styles.text}>
                                Los datos se conservarán mientras se mantenga la relación con el
                                usuario y durante los plazos necesarios para cumplir con las
                                obligaciones legales.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>6. Destinatarios</h2>
                            <p className={styles.text}>
                                Los datos no se cederán a terceros, salvo obligación legal o
                                cuando sea necesario para la prestación del servicio (por
                                ejemplo, herramientas de gestión o comunicación).
                            </p>
                            <p className={styles.text}>
                                No se prevén transferencias internacionales de datos.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>7. Derechos del usuario</h2>
                            <p className={styles.text}>
                                El usuario puede ejercer sus derechos de:
                            </p>
                            <ul className={styles.list}>
                                <li>Acceso</li>
                                <li>Rectificación</li>
                                <li>Supresión</li>
                                <li>Limitación</li>
                                <li>Oposición</li>
                            </ul>
                            <p className={styles.text}>
                                Enviando una solicitud a:{" "}
                                <a
                                    href="mailto:annaoffbesp@gmail.com"
                                    className={styles.inlineLink}
                                >
                                    annaoffbesp@gmail.com
                                </a>
                            </p>
                            <p className={styles.text}>
                                El usuario tiene derecho a presentar una reclamación ante la
                                Agencia Española de Protección de Datos (AEPD).
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>8. Carácter obligatorio de los datos</h2>
                            <p className={styles.text}>
                                El suministro de los datos es voluntario, pero necesario para
                                poder responder a las solicitudes del usuario.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>9. Seguridad</h2>
                            <p className={styles.text}>
                                Se aplican medidas técnicas y organizativas adecuadas para
                                garantizar la seguridad de los datos personales.
                            </p>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.heading}>10. Cambios en la política</h2>
                            <p className={styles.text}>
                                Esta política puede ser actualizada en cualquier momento para
                                adaptarse a cambios normativos o en el servicio.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicy;