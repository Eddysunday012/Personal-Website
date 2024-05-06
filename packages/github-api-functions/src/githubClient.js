export class githubClient {
  async getUserRepos(username) {
    const url = `https://api.github.com/users/${username}/repos`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching repos: ${response.status}`);
      }
      const data = await response.json();
      data.sort((a, b) => b.size - a.size);
      const repos = [];
      data.forEach((repo) => {
        if (repos.length < 6) {
          repos.push({
            name: repo.name,
            url: repo.html_url,
            description: repo.description,
            stargazers_count: repo.stargazers_count,
            language: repo.language,
            size: repo.size,
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
