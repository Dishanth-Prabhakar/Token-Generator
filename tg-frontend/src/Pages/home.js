import React, { useState } from "react";
import './home.css'

function Home() {

    // Initializing all the input field
    const [blueToken, setBlueToken] = useState('');
    const [bluePrefix, setBluePrefix] = useState('');
    const [bluePerRow, setBluePerRow] = useState('');
    const [redToken, setRedToken] = useState('');
    const [redPrefix, setRedPrefix] = useState('');
    const [redPerRow, setRedPerRow] = useState('');
    const [generatedTokens, setGeneratedtoken] = useState({ blue: [], red: [] })
    const [splitBlueTokens, setSplitBlueTokens] = useState([]);
    const [splitRedTokens, setSplitRedTokens] = useState([]);
    const [formError, setFormError] = useState('');
    const [blueError, setBlueError] = useState('');
    const [redError, setRedError] = useState('');

    // To generate the tokens 
    const handleSubmit = (e) => {
        e.preventDefault();

        // checking whether the number of tokens and prefix field is empty or not
        if (blueToken === "" || bluePrefix === "" || redToken === "" || redPrefix === "") {
            setFormError("Number of tokens & prefix fields are mandatory to fill");
            return;
        } else {
            setFormError('');
        }

        // checking whether the tokens per row is not more 8 
        if (bluePerRow > 8) {
            setBlueError("The blue tokens per row should less than or equal to 8");
            return;
        } else {
            setBlueError('');
        }

        if (redPerRow > 8) {
            setRedError("The red tokens per row should less than or equal to 8");
            return;
        } else {
            setRedError('');
        }

        // assigning the default value for the tokens per row field (if the user is not provided)
        const bluePerRowValue = bluePerRow ? Number(bluePerRow) : 8;
        const redPerRowValue = redPerRow ? Number(redPerRow) : 8;

        // to generate blue tokens
        const bluetok = Number(blueToken)
        const bluetokenlst = []
        for (let b = 1; b <= bluetok; b++) {
            bluetokenlst.push(`${bluePrefix}${b}`);
        }

        // to generate red tokens
        const redtok = Number(redToken)
        const redtokenlst = []
        for (let r = 1; r <= redtok; r++) {
            redtokenlst.push(`${redPrefix}${r}`);
        }

        // tokens generated and stored in a list
        setGeneratedtoken({ blue: bluetokenlst, red: redtokenlst });

        // splitTokensIntoRows function call - for blue tokens
        const blueTokensSplit = splitTokensIntoRows(bluetokenlst, Number(bluePerRowValue));
        setSplitBlueTokens(blueTokensSplit);

        // for red tokens
        const redTokensSplit = splitTokensIntoRows(redtokenlst, Number(redPerRowValue));
        setSplitRedTokens(redTokensSplit);
    };

    // function to split the tokens into the row 
    const splitTokensIntoRows = (tokensArray, tokensPerRow) => {
        const rows = [];
        for (let i = 0; i < tokensArray.length; i += tokensPerRow) {
            rows.push(tokensArray.slice(i, i + tokensPerRow));
        }
        return rows;
    };

    // Function to clear the form
    const handleClear = (e) => {
        e.preventDefault();
        setBlueToken('');
        setBluePrefix('');
        setBluePerRow('');
        setRedToken('');
        setRedPrefix('');
        setRedPerRow('');
        setGeneratedtoken({ blue: [], red: [] });
        setBlueError('');
        setRedError('')
        setFormError('');
    };

    return (
        <div className="container">

            {/* Application heading */}
            <h2 className="app-heading">Token Generator Application</h2>
            <div>
                <span style={{ color: 'red' }}>
                    <h5>{formError}</h5> {/* Error message display if number of tokens & prefix field is empty */}
                </span>
            </div>
            <form onSubmit={handleSubmit}>

                {/* Number of blue tokens - field */}
                <div>
                    <label>Number of <span className="bluecolor">blue</span> tokens: </label>
                    <input type='number'
                        value={blueToken}
                        onChange={(e) => setBlueToken(e.target.value)} />
                </div>

                {/* Prefix for blue tokens - field */}
                <div>
                    <label>Prefix for <span className="bluecolor">blue</span> tokens: </label>
                    <input type='text'
                        value={bluePrefix}
                        onChange={(e) => setBluePrefix(e.target.value)} />
                </div>

                {/* Blue tokens per row - field */}
                <div>
                    <label><span className="bluecolor">Blue</span> tokens per row: </label>
                    <input type='number'
                        value={bluePerRow}
                        onChange={(e) => setBluePerRow(e.target.value)} />
                    <span style={{ color: 'red' }}>
                        <h5>{blueError}</h5> {/* Error message display if the tokens per row value is greater than 8 */}
                    </span>
                </div>

                {/* Number of red tokens - field */}
                <div>
                    <label>Number of <span className="redcolor">red</span> tokens: </label>
                    <input type='number'
                        value={redToken}
                        onChange={(e) => setRedToken(e.target.value)} />
                </div>

                {/* Prefix for red tokens - field */}
                <div>
                    <label>Prefix for <span className="redcolor">red</span> tokens: </label>
                    <input type='text'
                        value={redPrefix}
                        onChange={(e) => setRedPrefix(e.target.value)} />
                </div>

                {/* Red tokens per row - field */}
                <div>
                    <label><span className="redcolor">Red</span> tokens per row: </label>
                    <input type='number'
                        value={redPerRow}
                        onChange={(e) => setRedPerRow(e.target.value)} />
                    <span style={{ color: 'red' }}>
                        <h5>{redError}</h5> {/* Error message display if the tokens per row value is greater than 8 */}
                    </span>
                </div>
                <div>
                    <button type="submit" className="generatebtn">Generate</button>
                    <button onClick={handleClear} className="clearbtn">Clear</button>
                </div>
            </form>

            {/* Code to display the generated tokens */}
            <div className="token-container">
                <div>
                    {generatedTokens.blue.length > 0 ? (
                        <div>
                            <h2 className="bluecolor">Blue tokens</h2>
                            {splitBlueTokens.map((row, rowIndex) => (
                                <div key={rowIndex} style={{ marginBottom: '10px' }}>
                                    {row.map((token, tokenIndex) => (
                                        <span key={tokenIndex} className="bluetoken-box">{token}</span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <h3 style={{ marginBottom: '20px'}}><span className="bluecolor">Blue</span> tokens not yet generated</h3>
                    )}
                </div>

                <div>
                    {generatedTokens.red.length > 0 ? (
                        <div>
                            <h2 className="redcolor">Red tokens</h2>
                            {splitRedTokens.map((row, rowIndex) => (
                                <div key={rowIndex} style={{ marginBottom: '10px' }}>
                                    {row.map((token, tokenIndex) => (
                                        <span key={tokenIndex} className="redtoken-box">{token}</span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <h3><span className="redcolor">Red</span> tokens not yet generated</h3>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;