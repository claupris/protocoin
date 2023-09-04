import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { MinusCircle, PlusCircle } from "phosphor-react";
import { FaArrowCircleDown, FaMinusCircle, FaPlusCircle, FaRegMoneyBillAlt } from "react-icons/fa";
import { HiOutlineWallet, HiWallet } from "react-icons/hi2";
import { MdMonetizationOn } from "react-icons/md";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Button from "../form/Button";

interface CoinData {
  id: string;
  symbol: string;
  priceChangePercent: number;
  lastPrice: number;
  openPrice: number;
  highPrice: number;
  lowPrice: number;
  volume: number;
  openTime: Date;
  closeTime: Date;
}

const TableDash: React.FC = () => {
  const [coinData, setCoinData] = useState<CoinData[]>([]);
  const [data, setData] = useState<CoinData[]>([]);
  const [maxTableSize, setMaxTableSize] = useState(0);

  useEffect(() => {
    getCurrencyData();

    setTimeout(() => {
      setMaxTableSize(10);
    }, 500);
  }, []);

  useEffect(() => {
    setData([...coinData.slice(0, maxTableSize)]);
  }, [maxTableSize]);

  const getCurrencyData = async () => {
    try {
      axios
        .get("https://api.binance.com/api/v3/ticker/24hr")
        .then((response) => {
          setCoinData(response.data);
          setData([...coinData.slice(0, maxTableSize)]);
        })
        .catch((error) => {
          console.error("Erro ao buscar dados da API:", error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  function FixPrice(num: number) {
    const output = new Intl.NumberFormat([], {
      style: "currency",
      currency: "BRL",
    }).format(num);
    return output;
  }

  function FixDate(date: Date) {
    const output = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
      .formatToParts(date)
      .reduce((acc: any, part: any) => {
        acc[part.type] = part.value;
        return acc;
      }, {});
    return `${output.day}/${output.month}/${output.year}, ${output.hour}:${output.minute} ${output.dayPeriod}`;
  }

  function handleIncreaseMaxSetSize() {
    if (maxTableSize + 5 >= coinData.length - 1) {
      setMaxTableSize(coinData.length - 1);
    } else {
      setMaxTableSize(maxTableSize + 5);
    }
  }

  function handleDecreaseMaxSetSize() {
    if (maxTableSize - 5 <= 0) {
      setMaxTableSize(1);
    } else {
      setMaxTableSize(maxTableSize - 5);
    }
  }

  function handleSortByName() {
    const sortedData = coinData
      .sort((a, b) => 0 - (a.symbol > b.symbol ? -1 : 1))
      .slice(0, maxTableSize);
    setData([...sortedData]);
  }

  function handleSortByPrice() {
    const sortedData = coinData
      .sort((a, b) => (a.lastPrice > b.lastPrice ? -1 : 1))
      .slice(0, maxTableSize);
    setData([...sortedData]);
  }

  function handleSortByDate() {
    const sortedData = coinData
      .sort((a, b) => (a.openTime > b.openTime ? -1 : 1))
      .slice(0, maxTableSize);
    setData([...sortedData]);
  }

  function handleFilterByString(event: ChangeEvent<HTMLInputElement>) {
    const filterData = coinData.filter((element) => {
      return element.symbol.toUpperCase().includes(event?.target.value.toUpperCase());
    });
    setData([...filterData.slice(0, maxTableSize)]);
  }

  return (
    <div style={{ background: "#131313" }}>
      <br />
      <div
        style={{
          textAlign: "justify",
          float: "right",
          margin: "30px",
        }}
      >
        <input
          className="custom-input"
          autoFocus
          type="text"
          placeholder="Digite o nome da moeda"
          onChange={(event) => handleFilterByString(event)}
        />
        <br />
        <br />
        <div
          style={{
            fontSize: "15px",
            fontFamily: "arial",
            color: "white",
            justifyContent: "right",
            textAlign: "justify",
          }}
        >
          <a
            style={{
              backgroundColor: "#404040",
              borderRadius: "5px",
              borderColor: "#404040",
              cursor: "pointer",
            }}
            onClick={handleDecreaseMaxSetSize}
            title="Decrementar"
          >
            <FaMinusCircle style={{ color: "white", fontSize: "20px" }} />
          </a>{" "}
          <span>
            Itens Listados: <b>{maxTableSize}</b>
          </span>{" "}
          <a
            style={{
              backgroundColor: "#404040",
              borderRadius: "5px",
              borderColor: "#404040",
              cursor: "pointer",
            }}
            onClick={handleIncreaseMaxSetSize}
            title="incrementar"
          >
            {" "}
            <FaPlusCircle style={{ color: "white", fontSize: "20px" }} />
          </a>
        </div>
      </div>
      <div>
        <h3
          style={{ color: "white", justifyContent: "left", textAlign: "justify", margin: "30px" }}
        >
          Nosso Catálogo
        </h3>
        <p
          style={{
            color: "white",
            justifyContent: "left",
            textAlign: "justify",
            margin: "30px",
            fontSize: "15px",
          }}
        >
          Lista de criptomoedas disponíveis pra você
        </p>
      </div>
      <br />
      <Table sx={{ background: "#131313" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "white" }}>
              <b style={{ fontSize: "15px", fontFamily: "arial" }}>#</b>
            </TableCell>
            <TableCell onClick={handleSortByName} sx={{ color: "white" }}>
              <b style={{ fontSize: "15px", fontFamily: "arial" }}>Nome</b>
            </TableCell>
            <TableCell onClick={handleSortByPrice} sx={{ color: "white" }}>
              <b style={{ fontSize: "15px", fontFamily: "arial" }}>Preço</b>
            </TableCell>
            <TableCell sx={{ color: "white" }}>
              <b style={{ fontSize: "15px", fontFamily: "arial" }}>Preço %</b>{" "}
            </TableCell>
            <TableCell sx={{ color: "white" }}>
              <b style={{ fontSize: "15px", fontFamily: "arial" }}>Preço de Abertura</b>
            </TableCell>
            <TableCell sx={{ color: "white" }}>
              <b style={{ fontSize: "15px", fontFamily: "arial" }}>Max</b>
            </TableCell>
            <TableCell sx={{ color: "white" }}>
              <b style={{ fontSize: "15px", fontFamily: "arial" }}>Min</b>
            </TableCell>
            <TableCell sx={{ color: "white" }}>
              <b style={{ fontSize: "15px", fontFamily: "arial" }}>Volume</b>
            </TableCell>
            <TableCell sx={{ color: "white" }} onClick={handleSortByDate}>
              <b style={{ fontSize: "15px", fontFamily: "arial" }}>Tempo de Abertura</b>
            </TableCell>
            <TableCell sx={{ color: "white" }}>
              <b style={{ fontSize: "15px", fontFamily: "arial" }}>Tempo de Fechamento</b>
            </TableCell>
            <TableCell sx={{ color: "white" }}>
              <b style={{ fontSize: "30px", fontFamily: "arial" }}>
                <a>
                  <MdMonetizationOn />
                </a>
              </b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, idx: number) => (
            <TableRow key={idx} style={{ alignItems: "center" }}>
              <TableCell className="p-4 text-center" sx={{ color: "white" }}>
                {idx}
              </TableCell>
              <TableCell className=" text-center" sx={{ color: "white" }}>
                {item.symbol}
              </TableCell>
              <TableCell sx={{ color: "white" }}>{FixPrice(item.lastPrice)}</TableCell>
              <TableCell sx={{ color: "white" }}>{item.priceChangePercent}</TableCell>
              <TableCell sx={{ color: "white" }}>{FixPrice(item.openPrice)}</TableCell>
              <TableCell sx={{ color: "white" }}>{FixPrice(item.highPrice)}</TableCell>
              <TableCell sx={{ color: "white" }}>{FixPrice(item.lowPrice)}</TableCell>
              <TableCell sx={{ color: "white" }}>{FixPrice(item.volume)}</TableCell>
              <TableCell sx={{ color: "white" }}>{FixDate(item.openTime)}</TableCell>
              <TableCell sx={{ color: "white" }}>{FixDate(item.closeTime)}</TableCell>
              <TableCell sx={{ color: "#f4900c", fontSize: "15px" }}>
                <button
                  style={{ background: "#131313", borderRadius: "5px", borderColor: "#f4900c" }}
                >
                  <span
                    style={{
                      color: "#f4900c",
                      fontSize: "20px",
                      fontFamily: "arial",
                      margin: "5px",
                    }}
                  >
                    <HiOutlineWallet /> Comprar
                  </span>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableDash;
