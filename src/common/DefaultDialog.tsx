import { Breakpoint, useMediaQuery, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { Theme } from "@mui/material"
import { ReactNode } from "react";

export interface DefaultDialogProps {
  id: string;
  title: string;
  open: boolean;
  breakpoint: Breakpoint;
  children: ReactNode;
  onCancel?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onOk?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onEntering?: ((node: HTMLElement, isAppearing: boolean) => void) | undefined;
  focusRef?: React.RefObject<HTMLElement> | undefined;
}

function DefaultDialog(props: DefaultDialogProps) {
  const { id, breakpoint, onCancel, onOk, onEntering } = props;
  const fullScreen = !useMediaQuery((theme: Theme) => theme.breakpoints.up(breakpoint));

  return (
    <Dialog
      id={id}
      keepMounted
      disableEscapeKeyDown
      maxWidth="sm"
      fullScreen={fullScreen}
      TransitionProps={{
        onEntering
      }}
      aria-labelledby={`${id}-title`}
      open={props.open}
    >
      <DialogTitle id={`${id}-title`}>{props.title}</DialogTitle>
      <DialogContent dividers>
        {props.children}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={onOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DefaultDialog;