export function Navbar(Props) {
    return (
        <nav className={`d-flex justify-content-between  border mt-4 p-3 mb-3  border-1 ${Props.Theme}`}>
            <div>
                <span className="fs-2 fst-bold">{Props.BrandTitle}</span>
            </div>
            <div>
                {
                    Props.Toggles.map(item =>
                        <span key={item} className="m-2">{item}</span>
                    )
                }
            </div>
            <div className={`${Props.Navstyl}`}>
                <button className={`${Props.Btnstyl}`}>sign in</button>
            </div>
        </nav>
    );
}