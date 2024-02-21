/**
 * Routes that are accessible to the public
 * These routes don't require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * Routes that are accessible who loggedin
 * These routes require authentication
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

//
//
/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in\
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
