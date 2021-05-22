class GitHub {

    // As we are using a class with a constructor we will be using the client id and client secret
    constructor(){
        this.client_id = '3bd22df8ebf9c033d6fa',
        this.client_secret = '6ed66c1baaca823f440cd1c10307592d2fc3ca6e'

    }

    // Get user method using Async we will be making two requests one for user and one for the repo's of the user
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}