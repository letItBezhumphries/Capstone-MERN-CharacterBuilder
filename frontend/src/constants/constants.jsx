export const BASEURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:5005' : '';

export const CHARACTERS_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5005/api/characters'
    : '';

export const MONSTERS_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5005/api/monsters'
    : '';

export const DUNGEONS_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5005/api/dungeons'
    : '';

export const USERS_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5005/api/users'
    : '';

export const OPENDDAPIURL = '';
