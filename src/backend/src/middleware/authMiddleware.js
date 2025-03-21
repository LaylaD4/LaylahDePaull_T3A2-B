const jwt = require("jsonwebtoken");

// Middleware function to check if a user has a valid token
async function validateToken(request, response, next) {
    try {
        // Get the token from the request headers
        const token = request.headers.jwt; 

        // If no token is found, the user will be denied access
        if (!token) {
            return response
            .status(401)
            .json({ message: "Access denied. No token provided." });
        }

        // Decode the token using the secret key to get the user's info (userId, isAdmin)
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 

        // Add the decoded user info (userId and isAdmin) to the request so it can be accessed in later middleware (eg; adminAuth) or routes.
        request.authUserData = decoded; 

        // Token is valid, allow request to continue
        next();

    } catch (error) {
        response
        .status(403)
        .json({ message: error.message });
    }
}

// Middleware function to check if the user is an admin
async function adminAuth(request, response, next) {
     
    // Check if decoded token (stored in authUserData) exists and if user is an admin. If not, deny access.
    if (!request.authUserData || !request.authUserData.isAdmin) {
        return response
        .status(403)
        .json({ message: "Access denied. Admins only." });
    }
    // User is an admin, allow the request to continue
    next();
}

module.exports = {
    validateToken,
    adminAuth
};