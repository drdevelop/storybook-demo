import React from 'react';
import { Table } from 'antd';

export interface DemoProps {
  a: string;
}

export const Demo: React.FC<DemoProps> = (props: DemoProps) => {
  const { a } = props;
  return (
    <>
      demo { a }
      <Table dataSource={[]} />
    </>
  );
}

export default Demo;
