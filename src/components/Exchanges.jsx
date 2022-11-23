import React from "react";
import { useGetExchangesQuery } from "../Services/cryptoAPI";
import millify from "millify";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import "../App.css";
import Loader from "./Loader";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const Exchanges = () => {
  const { data } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;
  console.log(exchangesList);

  return (
    <>
    <div className="struct" style= {{marginTop : '30px'}}>
    <Typography variant="h4" gutterBottom component="div">
        Exchanges
      </Typography>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Number of Markets</StyledTableCell>
            <StyledTableCell align="right">Rank</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {exchangesList?.map((row) => (
            <StyledTableRow key={row.uuid}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.numberOfMarkets}</StyledTableCell>
              
              <StyledTableCell align="right">{row.rank}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
};

export default Exchanges;
