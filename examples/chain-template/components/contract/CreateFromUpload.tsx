import { useState } from 'react';
import { Box } from '@interchain-ui/react';

import { UploadContract } from './UploadContract';
import { BackButton } from './BackButton';
import { Stepper } from '../common';
import { InstantiateContract } from './InstantiateContract';
import { useDetectBreakpoints } from '@/hooks';

type CreateFromUploadProps = {
  onBack: () => void;
  switchTab: (addressValue: string, tabId: number) => void;
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

  const { isTablet } = useDetectBreakpoints();

  return (
    <Box position="relative">
      <Box
        position={isTablet ? 'relative' : 'absolute'}
        top="0"
        left="0"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="40px"
      >
        <Box alignSelf="flex-start">
          <BackButton onClick={onBack} />
        </Box>
        <Stepper
          steps={steps}
          activeStep={completed ? steps.length : steps.indexOf(activeStepName)}
          direction={isTablet ? 'row' : 'column'}
        />
      </Box>
      <Box mt={isTablet ? '40px' : '0'}>
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
    </Box>
  );
};
