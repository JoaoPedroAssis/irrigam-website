import HeroSection from "./components/HomeDoctorSections/HeroSection";
import BenefitsSection from "./components/HomeDoctorSections/BenefitsSection";
import InfoSection from "./components/HomeDoctorSections/InfoSection";
import AppealSection from "./components/HomeDoctorSections/AppealSection";
import FaqSection from "./components/HomeDoctorSections/FaqSection";
import FormularioDiscord from "./components/HomeDoctorSections/Form";

import { Helmet } from "react-helmet";


function LandingPage() {

  return (
    <>
      <Helmet>
        <title>Irrigam Coletivo de Psicologia</title>
        <meta name="description" content="Psicoterapia individual online para brasileiros que moram no exterior." />
        <meta name="keywords" content="psicologia, irrigam, psicoterapia, exterior" />
        <meta name="author" content="Irrigam" />
      </Helmet>
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
