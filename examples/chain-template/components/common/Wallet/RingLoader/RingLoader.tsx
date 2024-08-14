import React, { ReactNode } from 'react';
import styles from './ring.module.css';

interface RingLoaderProps {
  angle?: number;
  radius?: number;
  strokeWidth?: number;
  strokeColor?: string;
  children?: ReactNode;
  isSpinning?: boolean;
}

export const RingLoader: React.FC<RingLoaderProps> = ({
  angle = 360,
  radius = 50,
  strokeWidth = 2,
  strokeColor = 'currentColor',
  children,
  isSpinning = true,
}) => {
  const circumference = 2 * Math.PI * radius;
  const visibleStrokeLength = (angle / 360) * circumference;
  const gapLength = circumference - visibleStrokeLength;

  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      style={{ display: 'block', position: 'relative' }}
    >
      <circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray={`${visibleStrokeLength} ${gapLength}`}
        strokeDashoffset={0}
        className={isSpinning ? styles.ringLoader : ''}
      />
      {children && (
        <foreignObject x="0" y="0" width={radius * 2} height={radius * 2}>
          <div
            {...{ xmlns: 'http://www.w3.org/1999/xhtml' }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            {children}
          </div>
        </foreignObject>
      )}
    </svg>
  );
};
