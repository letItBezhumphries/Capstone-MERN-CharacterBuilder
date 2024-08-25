export const BASE_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:5005' : '';

export const CHARACTERS_URL =
  process.env.NODE_ENV === 'development' ? '/api/characters' : '';

export const MONSTERS_URL =
  process.env.NODE_ENV === 'development' ? '/api/monsters' : '';

export const DUNGEONS_URL =
  process.env.NODE_ENV === 'development' ? '/api/dungeons' : '';

export const USERS_URL =
  process.env.NODE_ENV === 'development' ? '/api/users' : '';
