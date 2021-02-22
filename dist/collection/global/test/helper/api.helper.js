export function getMockAuthorization() {
    const authorization = {
        getAuthorization: () => {
            return {
                accessToken: '00000000-1111-2222-3333-5555555555',
                userId: 'lorem.ipsum',
                systemId: 666
            };
        },
        handleUnauthorizedAccess: () => Promise.resolve()
    };
    return authorization;
}
