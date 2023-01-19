export default function Footer({ headLine }) {
    return <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded relative bottom-0">
        <div className="grid grid-flow-col gap-4">
            <a className="link link-hover" href='#about' aria-label="about" role="link"> About </a>
            <a className="link link-hover" href='mailto:muhammeddadel@gmail.com'>Contact</a>
        </div>
        <p className="text-5xl"> That was it!</p>
        <p className="text-2xl"> {`It ain't much but, It's honest work!`}</p>
        <p className="text-lg"> If you liked what you saw and you know of any positions available, <br /> Please contact me as I am actively searching!</p>
        <div className="max-w-lg flex">
            {headLine.icons?.map((icon, index) => (
                <a
                    key={`social-icon-${index}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={icon.url}
                    aria-label={`My ${icon.image.split("-")[1]}`}
                >
                    <i className={`${icon.image}  fa-4x hover:text-sky-300`} />
                </a>
            ))}
        </div>
        
        <div>
            <p className="font-bold">This was created using NextJS & TailWindCSS.</p>
            <p className="font-bold">Project code is open source. Feel free to fork and make your own version.</p>
            <p className="font-bold">Credits to <a
                className="badge badge-dark"
                rel="noopener"
                href="https://github.com/Hassan-Elseoudy"
                aria-label="My GitHub"
            >
                Hassan Elseoudy
            </a>{' '}
                as this resume was inspired by him.
            </p>
        </div>
    </footer>
} 