import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import { Link } from "react-router-dom";
import { Divider, Paper } from "@mui/material";
import { useGetCryptosQuery } from "../Services/cryptoAPI";
import "../App.css";
import Loader from "./Loader";


const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(8);
  const globalStats = data?.data?.stats;

  console.log(data);

  if (isFetching) return <Loader />;

  return (
    <div className="struct">
      <div className="home-cont">
      <div className="banner">
        <img src={require("../images/banner.png")} alt="banner" width="1000" />
      </div>
      <div className="global-stats">
        <Title
          level={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          GLOBAL STATISTICS
        </Title>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Paper style={{ padding: 25, width: 220 }} elevation={5}>
            <Col span={12}>
              <Statistic
                title="Total Cryptocurrencies"
                value={globalStats.totalCoins}
              />
            </Col>
          </Paper>
          <Paper style={{ padding: 25, width: 220 }} elevation={5}>
            <Col span={12}>
              <Statistic
                title="Total Exchanges"
                value={globalStats.totalExchanges}
              />
            </Col>
          </Paper>
          <Paper style={{ padding: 25, width: 220 }} elevation={5}>
            <Col span={12}>
              <Statistic
                title="24 Hr Trade Volume"
                value={millify(globalStats.total24hVolume)}
              />
            </Col>
          </Paper>
        </Row>
      </div>
      </div>
      <div className="home-heading-container">
        <h2 className="home-title">Top Cryptocurrencies in the world</h2>
        <Cryptocurrencies simplified />
      </div>
      <div className="home-heading-container">
        <h2 className="home-title">Latest Crypto News</h2>
        <News simplified />
      </div>
    </div>
  );
};

export default Homepage;
