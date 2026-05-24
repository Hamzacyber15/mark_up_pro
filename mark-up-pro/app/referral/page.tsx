import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReferralHero from "../components/referral/ReferralHero";
import ReferralCommission from "../components/referral/ReferralCommission";
import ReferralStats from "../components/referral/ReferralStats";
import ReferralCalculator from "../components/referral/ReferralCalculator";
import ReferralSteps from "../components/referral/ReferralSteps";
import ReferralFAQ from "../components/referral/ReferralFAQ";
import ReferralCTA from "../components/referral/ReferralCTA";

export const metadata = {
  title: "Referral Program | MarkupPro",
  description: "Join the MarkupPro affiliate program and earn 30% recurring commission for life.",
};

export default function ReferralPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ReferralHero />
        <ReferralCommission />
        <ReferralStats />
        <ReferralCalculator />
        <ReferralSteps />
        <ReferralFAQ />
        <ReferralCTA />
      </main>
      <Footer />
    </div>
  );
}
