import '@testing-library/jest-dom/vitest'

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
})

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
})

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  configurable: true,
  value: () => {},
})

import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(cleanup)
