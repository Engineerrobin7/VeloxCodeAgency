// src/api.tsx

const API_URL = 'http://localhost:3001';

export const signup = async (email, password) => {
  const response = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};

export const login = async (email) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  return response.json();
};

export const addData = async (collectionName, data) => {
  const response = await fetch(`${API_URL}/data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ collectionName, data }),
  });
  return response.json();
};

export const getData = async (collectionName) => {
  const response = await fetch(`${API_URL}/data/${collectionName}`);
  return response.json();
};
