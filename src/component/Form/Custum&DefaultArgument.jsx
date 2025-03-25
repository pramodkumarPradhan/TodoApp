export function Argument() {

    function insertclk(e,...product) {
        var [id, name, stock, place, rating] = product;
        alert(`Id:${id}\nName:${name}\nStock:${stock}\nPlace:${place}\nRating:${rating.rating}\nX-position:${e.clientX}\nClassName:${e.target.className}`)
    }

    return (
        <div className="container-fluid">
            <button onClick={((event) => insertclk(event,1, 'TV', true, ['Delhi', 'Hyd','Odisha'], { rating: 4.5 }))} className="btn btn-danger text-white mt-5 ms-5">Insert</button>
        </div>
    );

}





