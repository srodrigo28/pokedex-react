export function Pokedex1() {
    return (
        <div className="card-container">
            <div className="box-code bg-grass">
                <span className="text-code">#0001</span>
            </div>
            <img src="./image/bulbasaur.png" alt="" />
            <div className="box-type">
                <span className="text-type bg-grass">Grass</span>
                <span className="text-type bg-poison">Poison</span>
            </div>
            <div className="box-name bg-grass">
                <span className="text-name">Bulbasaur</span>
            </div>
        </div>
    )
}