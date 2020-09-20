import React from 'react';

export interface DemoProps {
  a: string;
}

export const Demo: React.FC<DemoProps> = (props: DemoProps) => {
  const { a } = props;
  return (
    <>
      demo { a }
    </>
  );
}

export default Demo;
