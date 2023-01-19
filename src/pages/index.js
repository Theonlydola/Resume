import Head from 'next/head'
import WaveBackground from '@/components/waveBackground/waveBackground'
import About from '@/components/About/About'
import { headLine, about, experience } from '../helpers/texts'
import Footer from '@/components/Footer/Footer'
import Experience from '@/components/Experience/Experience'
import { fetchRepos } from '@/helpers/fetchRepos'
import Projects from '@/components/Projects/Projects'
import { useEffect, useState } from 'react'
import Header from '@/components/Header/Header'

export async function getStaticProps({ }) {
  const repoList = await fetchRepos();
  return {
    props: {
      repoList
    },
  };
}

export default function Home({ repoList }) {
  const [top, setTop] = useState('0');

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setTop('0');
      } else {
        setTop('-100px');
      }
      prevScrollpos = currentScrollPos;
    }
  }, []);

  return (
    <>
      <Head>
        <title>Muhammed Adel</title>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.47.0/dist/full.css" rel="stylesheet" type="text/css" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
      </Head>
      
      <Header top={top} />

      <div className='flex flex-col'>
        <WaveBackground headLine={headLine} />
        <About about={about} />
        <Experience experience={experience} />
        <Projects repoList={repoList} />
      </div>

      <div className="tooltip fixed z-50 bottom-20 right-8 border-0 decoration-transparent w-12" data-tip={'Back to top'}>
        <a className='btn fixed z-50 bottom-8 right-8 border-0 decoration-transparent w-12' href='#top'> <i className="fa fa-solid fa-arrow-up" /> </a>
      </div>

      <Footer headLine={headLine}/>

    </>
  )
}
