import React from 'react';
import { Button as AntButton } from 'antd';
import styles from './index.less';
// import { CommonTableExt } from './Button1';

export interface Config {
  age: string;
}

export interface Props {
  /**
   * 标签名
   */
  label: string;
  /**
   * 标签值
   * @default 123
   */
  value: number;
  /**
   * 背景
   */
  bg?: any;
  obj?: Config;
  onChange?: (data: any) => void;
  children?: any;
}

export const config: React.FC<Config> = () => null;

export const Button: React.FC<Props> = (props: Props) => {
  console.log('props', props);
  const { label, value = 123, bg, onChange } = props;
  return (
    <>
      <div className={styles.wrap}>css modules style</div>
      <div
        style={{backgroundColor: bg}}
        onClick={() => onChange && onChange('onchange 我是button组件的数据')}
      >
        {value}
        { props.children }
      </div>
      <AntButton type="primary">测试{label} - {value}</AntButton>
    </>
  );
}

export default Button;
