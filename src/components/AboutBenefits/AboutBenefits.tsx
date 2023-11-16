import React from "react";
import benefit_1 from "../../assets/images/about/benefit_1.png";
import benefit_2 from "../../assets/images/about/benefit_2.png";
import benefit_3 from "../../assets/images/about/benefit_3.png";
import benefit_4 from "../../assets/images/about/benefit_4.png";
import benefit_5 from "../../assets/images/about/benefit_5.png";
import "./aboutbenefits.scss";
import { AboutBenefitsCard } from "../AboutBenefitsCard/AboutBenefitsCard";

export const AboutBenefits: React.FC = () => {
  return (
    <div className="about-benefits">
      <AboutBenefitsCard
        img={benefit_1}
        title="Опыт работы с"
        value="2017"
        desc="года"
      />
      <AboutBenefitsCard
        img={benefit_2}
        title="Отгружено более"
        value="150 000"
        desc="тонн материалов"
      />
      <AboutBenefitsCard
        img={benefit_3}
        title="Более"
        value="100"
        desc="постоянных клиентов"
      />
      <AboutBenefitsCard
        img={benefit_4}
        title="Более"
        value="16"
        desc="единиц техники"
      />
      <AboutBenefitsCard
        img={benefit_5}
        title="Консультруем"
        value="24/7"
        desc="круглосуточно"
      />
    </div>
  );
};
