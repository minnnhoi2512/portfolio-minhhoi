import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Octokit } from '@octokit/rest';

interface CommitData {
  date: string;
  commits: number;
}

interface WeekData {
  week: number;
  total: number;
  days: number[];
}

interface Repository {
  name: string;
  owner: string;
}

const GitHubCommitChart = () => {
  const [commitData, setCommitData] = useState<CommitData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllCommitData = async () => {
      try {
        const octokit = new Octokit({
          auth: import.meta.env.VITE_GITHUB_TOKEN
        });

        // Get all repositories for the user
        const reposResponse = await octokit.repos.listForUser({
          username: 'minnnhoi2512',
          per_page: 100,
        });

        const repositories: Repository[] = reposResponse.data.map(repo => ({
          name: repo.name,
          owner: repo.owner.login
        }));

        // Fetch commit activity for each repository
        const allCommitData: { [key: string]: number } = {};
        
        for (const repo of repositories) {
          try {
            const response = await octokit.repos.getCommitActivityStats({
              owner: repo.owner,
              repo: repo.name,
            });

            if (response.data) {
              response.data.forEach((week: WeekData) => {
                const date = new Date(week.week * 1000).toLocaleDateString();
                allCommitData[date] = (allCommitData[date] || 0) + week.total;
              });
            }
          } catch (repoError) {
            console.warn(`Could not fetch data for ${repo.name}:`, repoError);
          }
        }

        // Convert to array format for the chart
        const data = Object.entries(allCommitData).map(([date, commits]) => ({
          date,
          commits
        })).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        setCommitData(data);
        setLoading(false);
      } catch (error: unknown) {
        console.error('Error fetching commit data:', error);
        if (error && typeof error === 'object' && 'status' in error) {
          const err = error as { status: number; message: string };
          if (err.status === 404) {
            setError('User not found. Please check the username.');
          } else if (err.status === 401) {
            setError('Authentication failed. Please check your GitHub token.');
          } else if (err.status === 403) {
            setError('Access denied. Please check your GitHub token permissions.');
          } else {
            setError(`Failed to fetch commit data: ${err.message}`);
          }
        } else {
          setError('An unexpected error occurred');
        }
        setLoading(false);
      }
    };

    fetchAllCommitData();
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center h-[400px]">
      <div className="text-lg">Loading commit data from all repositories...</div>
    </div>
  );
  
  if (error) return (
    <div className="flex items-center justify-center h-[400px]">
      <div className="text-lg text-red-500 max-w-md text-center">
        {error}
        <br />
        <span className="text-sm mt-2 block">
          Make sure you have set up your GitHub token in the .env file as VITE_GITHUB_TOKEN
        </span>
      </div>
    </div>
  );

  return (
    <div className="w-full h-[400px] p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Total GitHub Commit Activity</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={commitData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#666" />
          <XAxis 
            dataKey="date" 
            stroke="#666"
            tick={{ fill: '#666' }}
          />
          <YAxis 
            stroke="#666"
            tick={{ fill: '#666' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <Bar 
            dataKey="commits" 
            fill="#8884d8"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GitHubCommitChart; 