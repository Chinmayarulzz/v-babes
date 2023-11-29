export default function Tile() {
    return (
        <div className="tile-container">
            <div>
                <h2>Video Player</h2>
                <video controls src={"/Toftee.mp4"} style={{ width: "90vw", height: "75vh" }}/>
            </div>
        </div>
    );
}