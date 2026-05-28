interface LoginResponse {
  user: {
    id: number;
    name: string;
    email: string;
  };
  token: string;
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: { id: 1, name: "Motorista", email },
        token: "fake-jwt-token-123"
      });
    }, 1500);
  });
}