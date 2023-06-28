type AnnualProvisions = {
  annual_provisions: string;
};

export const handleError = (resp: Response) => {
  if (!resp.ok) throw Error(resp.statusText);
  return resp;
};

export const getAnnualProvisions = async (
  chainName: string
): Promise<AnnualProvisions> => {
  const url = `https://lcd-${chainName}.keplr.app/cosmos/mint/v1beta1/annual_provisions`;
  return fetch(url)
    .then(handleError)
    .then((res) => res.json());
};
