import {Box} from '@mui/material';
import React from 'react';

type Props = {
  total: number;
  current: number;
  generate: number;
  baseRadius: number;
  x: number;
  y: number;
};

const SIZE = 10;
const HALF_SIZE = SIZE * 0.5;

export const Shape: React.FC<Props> = props => {
  if (props.current >= props.total) {
    return null;
  }

  const maxRadius = Math.PI * 2;
  const addRadius = maxRadius / props.generate;

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#00968830',
          position: 'absolute',
          top: props.y,
          left: props.x,
          width: SIZE,
          height: SIZE,
          borderRadius: HALF_SIZE,
        }}
      />
      <Box>
        {[...Array(props.generate)].map((_, index) => {
          const radius = props.baseRadius - maxRadius / 2 + index * addRadius;
          const x = Math.cos(radius) * SIZE;
          const y = Math.sin(radius) * SIZE;
          return (
            <Shape
              key={index}
              total={props.total}
              current={props.current + 1}
              generate={props.generate}
              baseRadius={radius}
              x={props.x + x}
              y={props.y + y}
            />
          );
        })}
      </Box>
    </>
  );
};
