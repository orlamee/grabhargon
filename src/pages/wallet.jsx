
import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import AccessToCredit from "../components/hargonWallet/accesstoCredit";
import PayOpt from "../components/hargonWallet/payOpt";
import PaymentBills from "../components/hargonWallet/paymentBills";
import SmartMoney from "../components/hargonWallet/smartMoney";
import SRR from "../components/hargonWallet/srr";
import WalletHero from "../components/hargonWallet/walletHero";
import SemiFooter from "../components/personalPage/semiFooter";





function Wallets () {
  return (
    <div>
      <EduHeader/>
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
