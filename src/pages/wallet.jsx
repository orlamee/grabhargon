
import Footer from "../components/footer";
import AccessToCredit from "../components/hargonWallet/accesstoCredit";
import PayOpt from "../components/hargonWallet/payOpt";
import PaymentBills from "../components/hargonWallet/paymentBills";
import SmartMoney from "../components/hargonWallet/smartMoney";
import SRR from "../components/hargonWallet/srr";
import WalletHero from "../components/hargonWallet/walletHero";
import Header from "../components/navbar";
import SemiFooter from "../components/personalPage/semiFooter";





function Wallets () {
  return (
    <div>
      <Header/>
      <WalletHero/>
      <SRR/>
      <AccessToCredit/>
      <PaymentBills/>
      <PayOpt/>
      <SmartMoney/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Wallets;
