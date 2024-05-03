export class githubClient {
  async getUserRepos(username) {
    const url = `https://api.github.com/users/${username}/repos`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching repos: ${response.status}`);
      }
      const data = await response.json();
      const repos = [];
      data.forEach((repo) => {
        if (repo.stargazers_count > 0) {
          repos.push({
            name: repo.name,
            url: repo.html_url,
            description: repo.description,
            stargazers_count: repo.stargazers_count,
            language: repo.language,
          });
        }
      });
      return repos;
      // return data;
    } catch (error) {
      console.error("Error:", error);
      return []; // Handle error by returning an empty array
    }
  }
}
