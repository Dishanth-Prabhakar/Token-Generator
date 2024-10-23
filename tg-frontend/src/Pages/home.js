import React, { useState } from "react";


function Home() {

    // Initializing all the input field
    const [blueToken, setBlueToken] = useState('');
    const [bluePrefix, setBluePrefix] = useState('');
    const [bluePerRow, setBluePerRow] = useState('');
    const [redToken, setRedToken] = useState('');
    const [redPrefix, setRedPrefix] = useState('');
    const [redPerRow, setRedPerRow] = useState('');

    // Function to clear the form
    const handleClear = (e) => {
        e.preventDefault();
        setBlueToken('');
        setBluePrefix('');
        setBluePerRow('');
        setRedToken('');
        setRedPrefix('');
        setRedPerRow('');
    };

    return (
        <div>
            <h2>Token Generator Application</h2>
            <form>
                <div>
                    <label>Number of blue tokens: </label>
                    <input type='number'
                        value={blueToken}
                        onChange={(e) => setBlueToken(e.target.value)} />
                </div>
                <div>
                    <label>Prefix for blue tokens: </label>
                    <input type='text' 
                    value={bluePrefix} 
                    onChange={(e) => setBluePrefix(e.target.value)} />
                </div>
                <div>
                    <label>Blue tokens per row: </label>
                    <input type='number' 
                    value={bluePerRow} 
                    onChange={(e) => setBluePerRow(e.target.value)} />
                </div>
                <div>
                    <label>Number of red tokens: </label>
                    <input type='number' 
                    value={redToken} 
                    onChange={(e) => setRedToken(e.target.value)} />
                </div>
                <div>
                    <label>Prefix for red tokens: </label>
                    <input type='text' 
                    value={redPrefix}
                    onChange={(e) => setRedPrefix(e.target.value)} />
                </div>
                <div>
                    <label>Red tokens per row: </label>
                    <input type='number' 
                    value={redPerRow}
                    onChange={(e) => setRedPerRow(e.target.value)} />
                </div>
                <div>
                    <button>Generate</button>
                    <button onClick={handleClear}>Clear</button>
                </div>
            </form>
        </div>
    );
}

export default Home;