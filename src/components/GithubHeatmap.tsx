import { GitHubCalendar } from "react-github-calendar";

export default function GithubHeatmap() {
  return (
    <div className="mt-32 text-center">
      <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
        GitHub Activity
      </h3>

      <div className="flex justify-center">
        <GitHubCalendar username="damasvasree-nagaraj" />
      </div>
    </div>
  );
}