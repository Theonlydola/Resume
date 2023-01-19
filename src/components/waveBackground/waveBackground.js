import styles from './waveBackground.module.css'
import React from 'react';
export default function WaveBackground({ headLine }) {
    return (
        <>
            <div id='top' className={styles.header}>
                <div className={styles.cloudsHeader}>
                    <div className={styles.x2}>
                        <div className={styles.cloud}></div>
                    </div>
                    <div className={styles.x3}>
                        <div className={styles.cloud}></div>
                    </div>
                    <div className={styles.x2}>
                        <div className={styles.cloud}></div>
                    </div>
                </div>
                <div className={styles.innerHeader}>
                    <div className="hero min-h-screen">
                        <div className="hero-content text-center">
                            <div className={`max-w-lg ${styles.moving}`}>
                                <h5 className={`text-4xl font-bold sm:text-6xl`}>{headLine.firstName} {headLine.lastName}</h5>
                                <br />
                                <p className="text-2xl font-bold sm:text-3xl">{headLine.message}</p>
                                <br />
                                <div className="max-w-lg">
                                    {headLine.icons?.map((icon, index) => (
                                         (index !== 2 && index !== 1) && <a
                                            key={`social-icon-${index}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={icon.url}
                                            aria-label={`My ${icon.image.split("-")[1]}`}
                                        >
                                            <i className={`fab ${icon.image}  fa-3x socialicons ${styles.icons} hover:text-stone-300`} />
                                        </a>
                                    ))}

                                </div>
                                <br />
                                <a
                                    className="btn btn-secondary"
                                    href='#about'
                                    aria-label="about"
                                    role="button">
                                    About
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <svg className={styles.waves} style={{ height: '15vh', bottom: '-10vh' }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className={styles.parallax}>
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>

            </div>
        </>

    )
}