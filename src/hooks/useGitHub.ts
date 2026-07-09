import { useEffect, useState } from 'react';

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export interface GitHubStats {
  followers: number;
  publicRepos: number;
  repos: GitHubRepo[];
}

interface State {
  data: GitHubStats | null;
  loading: boolean;
  error: boolean;
}

const CACHE_KEY = 'github-stats-v1';
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes — stays well under the 60 req/h limit

/** Fetches public GitHub profile stats + recent repos, cached in sessionStorage. */
export function useGitHub(username: string) {
  const [state, setState] = useState<State>({ data: null, loading: true, error: false });

  useEffect(() => {
    let cancelled = false;

    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        const { at, data } = JSON.parse(cached) as { at: number; data: GitHubStats };
        if (Date.now() - at < CACHE_TTL) {
          setState({ data, loading: false, error: false });
          return;
        }
      }
    } catch {
      /* corrupted cache — refetch */
    }

    (async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=owner`
          ),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error');

        const user = await userRes.json();
        const repos = (await reposRes.json()) as GitHubRepo[];
        const data: GitHubStats = {
          followers: user.followers ?? 0,
          publicRepos: user.public_repos ?? 0,
          repos,
        };

        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }));
        if (!cancelled) setState({ data, loading: false, error: false });
      } catch {
        if (!cancelled) setState({ data: null, loading: false, error: true });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [username]);

  return state;
}
