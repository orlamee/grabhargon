
import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import AccessToCredit from "../components/hargonWallet.jsx/accesstoCredit";
import SRR from "../components/hargonWallet.jsx/srr";
import WalletHero from "../components/hargonWallet.jsx/walletHero";
import SemiFooter from "../components/personalPage/semiFooter";





function Wallets () {
  return (
    <div>
      <EduHeader/>
      <WalletHero/>
      <SRR/>
      <AccessToCredit/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Wallets;
