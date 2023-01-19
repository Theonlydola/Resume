export default function Header({top}) {
    return (
        <div className="navbar bg-transparent float-top fixed z-40" style={{ top: top }}>
            <a className='btn btn-ghost' href='#top'> <i className="fa fa-sharp fa-solid fa-code" /> </a>
            <a className="btn btn-ghost normal-case text-xl" href='#about'> About </a>
            <a className="btn btn-ghost normal-case text-xl" href='#experience'> Experience </a>
            <a className="btn btn-ghost normal-case text-xl" href='#projects'> Projects </a>
        </div>
    )
}