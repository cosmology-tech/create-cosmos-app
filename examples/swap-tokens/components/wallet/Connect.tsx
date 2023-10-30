import { MouseEventHandler } from 'react';
import { Button as UIButton, IconName } from '@interchain-ui/react';

export type ButtonProps =  {
  text?: string;
  icon?: IconName;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type ConnectProps = Pick<ButtonProps, 'text' | 'loading' | 'onClick'>;

function noop() {}

export function Button({
  text,
  icon,
  loading,
  disabled,
  onClick = noop
}: ButtonProps) {
  return (
    <UIButton
      onClick={onClick}
      leftIcon={icon}
      disabled={disabled}
      isLoading={loading}
      domAttributes={{
        style: {
          flex: 1,
          backgroundImage: 'linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)'
        }
      }}
    >
      {text}
    </UIButton>
  );
};

Button.Connect = ({ text = 'Connect Wallet', onClick = noop }: ConnectProps) =>
  <Button text={text} icon="walletFilled" onClick={onClick} />

Button.Connected = ({ text = 'My Wallet', onClick = noop }: ConnectProps) =>
  <Button text={text} icon="walletFilled" onClick={onClick} />

Button.Disconnected = ({ text = 'Connect Wallet', onClick = noop }: ConnectProps) =>
  <Button text={text} icon="walletFilled" onClick={onClick} />

Button.Connecting = ({ text = 'Connecting ...', loading = true }: ConnectProps) =>
  <Button text={text} loading={loading} />

Button.Rejected = ({ text = 'Reconnect', onClick = noop }: ConnectProps) =>
  <Button text={text} icon="walletFilled" onClick={onClick} />

Button.Error = ({ text = 'Change Wallet', onClick = noop }: ConnectProps) =>
  <Button text={text} icon="walletFilled" onClick={onClick} />

Button.NotExist = ({ text = 'Install Wallet', onClick = noop }: ConnectProps) =>
  <Button text={text} icon="walletFilled" onClick={onClick} />