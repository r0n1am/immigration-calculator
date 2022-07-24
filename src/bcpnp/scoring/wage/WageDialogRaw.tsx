import React from "react";
import DataComponentProp from "../../../common/DataComponentProp";
import ScoringDataProfile from "../ScoringDataProfile";
import WageScoringGrid from "./WageScoringGrid";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import DefaultDialog from "../../../common/DefaultDialog";

function WageDialogRaw(props: DataComponentProp<ScoringDataProfile>) {
  const { onClose, value: valueProp, open, breakpoint } = props;
  const [value, setValue] = React.useState(valueProp);

  React.useEffect(() => console.log(value), [value]);
  React.useEffect(() => {
    // if (!open) {
      setValue(valueProp);
    // }
  }, [valueProp, open]);

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleWageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({...value, annualWageRange: event.target.value});
  };

  return (
    <DefaultDialog
      id="wage-dialog"
      title="Annual Wage of the B.C. Job Offer"
      breakpoint={breakpoint}
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <RadioGroup
        aria-label="wage range"
        name="wage range"
        value={value?.annualWageRange}
        onChange={handleWageChange}
      >
        {Object.entries(WageScoringGrid).filter(([key, _]) => key !== 'Maximum Score').map(([key, value]) => (
          <FormControlLabel value={key} key={key} control={<Radio />} label={key} />
        ))}
      </RadioGroup>
    </DefaultDialog>
  );
}

export default WageDialogRaw;