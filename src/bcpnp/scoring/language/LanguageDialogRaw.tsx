import React from "react";
import DataComponentProp from "../../../common/DataComponentProp";
import ScoringDataProfile from "../ScoringDataProfile";
import LanguageScoringGrid from "./LanguageScoringGrid";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import DefaultDialog from "../../../common/DefaultDialog";

function LanguageDialogRaw(props: DataComponentProp<ScoringDataProfile>) {
  const { onClose, value: valueProp, open, breakpoint } = props;
  const [value, setValue] = React.useState(valueProp);

  React.useEffect(() => {
    setValue(valueProp);
  }, [valueProp, open]);

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({...value, language: event.target.value});
  };

  return (
    <DefaultDialog
      id="language-dialog"
      title="Canadian Language Benchmark Level"
      breakpoint={breakpoint}
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <RadioGroup
        aria-label="Canadian Language Benchmark Level"
        name="Canadian Language Benchmark Level"
        value={value.language}
        onChange={handleLanguageChange}
      >
        {Object.entries(LanguageScoringGrid).filter(([key, _]) => key !== 'Maximum Score').map(([key, _]) => (
          <FormControlLabel value={key} key={key} control={<Radio />} label={key} />
        ))}
      </RadioGroup>
    </DefaultDialog>
  );
}

export default LanguageDialogRaw;