const getUserGitHubAPI  = async () => {
    const APIResponse = await fetch('https://api.github.com/users/juliolimacostavalladares');
    const gitHubUser = await APIResponse.json();
    console.log(gitHubUser.avatar_url);
}
getUserGitHubAPI()