import { ExtendedValidator, getLogoUrls } from '@/utils';
import { useQuery } from '@tanstack/react-query';

export const useValidatorLogos = (
  chainName: string,
  validators: ExtendedValidator[]
) => {
  return useQuery({
    queryKey: ['validatorLogos', chainName, validators.length],
    queryFn: () => getLogoUrls(validators, chainName),
    staleTime: Infinity,
  });
};
