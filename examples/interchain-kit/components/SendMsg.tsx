import { Box, Text, Button, Link } from "@interchain-ui/react";
import { useState } from "react";

export default function SendMsg() {
  const [sending, setSending] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async () => {
    if (sending) return;
    setError(null);
    setTxHash(null);
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setTxHash("85093A20C077DFEE0BD0BE528DB857B1EFD5C7656F06205DE65B8E5772A8F288");
    }, 3000);
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box mb='$4'>
        <Text>Balance: xxx ATOM</Text>
      </Box>
      <Box>
        <Button
          disabled={sending}
          isLoading={sending}
          onClick={handleSend}
        >Send Token</Button>
      </Box>
      {txHash && <Box mt='$4' display='flex' flexDirection='row' alignItems='center'>
        <Text attributes={{ mr: '$1' }}>Details:</Text>
        <Link href={`https://www.mintscan.io/cosmos/tx/${txHash}`} target="_blank">
          https://www.mintscan.io/cosmos/tx/${txHash}
        </Link>
      </Box>}
      {error && <Box mt='$4' display='flex' flexDirection='row' alignItems='center'>
        <Text attributes={{ mr: '$1' }}>Error:</Text>
        <Text>{error}</Text>
      </Box>}
    </Box>
  );
}