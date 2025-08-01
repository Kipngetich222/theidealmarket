
// context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser')
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    
    if (storedUser) {
      const foundUser = users.find(u => u.email === JSON.parse(storedUser).email)
      if (foundUser) {
        setUser(foundUser)
      }
    }
    setLoading(false)
  }, [])

  const signup = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    
    // Check if user already exists
    if (users.some(u => u.email === email)) {
      throw new Error('User already exists with this email')
    }
    
    const newUser = {
      email,
      username: email.split('@')[0],
      password, // Storing password directly for demo purposes (not secure for production)
      balance: 0,
      isAdmin: email === 'admin@idealmarket.shop',
      transactions: []
    }
    
    // Save user to users array
    localStorage.setItem('users', JSON.stringify([...users, newUser]))
    
    // Set as current user
    localStorage.setItem('currentUser', JSON.stringify({ email }))
    setUser(newUser)
    
    navigate('/login')
  }

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const foundUser = users.find(u => u.email === email)
    
    if (!foundUser) {
      throw new Error('User not found')
    }
    
    // For demo purposes - in production, use proper password hashing
    if (foundUser.password !== password) {
      throw new Error('Invalid password')
    }
    
    // Set as current user
    localStorage.setItem('currentUser', JSON.stringify({ email }))
    setUser(foundUser)
    
    navigate('/')
  }

  const logout = () => {
    localStorage.removeItem('currentUser')
    setUser(null)
    navigate('/login')
  }

  const addFunds = (amount) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const updatedUsers = users.map(u => {
      if (u.email === user.email) {
        const updatedUser = {
          ...u,
          balance: u.balance + amount,
          transactions: [
            ...u.transactions,
            {
              id: `TX-${Date.now()}`,
              type: 'Deposit',
              amount: `+$${amount.toFixed(2)}`,
              date: new Date().toISOString().split('T')[0],
              status: 'Completed'
            }
          ]
        }
        setUser(updatedUser)
        return updatedUser
      }
      return u
    })
    
    localStorage.setItem('users', JSON.stringify(updatedUsers))
    localStorage.setItem('currentUser', JSON.stringify({ email: user.email }))
  }

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    addFunds
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}