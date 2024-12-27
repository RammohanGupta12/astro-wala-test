import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ChildStepperComponent1 from "./ChildStepperComp1";
import ChildStepperComponent2 from "./ChildStepperComp2";
import ChildStepperComponent3 from "./ChildStepperComp3";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useState } from "react";

const steps = ["Basic", "Income", "Dependants"];

export default function MainStepperComponent() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeSubStep, setActiveSubStep] = useState(0);

  const handleNext = () => {
    if (activeSubStep === 2 || activeSubStep === 5) {
      console.log("Moving to the first subtab of the next main tab.");
      setActiveSubStep(0); // Move to next subtab
      setActiveStep(activeStep + 1); // Move to next main tab
    } else {
      console.log("Moving to the next subtab.");
      setActiveSubStep(activeSubStep + 1);
    }

    console.log(
      `Updated Main Tab: ${activeStep}, Updated Sub Tab: ${activeSubStep}`
    );
  };

  const handleBack = () => {
    if (activeStep > 0 && activeSubStep === 0) {
      console.log("Moving to the last subtab of the previous main tab.");
      setActiveSubStep(2);
      setActiveStep(activeStep - 1);
    } else {
      console.log("Moving to the previus subtab.");
      setActiveSubStep(activeSubStep - 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  console.log(activeStep);
  console.log(activeSubStep);

  return (
    <div className="bg-gray-100">
      <Box sx={{ width: "55%", margin: "auto" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps} className="">
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <>
          {activeStep == 0 && activeSubStep < 3 && (
            <Typography sx={{ mt: 2, mb: 1 }}>
              <ChildStepperComponent1 count={activeSubStep} />
            </Typography>
          )}
          {activeStep == 1 && activeSubStep < 3 && (
            <Typography sx={{ mt: 2, mb: 1 }}>
              <ChildStepperComponent2 count={activeSubStep} />
            </Typography>
          )}
          {activeStep == 2 && activeSubStep < 3 && (
            <Typography sx={{ mt: 2, mb: 1 }}>
              <ChildStepperComponent3 count={activeSubStep} />
            </Typography>
          )}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0 && activeSubStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Previous
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button
              onClick={handleNext}
              className="bg-green-500 py-3 px-8 text-white rounded-md"
              disabled={activeSubStep === 2 && activeStep == 2}
            >
              {activeStep === steps.length - 1 && activeSubStep === 2
                ? "Done"
                : "Next"}
              <ArrowForwardIosIcon />
            </Button>
          </Box>
        </>
      </Box>
    </div>
  );
}
