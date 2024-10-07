import HeroSection from "./components/HomeDoctorSections/HeroSection";
import BenefitsSection from "./components/HomeDoctorSections/BenefitsSection";
import InfoSection from "./components/HomeDoctorSections/InfoSection";
import AppealSection from "./components/HomeDoctorSections/AppealSection";
import FaqSection from "./components/HomeDoctorSections/FaqSection";
import FormularioDiscord from "./components/HomeDoctorSections/Form";


function LandingPage() {

  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <AppealSection />
      <InfoSection />
      <FaqSection />
      <FormularioDiscord />
    </>
  )
}

export default LandingPage
