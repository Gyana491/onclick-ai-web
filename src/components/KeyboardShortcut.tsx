import React from 'react';

interface KeyboardShortcutProps {
  keys: string[];
  className?: string;
  description?: string;
}

export default function KeyboardShortcut({ keys, className = '', description }: KeyboardShortcutProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        {keys.map((key, index) => (
          <React.Fragment key={index}>
            <kbd className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-semibold text-gray-800 bg-gray-100 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600">
              {key}
            </kbd>
            {index < keys.length - 1 && (
              <span className="text-gray-500 font-medium">+</span>
            )}
          </React.Fragment>
        ))}
      </div>
      {description && (
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          {description}
        </span>
      )}
    </div>
  );
} 