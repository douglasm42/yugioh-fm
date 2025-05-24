'use client'

import { ConfigProvider, theme } from 'antd'
import React from 'react'

interface ThemeProviderProps {
  children: React.ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ConfigProvider
      theme={{
        // 1. Use dark algorithm
        algorithm: theme.darkAlgorithm,

        // 2. Combine dark algorithm and compact algorithm
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
      }}
    >
      {children}
    </ConfigProvider>
  )
}
