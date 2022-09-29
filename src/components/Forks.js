import React from "react";

export const Forks = (data) => {
  const forks = data.forks.forks || [];
  const avatarUrl = data.forks.owner;
  return (
    <div className="border-2 mt-3 p-4">
      <p className="text-md font-medium mb-3">Forks:</p>
      
        <ul>
          <li className="mb-3 last:mb-0">
            <a
              href={`https://gist.github.com/${data.forks.id}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-4"
            >
              <img
                className="h-7 w-7 rounded-full object-cover"
                src={ avatarUrl.avatar_url}
                // src={avatarUrl.avatar_url}
                alt="No image found"
              />
              <span className="text-md font-medium text-black">{avatarUrl.login}</span>
            </a>
          </li>
        </ul>
    </div>
  );
};
