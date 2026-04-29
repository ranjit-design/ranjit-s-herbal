'use client'

import { createContext, useState, useEffect, useCallback } from 'react'
import { getLocalStorage, setLocalStorage } from '@/lib/helpers'

export const AuthContext = createContext(undefined)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedUser = getLocalStorage('user', null)
    if (savedUser) {
      setUser(savedUser)
    }
    setIsLoading(false)
  }, [])

  const login = useCallback(async (email, password) => {
    try {
      // In a real app, this would make an API call
      const mockUser = {
        id: '1',
        email,
        name: 'John Doe',
      }
      setUser(mockUser)
      setLocalStorage('user', mockUser)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }, [])

  const register = useCallback(async (email, password, name) => {
    try {
      // In a real app, this would make an API call
      const mockUser = {
        id: '1',
        email,
        name,
      }
      setUser(mockUser)
      setLocalStorage('user', mockUser)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    setLocalStorage('user', null)
  }, [])

  const updateProfile = useCallback((updates) => {
    setUser((prev) => {
      const updated = { ...prev, ...updates }
      setLocalStorage('user', updated)
      return updated
    })
  }, [])

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateProfile,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
