import React from 'react'
import styles from './PageTitle.module.scss'
import clsx from 'clsx'

interface PageTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export const PageTitle = ({ title, className }: PageTitleProps) => {
  return <h1 className={clsx(styles.title, className)}>{title}</h1>
}
