import React from 'react';
import './ActiveBets.css'; 

function Activebets() {
    const handleBetForYes = () => {
        console.log('Bet for Yes clicked');
    };

    const handleBetForNo = () => {
        console.log('Bet for No clicked');
    };

    return (
        <div className='active-bets'>
            <h1 className='title'>Active Bets</h1>
            <div className='active-bet-card'>
                <h2 className='question'>Will Team A win the match?</h2>
                <div className='options'>
                    <div className='option'>
                        <p className='option-text'>Yes</p>
                        <p className='odds'>Odds: 2.5</p>
                    </div>
                    <div className='option'>
                        <p className='option-text'>No</p>
                        <p className='odds'>Odds: 3.0</p>
                    </div>
                </div>
                <div className='bet-buttons'>
                    <button className='bet-btn1' onClick={handleBetForYes}>Bet for Yes</button>
                    <button className='bet-btn2' onClick={handleBetForNo}>Bet for No</button>
                </div>
                <div className='amount'>
                    <input type='number' className='amount-input' placeholder='Enter amount' />
                </div>
            </div>
        </div>
    );
}

export default Activebets;
