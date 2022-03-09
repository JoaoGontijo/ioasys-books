import { ReactNode } from "react"

export interface IFlexbox {
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
    alignItems?: string,
    justifyContent?: string, 
    margin?: string,
    padding?: string,
    width?: string,
    height?: string,
    background?: string,
    backgroundImage?: string,
    backgroundColor?: string,
    border?: string,
    borderRadius?: string,
    children?: ReactNode,
    overflowY?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto',
    flexFlow?: string,
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse',
    className?: string,
}

export type ISpacer = {
    vertical?: string
    horizontal?: string
}