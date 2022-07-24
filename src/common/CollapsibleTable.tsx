import { useMediaQuery, TableCell, TableContainer, Paper, Table, TableHead, TableRow, TableBody } from "@mui/material";
import { Theme } from "@mui/material";
import React from "react";
import CollapsibleTableProps from "./CollapsibleTableProps";
import CollapsibleTableRow from "./CollapsibleTableRow";

function CollapsibleTable<T>(props: CollapsibleTableProps<T>) {
  const breakpoint = 'sm';
  const breakpointMatched = useMediaQuery((theme: Theme) => theme.breakpoints.up(breakpoint));

  const totalNameCell = <TableCell
    colSpan={breakpointMatched ? 1 : 999} sx={{textAlign: {xs: 'center', [`${breakpoint}`]: 'inherit'},}}
  >
    Total
  </TableCell>;

  const {rowData, data} = props;
  const totalCalculator = rowData.map(r => r.rowValueCalculator).reduce((p, c) => (t: T) => p(t) + c(t));
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: (theme: Theme) => `calc(100vh - ${theme.mixins.toolbar.minHeight}px * 2)`, }}>
        <Table stickyHeader aria-label={props.ariaLabel} size={breakpointMatched ? 'medium' : 'small'}>
          <TableHead>
            <TableRow>
              {breakpointMatched ?
                <TableCell sx={{width: 0.6,}}>{props.firstColumnHeader}</TableCell> :
                null
              }
              {
                !!data && data.length > 0 ?
                data.map((d, index) => (
                  <TableCell key={index} sx={{textAlign: {xs: 'center', [`${breakpoint}`]: 'inherit'},}}>
                    {props.columnNameExtractor(d)}
                  </TableCell>
                )) :
                null
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((row) => (
              <CollapsibleTableRow key={row.name} row={row} data={data} onChange={props.onChange} breakpoint={breakpoint} />
            ))}
            <>
              {breakpointMatched ?
                null :
                <TableRow sx={{textAlign: {xs: 'center', [`${breakpoint}`]: 'inherit'}}}>{totalNameCell}</TableRow>
              }
              <TableRow>
                { breakpointMatched ? totalNameCell : null}
                {
                  data.map((d: T, index) => (
                    <TableCell key={index} sx={{textAlign: {xs: 'center', [`${breakpoint}`]: 'inherit'}}}>
                      {totalCalculator(d)}
                    </TableCell>
                  ))
                }
              </TableRow>
            </>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default CollapsibleTable;