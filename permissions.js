const ADMIN_PROFILE = '2';

function isAdmin(profile) {
    return profile === ADMIN_PROFILE;
}

module.exports = (request) => {

    const user = request.user;
    if (!user) return false;

    const originalUrl = request.originalUrl;
    const profile = request.user.profile;
    //no futuro, a possibilidade de restringir por METHOD (GET, POST, ETC)
    const method = request.method;

    console.log(originalUrl);

    switch (originalUrl) {
        case '/': return true;
        case '/index': return true;
        case '/login': return true;
        case '/signup': return true;
        case '/reports': { return isAdmin(profile); }
        default: return false;
    }

}