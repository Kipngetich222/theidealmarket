
// // context/AuthContext.jsx
// import { createContext, useContext, useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// const AuthContext = createContext()

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const [notification, setNotification] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("currentUser");
//     const users = JSON.parse(localStorage.getItem("users") || "[]");

//     if (storedUser) {
//       const foundUser = users.find(
//         (u) => u.email === JSON.parse(storedUser).email
//       );
//       if (foundUser) {
//         setUser(foundUser);
//       }
//     }
//     setLoading(false);
//   }, []);

//   const signup = (email, password) => {
//     const users = JSON.parse(localStorage.getItem("users") || "[]");

//     // Check if user already exists
//     if (users.some((u) => u.email === email)) {
//       throw new Error("User already exists with this email");
//     }

//     const newUser = {
//       email,
//       username: email.split("@")[0],
//       password, // Storing password directly for demo purposes (not secure for production)
//       balance: 0,
//       isAdmin: email === "admin@idealmarket.shop",
//       transactions: [],
//     };

//     // Save user to users array
//     localStorage.setItem("users", JSON.stringify([...users, newUser]));

//     // Set as current user
//     localStorage.setItem("currentUser", JSON.stringify({ email }));
//     setUser(newUser);

//     navigate("/login");
//   };

//   const login = (email, password) => {
//     const users = JSON.parse(localStorage.getItem("users") || "[]");
//     const foundUser = users.find((u) => u.email === email);

//     if (!foundUser) {
//       throw new Error("User not found");
//     }

//     // For demo purposes - in production, use proper password hashing
//     if (foundUser.password !== password) {
//       throw new Error("Invalid password");
//     }

//     // Set as current user
//     localStorage.setItem("currentUser", JSON.stringify({ email }));
//     setUser(foundUser);

//     navigate("/");
//   };

//   const logout = () => {
//     localStorage.removeItem("currentUser");
//     setUser(null);
//     navigate("/login");
//   };

//   // context/AuthContext.jsx
//   const addFunds = (amount) => {
//     const users = JSON.parse(localStorage.getItem("users") || "[]");
//     const updatedUsers = users.map((u) => {
//       if (u.email === user.email) {
//         const transactionType = amount > 0 ? "Deposit" : "Purchase";
//         const newTransaction = {
//           id: `TX-${Date.now()}`,
//           type: transactionType,
//           amount: `${amount > 0 ? "+" : ""}$${Math.abs(amount).toFixed(2)}`,
//           date: new Date().toISOString().split("T")[0],
//           status: "Completed",
//         };

//         const updatedUser = {
//           ...u,
//           balance: u.balance + amount,
//           transactions: [...u.transactions, newTransaction],
//           // Don't add confirmation immediately
//         };

//         setUser(updatedUser);

//         // Schedule confirmation to appear after 5 minutes
//         setTimeout(() => {
//           const users = JSON.parse(localStorage.getItem("users") || "[]");
//           const updatedUsers = users.map((user) => {
//             if (user.email === u.email) {
//               return {
//                 ...user,
//                 confirmations: [
//                   ...(user.confirmations || []),
//                   {
//                     id: `CF-${Date.now()}`,
//                     type: transactionType,
//                     amount: Math.abs(amount),
//                     date: new Date().toISOString(),
//                     read: false,
//                     items:
//                       amount > 0
//                         ? null
//                         : JSON.parse(localStorage.getItem("cart"))?.items,
//                   },
//                 ],
//               };
//             }
//             return user;
//           });

//           localStorage.setItem("users", JSON.stringify(updatedUsers));
//           localStorage.setItem(
//             "currentUser",
//             JSON.stringify({ email: u.email })
//           );
//           setUser(updatedUsers.find((user) => user.email === u.email));
//         }, 5 * 60 * 1000); // 5 minutes in milliseconds

//         return updatedUser;
//       }
//       return u;
//     });

//     localStorage.setItem("users", JSON.stringify(updatedUsers));

