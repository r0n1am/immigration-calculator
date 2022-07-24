import React from "react";
import DataComponentProp from "../../../common/DataComponentProp";
import ScoringDataProfile from "../ScoringDataProfile";
import RegionOfEmploymentScoringGrid from "./RegionOfEmploymentScoringGrid";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import DefaultDialog from "../../../common/DefaultDialog";

function RegionOfEmploymentDialogRaw(props: DataComponentProp<ScoringDataProfile>) {
  const { onClose, value: valueProp, open, breakpoint } = props;
  const [value, setValue] = React.useState(valueProp);

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

  const handleRegionOfEmploymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({...value, regionOfEmployment: event.target.value});
  };

  return (
    <DefaultDialog
      id="region-of-employment-dialog"
      title="Regional District of Employment"
      breakpoint={breakpoint}
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <RadioGroup
        aria-label="region of employment"
        name="region of employment"
        value={value?.regionOfEmployment}
        onChange={handleRegionOfEmploymentChange}
      >
        {Object.entries(RegionOfEmploymentScoringGrid).filter(([key, _]) => key !== 'Maximum Score').map(([key, value]) => (
          <FormControlLabel value={key} key={key} control={<Radio />} label={key} style={{paddingBottom: '0.5rem'}}/>
        ))}
      </RadioGroup>
    </DefaultDialog>
  );
}

export default RegionOfEmploymentDialogRaw;