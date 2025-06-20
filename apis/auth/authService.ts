interface LoginParams {
    user: {
      email: string
      password: string
      role: string
    }
  }
  
  export async function loginUser(params: LoginParams) {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
      credentials: "include",
    })
  
    const token = response.headers.get("Authorization")
    const res = await response.json()
  
    if (!response.ok) {
      throw new Error(res?.status?.message || "Login failed")
    }
  
    return { token, res }
  }

  interface signupParams {
    user: {
      first_name: string
      last_name: string
      email: string
      password: string
      role: string
    }
  }
  

  export async function signupUser(params: signupParams) {
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
      credentials: "include",
    })
  
    const token = response.headers.get("Authorization")
    const res = await response.json()
  
    if (!response.ok) {
      throw new Error(res?.status?.message || "Signup failed")
    }
  
    return { token, res }
  }
  
  export async function logoutUser() {
    const token = localStorage.getItem("token")
    const response = await fetch("http://localhost:3000/logout", {
      method: "DELETE",
      headers: {
        "Authorization": `${token}`,
        "Content-Type": "application/json",
      },
      credentials: "include"
    })
  
    const data = await response.json()
  
    if (!response.ok) {
      throw new Error(data?.status?.message || "Logout failed")
    }

    return data
  }
  