//     // Clear cart if this was a purchase (negative amount)
//     if (amount < 0) {
//       localStorage.removeItem("cart");
//     }
    
//   };

//   const markConfirmationAsRead = (confirmationId) => {
//     const users = JSON.parse(localStorage.getItem("users") || []);
//     const updatedUsers = users.map((u) => {
//       if (u.email === user.email) {
//         const updatedConfirmations =
//           u.confirmations?.map((conf) =>
//             conf.id === confirmationId ? { ...conf, read: true } : conf
//           ) || [];

//         const updatedUser = {
//           ...u,
//           confirmations: updatedConfirmations,
//         };

//         setUser(updatedUser);
//         return updatedUser;
//       }
//       return u;
//     });

//     localStorage.setItem("users", JSON.stringify(updatedUsers));
//   };

//   const value = {
//     user,
//     loading,
//     login,
//     signup,
//     logout,
//     addFunds,
//     notification,
//     setNotification,
//     markConfirmationAsRead,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export function useAuth() {
//   return useContext(AuthContext)
// }


// context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notification, setNotification] = useState(null)
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
    
    if (users.some(u => u.email === email)) {
      throw new Error('User already exists with this email')
    }

    const newUser = {
      email,
      username: email.split('@')[0],
      password, // Note: In production, use proper password hashing
      balance: 0,
      isAdmin: email === 'admin@idealmarket.shop',
      transactions: [],
      confirmations: []
    }
    
    localStorage.setItem('users', JSON.stringify([...users, newUser]))
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

    if (foundUser.password !== password) {
      throw new Error('Invalid password')
    }

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
        const transactionType = amount > 0 ? 'Deposit' : 'Purchase'
        const newTransaction = {
          id: `TX-${Date.now()}`,
          type: transactionType,
          amount: `${amount > 0 ? '+' : ''}$${Math.abs(amount).toFixed(2)}`,
          date: new Date().toISOString().split('T')[0],
          status: 'Completed'
        }
        
        const updatedUser = {
          ...u,
          balance: u.balance + amount,
          transactions: [...u.transactions, newTransaction]
        }
        
        setUser(updatedUser)

        // Schedule confirmation to appear after 5 minutes
        setTimeout(() => {
          const users = JSON.parse(localStorage.getItem('users') || '[]')
          const updatedUsers = users.map(user => {
            if (user.email === u.email) {
              return {
                ...user,
                confirmations: [
                  ...(user.confirmations || []),
                  {
                    id: `CF-${Date.now()}`,
                    type: transactionType,
                    amount: Math.abs(amount),
                    date: new Date().toISOString(),
                    read: false,
                    items: amount > 0 ? null : JSON.parse(localStorage.getItem('cart'))?.items
                  }
                ]
              }
            }
            return user
          })
          
          localStorage.setItem('users', JSON.stringify(updatedUsers))
          localStorage.setItem('currentUser', JSON.stringify({ email: u.email }))
          setUser(updatedUsers.find(user => user.email === u.email))
          
          setNotification({
            type: 'success',
            message: `Your ${transactionType.toLowerCase()} confirmation is now available`
          })
          
          setTimeout(() => setNotification(null), 5000)
        }, 5 * 60 * 1000) // 5 minutes in milliseconds
        
        return updatedUser
      }
      return u
    })

    localStorage.setItem('users', JSON.stringify(updatedUsers))
    
    if (amount < 0) {
      localStorage.removeItem('cart')
    }
  }

  const markConfirmationAsRead = (confirmationId) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const updatedUsers = users.map(u => {
      if (u.email === user.email) {
        const updatedConfirmations = u.confirmations?.map(conf => 
          conf.id === confirmationId ? { ...conf, read: true } : conf
        ) || []
        
        const updatedUser = {
          ...u,
          confirmations: updatedConfirmations
        }
        
        setUser(updatedUser)
        return updatedUser
      }
      return u
    })

    localStorage.setItem('users', JSON.stringify(updatedUsers))
  }

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    addFunds,
    notification,
    setNotification,
    markConfirmationAsRead
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}