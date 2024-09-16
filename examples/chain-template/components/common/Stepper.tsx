import { Box, Text, Icon } from '@interchain-ui/react';

const STEP_INDICATOR_SIZE = 40;
const STEP_SEPARATOR_WIDTH = 2;
const STEP_SEPARATOR_OFFSET =
  STEP_INDICATOR_SIZE / 2 - STEP_SEPARATOR_WIDTH / 2;

const Status = {
  DONE: 'done',
  DOING: 'doing',
  TODO: 'todo',
} as const;

type Status = (typeof Status)[keyof typeof Status];

type StepperProps = {
  steps: string[];
  activeStep: number;
  direction?: 'row' | 'column';
};

export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  direction = 'column',
}) => {
  return (
    <Box display="flex" flexDirection={direction}>
      {steps.map((step, index) => {
        const status: Status =
          index < activeStep
            ? Status.DONE
            : index === activeStep
              ? Status.DOING
              : Status.TODO;

        return (
          <Box key={index} display="flex" flexDirection="column">
            <Box display="flex" alignItems="center" gap="10px">
              <Box
                width={`${STEP_INDICATOR_SIZE}px`}
                height={`${STEP_INDICATOR_SIZE}px`}
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                backgroundColor={
                  status === Status.DONE ? '$purple400' : '$transparent'
                }
                borderWidth="2px"
                borderStyle="solid"
                borderColor={
                  status === Status.TODO ? '$blackAlpha300' : '$purple400'
                }
              >
                {status === Status.DONE ? (
                  <Icon name="checkFill" color="$white" size="24px" />
                ) : (
                  <Text color="$purple400" fontSize="16px" fontWeight="500">
                    {index + 1}
                  </Text>
                )}
              </Box>
              <Text color="$blackAlpha600" fontSize="16px" fontWeight="600">
                {step}
              </Text>
            </Box>
            {index < steps.length - 1 && (
              <Box
                width={`${STEP_SEPARATOR_WIDTH}px`}
                height="30px"
                backgroundColor={
                  status === Status.DONE ? '$purple400' : '$blackAlpha300'
                }
                ml={`${STEP_SEPARATOR_OFFSET}px`}
                my="4px"
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
};