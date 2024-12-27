import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import BasicComp1 from "./basic/BasicComp1";
import BasicComp2 from "./basic/BasicComp2";
import BasicComp3 from "./basic/BasicComp3";

const steps = ["Sub 1", "Sub 2", "Sub 3"];

export default function ChildStepperComponent1({ count }) {
  return (
    <>
      <Box sx={{ width: "100%", margin: "auto" }}>
        <Stepper activeStep={count}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {count == 0 && (
          <Typography sx={{ mt: 2, mb: 1 }}>
            <BasicComp1 />
          </Typography>
        )}
        {count == 1 && (
          <Typography sx={{ mt: 2, mb: 1 }}>
            <BasicComp2
              topText="Do you smoke or chew tobacco?"
              bottomText="Say ‘Yes’ if you’ve smoked in the last year."
              image="/smoking.png"
            />
          </Typography>
        )}
        {count == 2 && (
          <Typography sx={{ mt: 2, mb: 1 }}>
            <BasicComp2
              topText="Do you consume alcohol ?"
              bottomText="Say ‘Yes’ if you’ve consumed alcohol in the last year."
              image="/drink.png"
            />
          </Typography>
        )}
      </Box>
    </>
  );
}
