import React from "react";
import "antd/dist/reset.css";
import Navbar from "./components/Navbar";
import { Route, Routes, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Homepage from "./components/Homepage";
import Exchanges from "./components/Exchanges";
import Cryptocurrience from "./components/Cryptocurrience";
import News from "./components/News";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrience />}
              />
              <Route exact path="/news" element={<News />} />
              <Route exact path="/news" element={<Exchanges />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryoverse <br />
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
