import { useState } from 'react';
import { Box } from '@interchain-ui/react';

import { UploadContract } from './UploadContract';
import { BackButton } from './BackButton';
import { Stepper } from '../common';
import { InstantiateContract } from './InstantiateContract';

type CreateFromUploadProps = {
  onBack: () => void;
  switchTab: (initialAddress: string, tabId: number) => void;
};

enum Step {
  Upload = 'Upload',
  Instantiate = 'Instantiate',
}

const steps = [Step.Upload, Step.Instantiate];

export const CreateFromUpload = ({
  onBack,
  switchTab,
}: CreateFromUploadProps) => {
  const [activeStepName, setActiveStepName] = useState<Step>(Step.Upload);
  const [completed, setCompleted] = useState(false);
  const [codeId, setCodeId] = useState<string>();

  const nextStep = () => {
    const currentIndex = steps.indexOf(activeStepName);
    if (currentIndex < steps.length - 1) {
      setActiveStepName(steps[currentIndex + 1]);
    } else {
      setCompleted(true);
    }
  };

  return (
    <Box position="relative">
      <Box
        position="absolute"
        top="0"
        left="0"
        display="flex"
        flexDirection="column"
        gap="40px"
      >
        <BackButton onClick={onBack} />
        <Stepper
          steps={steps}
          activeStep={completed ? steps.length : steps.indexOf(activeStepName)}
        />
      </Box>
      <UploadContract
        show={activeStepName === Step.Upload}
        onSuccess={(codeId) => {
          setCodeId(codeId);
          nextStep();
        }}
      />
      <InstantiateContract
        show={activeStepName === Step.Instantiate}
        defaultCodeId={codeId}
        switchTab={switchTab}
        onSuccess={nextStep}
        onCreateNewContract={() => {
          setCompleted(false);
          setActiveStepName(Step.Upload);
        }}
        onViewMyContracts={onBack}
      />
    </Box>
  );
};
