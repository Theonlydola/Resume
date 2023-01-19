import styles from './About.module.css'
export default function About({ about }) {
    return (
        <>
            <div id='about' className={styles.container}>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src='/images/pp.jpg' className="max-w-xs rounded-full shadow-2xl sm:max-w-xs  hover:max-w-xs " />
                        <div className="ml-4 mr-4">
                            <div className='flex justify-start'>
                                <h1 className="text-4xl font-bold sm:text-6xl">{about.title}</h1>
                                <a
                                    className="btn btn-secondary lg:mt-4 sm:mt-1 ml-5 w-12"
                                    href={'#experience'}
                                    aria-label="go to experience"
                                    role="button"
                                >
                                    <i className='fa fa-arrow-down' />
                                </a>
                            </div>
                            <br />
                            <p className="font-sans text-xl text-justify py-3 sm:text-2xl"> Hi, This is me... Muhammed, but you can call me <span className='font-bold'> Dola</span>. </p>
                            <p className="font-sans text-xl text-justify py-3 sm:text-2xl">  {about.message2}</p>
                            <p className="font-sans text-xl text-justify py-3 sm:text-2xl">  {about.message3}</p>
                            <a
                                className="btn btn-primary mt-1"
                                href={'/Muhammed_Adel_CV.pdf'}
                                aria-label="Resume/CV"
                                role="button"
                            >
                                <span>
                                    Download Resume
                                </span>
                                <i className='fa fa-download ml-3' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}