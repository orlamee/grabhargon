
import Footer from "../components/footer";
import AccessToCredit from "../components/hargonWallet/accesstoCredit";
import PayOpt from "../components/hargonWallet/payOpt";
import PaymentBills from "../components/hargonWallet/paymentBills";
import SmartMoney from "../components/hargonWallet/smartMoney";
import SRR from "../components/hargonWallet/srr";
import WalletHero from "../components/hargonWallet/walletHero";
import Header from "../components/navbar";
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";





function Wallets () {
  return (
    <div>
       <div>
        <Title title=" Hassle-free digital money " />
        <Description
          description="Send, receive, and request money from anywhere using Hargon's wallet. Enjoy the convenience of digital money and a hassle-free approach to spending.
 "
        />
      </div>
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
