import Image from "next/image"
export default function Experience({ experience }) {
    return (
        <div id="experience" className="flex-col justify-center container lg:flex-row">
            <div className="flex justify-start items-center">
                <h1 className="text-4xl font-bold p-5 pb-6 sm:text-6xl">{experience.title}</h1>
                <a
                    className="btn btn-secondary ml-5 w-12"
                    href={'#projects'}
                    aria-label="go to projects"
                    role="button"
                >
                    <i className='fa fa-arrow-down' />
                </a>
            </div>
            <div className="lg:px-20 sm:px-15">
                {experience.experience.map((e, index) => (
                    <div key={index} className="flex min-w-full shadow-xl mb-5 p-5 bg-base-100 rounded-lg  justify-start flex-col lg:flex-row">
                        <div className="lg:rounded-lg sm:rounded-lg lg:shadow-xl bg-base-100 sm:w-72 sm:shadow-none">
                            <figure><Image width={144} height={144} className="min-w-full rounded-lg" src={`/Resume${e.imageSrc}`} alt={e.company} /></figure>
                            <h2 className="font-bold m-4 p-5 text-3xl justify-center flex">{e.company}</h2>
                        </div>

                        <div className="ml-5">
                            <div className="lg:p-5 sm:p-3 font-sans font-bold text-2xl">
                                <p>{e.role}</p>
                                <p> {e.startDate} - {e.endDate}</p>
                            </div >
                            <p className="p-5 font-sans text-xl">Description</p>
                            <ul>
                                {e.description.map((point, index) => (
                                    <li key={index} className="font-sans pl-5 p-2 lg:text-lg sm:text-md">
                                        - {point}
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </div>


                ))
                }
            </div>


        </div>
    )
}
