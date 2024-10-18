import { MouseEventHandler } from 'react';
import { Button as UIButton, IconName } from '@interchain-ui/react';

export type ButtonProps = {
  text?: string;
  icon?: IconName;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type ConnectProps = Pick<ButtonProps, 'text' | 'loading' | 'onClick'>;

function noop() { }

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

const Connect = ({ text = 'Connect Wallet', onClick = noop }) =>
  <Button text={text} icon="walletFilled" onClick={onClick} />;
Connect.displayName = 'Connect';

const Connected = ({ text = 'My Wallet', onClick = noop }) =>
  <Button text={text} icon="walletFilled" onClick={onClick} />;
Connected.displayName = 'Connected';

const Disconnected = ({ text = 'Connect Wallet', onClick = noop }) =>
  <Button text={text} icon="walletFilled" onClick={onClick} />;
Disconnected.displayName = 'Disconnected';

const Connecting = ({ text = 'Connecting ...', loading = true }) =>
  <Button text={text} loading={loading} />;
Connecting.displayName = 'Connecting';

const Rejected = ({ text = 'Reconnect', onClick = noop }) =>
  <Button text={text} icon="walletFilled" onClick={onClick} />;
Rejected.displayName = 'Rejected';

const ErrorComponent = ({ text = 'Change Wallet', onClick = noop }) =>
  <Button text={text} icon="walletFilled" onClick={onClick} />;
ErrorComponent.displayName = 'ErrorComponent';

const NotExist = ({ text = 'Install Wallet', onClick = noop }) =>
  <Button text={text} icon="walletFilled" onClick={onClick} />;
NotExist.displayName = 'NotExist';

// Assign these to Button as properties if needed
Button.Connect = Connect;
Button.Connected = Connected;
Button.Disconnected = Disconnected;
Button.Connecting = Connecting;
Button.Rejected = Rejected;
Button.Error = ErrorComponent;
Button.NotExist = NotExist;
