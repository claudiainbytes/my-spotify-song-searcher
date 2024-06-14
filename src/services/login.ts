import axios, { AxiosResponse } from 'axios'

const baseUrl: string = 'https://accounts.spotify.com/api/token'

interface Credential {
  grant_type: string,
  client_id: string,
  client_secret: string,
}

interface Token {
  access_token: string,
  token_type: string,
  expires_in: string,
}

const login = async (credential: Credential): Promise<Token> => {
  const response: AxiosResponse<Token> = await axios.post(baseUrl, credential, { headers: {'content-type': 'application/x-www-form-urlencoded'} })
  return response.data
}

export default { login }

