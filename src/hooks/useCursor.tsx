import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type CursorVariant = 'default' | 'hover' | 'view' | 'drag'

interface CursorState {
  variant: CursorVariant
  label: string
  setCursor: (variant: CursorVariant, label?: string) => void
  reset: () => void
}

const CursorContext = createContext<CursorState | null>(null)

export function CursorProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>('default')
  const [label, setLabel] = useState('')

  const setCursor = useCallback((v: CursorVariant, l = '') => {
    setVariant(v)
    setLabel(l)
  }, [])

  const reset = useCallback(() => {
    setVariant('default')
    setLabel('')
  }, [])

  const value = useMemo(
    () => ({ variant, label, setCursor, reset }),
    [variant, label, setCursor, reset],
  )

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
}

export function useCursor(): CursorState {
  const ctx = useContext(CursorContext)
  if (!ctx) {
    // Safe no-op fallback when used outside provider (e.g. reduced contexts).
    return {
      variant: 'default',
      label: '',
      setCursor: () => {},
      reset: () => {},
    }
  }
  return ctx
}

/** Convenience props to make any element drive the custom cursor on hover. */
export function useCursorHover(variant: CursorVariant = 'hover', label = '') {
  const { setCursor, reset } = useCursor()
  return {
    onMouseEnter: () => setCursor(variant, label),
    onMouseLeave: () => reset(),
  }
}
