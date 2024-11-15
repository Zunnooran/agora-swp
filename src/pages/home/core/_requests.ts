import axios from 'axios';

/* eslint-disable @typescript-eslint/no-explicit-any */
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL as string;
const api_key = import.meta.env.VITE_API_KEY as string;

export function getTokens(): Promise<any> {
  return axios
    .get(apiBaseUrl, {
      headers: { Authorization: `Bearer ${api_key}`, 'Content-Type': 'application/json' },
    })
    .then((response) => response.data);
}
