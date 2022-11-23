import React, { useState, useEffect } from "react";
import "../App.css";
import { millify } from "millify";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Avatar,
  Paper,
  TextField,
} from "@mui/material";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import Loader from "./Loader";

import { useGetCryptosQuery } from "../Services/cryptoAPI";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 8 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(cryptos);

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <div className="struct">
        {!simplified && (
        <div className="search-crypto">
        
        <TextField
          id="outlined"
          label="Search Cryptocurrency"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    )}
      
      <Row gutter={[32, 45]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Paper elevation={3} sx={{ maxWidth: 345 }}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader className="card-header"
                    avatar={
                      <Avatar
                        alt={currency.name}
                        src={currency.iconUrl}
                        sx={{ width: 50, height: 50 }}
                      />
                    }
                    title={
                      <h3 style={{color : 'white'}}>
                        {currency.rank}.{currency.name}
                      </h3>
                    }
                  />
                  <Divider />
                  <CardContent>
                    <p>Price : Rs {millify(currency.price, { precision: 3 })}</p>
                    <p>
                      Market Cap :{" "}
                      {millify(currency.marketCap, { precision: 2 })}
                    </p>
                    <p>Change : {currency.change} %</p>
                  </CardContent>
                </Card>
              </Paper>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cryptocurrencies;
