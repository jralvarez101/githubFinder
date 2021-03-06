class UI{
    constructor(){
        this.profile = document.getElementById('profile');
        
    }

    // Display profile in UI
    showProfile(user) {
        this.profile.innerHTML = `
          <div class="card card-body mb-3">
            <div class="row">
              <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
              </div>
              <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary ">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success ">Followers: ${user.followers}</span>
                <span class="badge badge-info ">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Website/Blog: ${user.blog}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
              </div>
            </div>
          </div>
          <h3 class="page-heading mb-3">Latest Repos</h3>
          <div id="repos"></div>
        `;
    }

    // Show repos
    showRepos(repos){
        
        // TIP: use output variable when working with arrays (repos is an array)
        let output= '';

        repos.forEach(repo => {
            output+=`
            <div class="card card-body mb-2">
                <div class="row">
                    <div class= "col-md-6">
                        <a href="${repo.html_url} target="blank" >${repo.name}</a>
                    </div>
                    <div class= "col-md-6">
                    <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary ">Watchers ${repo.watchers_count}</span>
                    <span class="badge badge-success ">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
        })
        
        // Output repositories
        document.getElementById('repos').innerHTML = output;

    }

    // Show alert message
    showAlert(message, className){
        // Clear any remaining alerts
        this.clearAlert();
        // Create Div from scratch
        const div = document.createElement('div');
        // Add className
        div.className = className
        // Add text (message) !! us appendChild because text is a child
        div.appendChild(document.createTextNode(message));
        // Inserting process -- first get a parent
        const container = document.querySelector('.searchContainer');
        // Get the search box
        const search = document.querySelector('.search');
        // Insert before search box
        container.insertBefore(div, search);

        // timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000)

    }

    // Clear alert message so that they don't stack up
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        // check to see if there is an alert already
        if(currentAlert){
            currentAlert.remove();
        }
    }

    // Clear profile
    clearProfile(){
        this.profile.innerHTML = '';
    }
}