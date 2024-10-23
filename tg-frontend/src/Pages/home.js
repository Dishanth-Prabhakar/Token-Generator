import React from "react";


function Home() {
    return (
        <div>
            <h2>Token Generator Application</h2>
            <form>
                <div>
                    <label>Number of blue tokens: </label>
                    <input type='number'></input>
                </div>
                <div>
                    <label>Prefix for blue tokens: </label>
                    <input type='text'></input>
                </div>
                <div>
                    <label>Blue tokens per row: </label>
                    <input type='number'></input>
                </div>
                <div>
                    <label>Number of red tokens: </label>
                    <input type='number'></input>
                </div>
                <div>
                    <label>Prefix for red tokens: </label>
                    <input type='text'></input>
                </div>
                <div>
                    <label>Red tokens per row: </label>
                    <input type='number'></input>
                </div>
                <div>
                    <button>Generate</button>
                    <button>Clear</button>
                </div>
            </form>
        </div>
    );
}

export default Home;