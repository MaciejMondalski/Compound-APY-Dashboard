import Head from "next/head";
import Compound from "@compound-finance/compound-js";
import calculateApy from "../apy.js";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

export default function Home({ apys }) {
  const formatPercent = (number) =>
    `${new Number(number).toFixed(2)}%`;

  return (
    <div className="main-container">
      <GlobalStyles />
      <div className="content-container">
        <h1>Compound APY Dashboard</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Supply APY</th>
              <th>COMP APY</th>
              <th>Total APY</th>
            </tr>
          </thead>
          <tbody>
            {apys &&
              apys.map((apy) => (
                <tr key={apy.ticker}>
                  <td>
                    <img
                      id="ticker"
                      src={`./img/${apy.ticker.toLowerCase()}.png`}
                    />
                  </td>
                  <td>{apy.ticker.toUpperCase()}</td>
                  <td>{formatPercent(apy.supplyApy)}</td>
                  <td>{formatPercent(apy.compApy)}</td>
                  <td>
                    {formatPercent(
                      parseFloat(apy.supplyApy) +
                        parseFloat(apy.compApy)
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const apys = await Promise.all([
    calculateApy(Compound.cDAI, "DAI"),
    calculateApy(Compound.cUSDC, "USDC"),
    calculateApy(Compound.cUSDT, "USDT"),
  ]);

  return {
    props: {
      apys,
    },
  };
}
