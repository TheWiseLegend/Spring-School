export const config = {
  apiUrls: {
    auth: import.meta.env.VITE_AUTH_SERVICE_URL || 'http://localhost:8080',
    user: import.meta.env.VITE_USER_SERVICE_URL || 'http://localhost:8082',
    course: import.meta.env.VITE_COURSE_SERVICE_URL || 'http://localhost:8083',
    notification: import.meta.env.VITE_NOTIFICATION_SERVICE_URL || 'http://localhost:8084',
  },
  jwt: {
    tokenKey: import.meta.env.VITE_JWT_TOKEN_KEY || 'spring_school_token',
  },
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Spring School',
  },
} as const;
