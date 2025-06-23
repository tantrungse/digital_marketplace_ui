interface LoginParams {
    email: string
    password: string
    role: string
  }
  
  export async function loginUser(params: LoginParams) {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: params }),
      // credentials: "include",
    })
  
    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.status?.message || "Login failed")
    }
  
    return response.json()
  }
  