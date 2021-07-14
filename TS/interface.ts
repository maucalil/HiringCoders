interface User {
    name: string;
    email: string;
    address?: string;
}

function getUser(): User{
    return {
        name: 'Maurício',
        email: 'mauricio@mauricio.com'
    }
}

function setUser(usuario: User){
    // ...
}