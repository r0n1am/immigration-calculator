import React from "react";
import CollapsibleTableRowProps from "./CollapsibleTableRowProps";
import { Box, Collapse, IconButton, TableCell, TableRow, useMediaQuery } from "@mui/material";
import { Edit, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Theme } from "@mui/system";

function CollapsibleTableRow<T>(props: CollapsibleTableRowProps<T>) {
  const { row, data, onChange } = props;
  const [expand, setExpand] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [editValue, setEditValue] = React.useState<T>(data[0]);

  const handleClickListItem = (value: T) => {
    setEditValue(value);
    setOpen(true);
  };

  const handleClose = React.useCallback((newValue?: T) => {
    setOpen(false);
    if (newValue) {
      onChange(newValue);
    }
  }, [setOpen, onChange]);

  const breakpointMatched = useMediaQuery<Theme>(theme => theme.breakpoints.up(props.breakpoint), {});

  const factorNameCell = (
    <TableCell
      colSpan={breakpointMatched ? 1 : 999}
      sx={{
        textAlign: {
          xs: 'center',
          [props.breakpoint]: 'inherit',
        },
      }}
    >
      <IconButton component="span" aria-label="expand row" size="small" onClick={() => setExpand(!expand)}>
        {expand ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      </IconButton>&nbsp;
      {row.name}
    </TableCell>
  );

  const descRow = (
    <TableRow>
      <TableCell
        sx={{
          paddingTop: 0,
          paddingBottom: 0,
          textAlign: {
            xs: 'center',
            [props.breakpoint]: 'inherit',
          },
          borderBottom: expand ? null : 0,
        }}
        colSpan={999}
      >
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            {row.desc}
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );

  return (
    <>
      {!breakpointMatched &&
        <>
          <TableRow>
            {factorNameCell}
          </TableRow>
          {descRow}
        </>
      }
      <TableRow>
        { breakpointMatched && factorNameCell }
        {
          props.data.map((data: T, index) => (
            <TableCell
              key={index}
              sx={{
                textAlign: {
                  xs: 'center',
                  [props.breakpoint]: 'inherit',
                },
              }}
            >
              {row.rowValueCalculator(data)}&nbsp;
              <IconButton aria-label="edit" size='small' component="span" onClick={() => handleClickListItem(data)} >
                <Edit fontSize='small' />
              </IconButton>
            </TableCell>
          ))
        }
        
      </TableRow>
      { breakpointMatched && descRow }
      <row.rowEditComponent
        open={open}
        onClose={handleClose}
        value={editValue}
        breakpoint={props.breakpoint}
      />
    </>
  );
}

export default CollapsibleTableRow;
