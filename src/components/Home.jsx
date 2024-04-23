/* eslint-disable max-len */
import React from "react";
import { Col, Row } from "antd";
import homeImg from "../assets/2.png";

const Home = () => {
  return (
    <div className="section__home">
      <Row gutter={[16, 8]}>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <div className="home__image">
            <img src={homeImg} alt="" />
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <div className="home__details">
            <div className="home__title">Welcome to petclinic</div>
            <small>Your Trusted Partner in Pet Care</small>
            <div className="home__desc">petclinic  is your one-stop destination for comprehensive veterinary care and compassionate pet services. From routine check-ups to advanced medical treatments, our experienced team is dedicated to keeping your furry friends happy and healthy. Visit us today and discover the difference personalized care can make in your pet&apos;s life.</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
