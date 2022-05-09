import React from 'react'
import './CryptoTile.css'


const CryptoTile = ({ icon, title, rate }) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="coin-icon"><img src={icon} /></div>
                <div>{title}</div>
                <div>{rate}</div>
            </div>
        </div >
    )
}

export default CryptoTile