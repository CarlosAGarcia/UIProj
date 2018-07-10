export const port = process.env.NODE_ENV === 'development' ? 3000 : 3005;
export const url = `http://localhost:${port}/api`;
