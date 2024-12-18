import { ExtendedValidator } from '../../utils/stake-tokens/staking';
import { getLogoUrls } from '../../utils/stake-tokens/logos'
import { useQuery } from '@tanstack/vue-query';
import { Ref } from 'vue'

export const useValidatorLogos = (
  chainName: Ref<string>,
  validators: Ref<ExtendedValidator[]>
) => {
  return useQuery({
    queryKey: ['validatorLogos', chainName, validators],
    queryFn: () => getLogoUrls(validators.value, chainName.value),
    staleTime: Infinity,
  });
};
