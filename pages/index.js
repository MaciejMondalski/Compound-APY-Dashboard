import Head from "next/head";
import Compound from "@compound-finance/compound-js";
import calculateApy from "../apy.js";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

//Components
import Title from "./Title";

export default function Home({ apys }) {
  const formatPercent = (number) =>
    `${new Number(number).toFixed(2)}%`;

  return (
    <div className="main-container">
      <GlobalStyles />
      <div className="content-container">
        <Title />
        <StyledTable>
          <thead>
            <tr>
              <th>Asset</th>
              <th>Supply APY</th>
              <th>COMP APY</th>
              <th>Total APY</th>
            </tr>
          </thead>
          <tbody>
            {apys &&
              apys.map((apy) => (
                <tr key={apy.ticker}>
                  <Asset>
                    <img
                      id="ticker"
                      src={`./img/${apy.ticker.toLowerCase()}.png`}
                    />
                    <p>{apy.ticker.toUpperCase()}</p>
                  </Asset>
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
        </StyledTable>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const apys = await Promise.all([
    calculateApy(Compound.cDAI, "DAI"),
    calculateApy(Compound.cETH, "ETH"),
    calculateApy(Compound.cUSDC, "USDC"),
    calculateApy(Compound.cUSDT, "USDT"),
    calculateApy(Compound.cBAT, "BAT"),
    calculateApy(Compound.cUNI, "UNI"),
    calculateApy(Compound.cZRX, "ZRX"),
    calculateApy(Compound.cCOMP, "COMP"),
  ]);

  return {
    props: {
      apys,
    },
  };
}

const Asset = styled.td`
  display: flex;
  align-items: center;

  img {
    margin-right: 2rem;
  }
`;

const StyledTable = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0.6rem 0.6rem 3rem 0.2rem grey;

  th,
  td {
    padding: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    text-align: center;
  }

  tbody {
    tr:last-child {
      td {
        border-bottom: none;
      }
    }
  }

  thead {
    tr {
      position: sticky;
      font-weight: bold;
      color: white;
      font-size: 1.1rem;
      background: #070a0e;
      overflow: visible;
      border-top-left-radius: 1rem;
    }

    th:first-child {
      border-top-left-radius: 1rem;
    }

    th:last-child {
      border-top-right-radius: 1rem;
    }
  }
`;
