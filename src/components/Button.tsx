import React from 'react';
import { Button } from 'antd';
import styles from './index.less';

export interface Props {
  /**
   * 标签名
   */
  label: string;
  /**
   * 标签值
   */
  value: number;
}
const Button1: React.FC<Props> = (props: Props) => {
  const { label, value } = props;
  return (
    <>
      <div className={styles.wrap}>css modules style</div>
      <Button type="primary">测试{label} - {value}</Button>
    </>
  );
}

export default Button1;
