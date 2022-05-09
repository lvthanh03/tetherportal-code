import React from 'react'
import Feature from '../../components/feature/Feature';
import CryptoTile from '../../components/CryptoTile';
import btc from '../../assets/btc.png';
import eth from '../../assets/eth.png';
import usdt from '../../assets/usdt.png';
import BTCTracker from '../../components/BTCTracker';
import ETHTracker from '../../components/ETHTracker';
import USDTTracker from '../../components/USDTTracker';
import ContactUs from '../../components/ContactUs';
import './tle.css';

const Tle = () => {
  
  return (
    <div className="tle__whattle section__margin" id="whattle">
      <div className="tle__whattle-feature">
        <Feature title="Seamlessly invest in Cryptocurrencies with TetherPortal" text="We know about the ridiculous fees. We know about the card payment limits. We are here to help you get your hands on those Stablecoins and start investing." />
      </div>
      <div className="tle__whattle-heading">
        <h1 className="gradient__text">Feauturing but not limited to USDT, USDC, DAI, USDP, BUSD</h1>
          <p><CryptoTile title="USDT" rate={<USDTTracker />} icon={usdt} /></p>
          <p><CryptoTile title="BTC" rate={<BTCTracker />} icon={btc} /></p>
          <p><CryptoTile title="ETH" rate={<ETHTracker />} icon={eth} /></p>
      </div>
      <div className="tle__whattle-input">
        <ContactUs />
      </div>
      <div className="tle__whattle-container">
        <Feature title="No Limitations" text="No debit/credit cards needed. We accept payments through Wire Transfer, Interac E-Transfer and Wise." />
        <Feature title="eKYC with Passbase" text="Verify your identity securely with Passbase. Fight against money laundering." />
        <Feature title="Timely" text="We are online 24/7 and promise to deliver all orders under $10K within 1 hour of receiving your payment." />
      </div>
    </div>
  )
}

export default Tle