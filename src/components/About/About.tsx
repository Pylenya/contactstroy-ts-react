import React from "react";
import aboutImg from "../../assets/images/about/about.png";
import { AboutBenefits } from "../AboutBenefits/AboutBenefits";
import "./about.scss";
import "./responsive.scss";
export const About: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__title">
          <h3>О компании</h3>
        </div>
        <div className="about__box">
          <div className="about__text">
            <span>ООО "КОНТАКТ-СТРОЙ"</span>
            <p>
              Работаем с 2017 года. "Контакт-строй" Тульская компания, цель
              которой - стабильное развитие на основе создания взаимовыгодных
              отношений с клиентами и поставщиками.
            </p>
            <p>
              Осуществляем продажу и доставку нерудных материалов и сдаем в
              аренду технику, с учетом требований клиентов. Нам доверяют более
              100 клиентов по Туле и Тульской области.
            </p>
          </div>
          <div className="about__img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <AboutBenefits />
      </div>
    </section>
  );
};
