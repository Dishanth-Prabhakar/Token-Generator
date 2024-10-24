import React, { useState } from "react";


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

        if (blueToken === "" || bluePrefix === "" || redToken === "" || redPrefix === "") {
            setFormError("Number of tokens & prefix fields are mandatory to fill");
            return;
        } else {
            setFormError('');
        }

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
            setRedError('')
        }

        const bluePerRowValue = bluePerRow ? Number(bluePerRow) : 8;
        const redPerRowValue = redPerRow ? Number(redPerRow) : 8;

        const bluetok = Number(blueToken)
        const bluetokenlst = []
        for (let b = 1; b <= bluetok; b++) {
            bluetokenlst.push(`${bluePrefix}${b}`);
        }

        const redtok = Number(redToken)
        const redtokenlst = []
        for (let r = 1; r <= redtok; r++) {
            redtokenlst.push(`${redPrefix}${r}`);
        }

        setGeneratedtoken({ blue: bluetokenlst, red: redtokenlst });

        const blueTokensSplit = splitTokensIntoRows(bluetokenlst, Number(bluePerRowValue));
        setSplitBlueTokens(blueTokensSplit);

        const redTokensSplit = splitTokensIntoRows(redtokenlst, Number(redPerRowValue));
        setSplitRedTokens(redTokensSplit);
    };

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
        <div>
            <h2>Token Generator Application</h2>
            <div>
                <span style={{ color: 'red' }}>
                    <h5>{formError}</h5>
                </span>
            </div>
            <form onSubmit={handleSubmit}>
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
                    <span style={{ color: 'red' }}>
                        <h5>{blueError}</h5>
                    </span>
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
                    <span style={{ color: 'red' }}>
                        <h5>{redError}</h5>
                    </span>
                </div>

                <div>
                    <button type="submit">Generate</button>
                    <button onClick={handleClear}>Clear</button>
                </div>
            </form>

            <div>
                {generatedTokens.blue.length > 0 ? (
                    <div>
                        {splitBlueTokens.map((row, rowIndex) => (
                            <div key={rowIndex} style={{ marginBottom: '10px' }}>
                                {row.map((token, tokenIndex) => (
                                    <span key={tokenIndex} style={{ marginRight: '10px' }}>{token}</span>
                                ))}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No blue tokens generated yet.</p>
                )}
            </div>

            <div>
                {generatedTokens.red.length > 0 ? (
                    <div>
                        {splitRedTokens.map((row, rowIndex) => (
                            <div key={rowIndex} style={{ marginBottom: '10px' }}>
                                {row.map((token, tokenIndex) => (
                                    <span key={tokenIndex} style={{ marginRight: '10px' }}>{token}</span>
                                ))}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No red tokens generated yet.</p>
                )}
            </div>
        </div>
    );
}

export default Home;