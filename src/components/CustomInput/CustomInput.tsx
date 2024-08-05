import React from "react";
import styles from'./CustomInput.module.css'; 

export interface CustomInputProps { 
  // Add your props here 
  children : React.ReactNode
} 

export const CustomInput = ({children} : CustomInputProps ) => { 
  return (
    <div className={ styles.customInput }>
      {children}
    </div>
  ); 
};