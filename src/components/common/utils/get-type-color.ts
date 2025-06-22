import type { Post } from '@/constants';

export const getTypeColor = (type: Post['type']) => {
  switch (type) {
    case 'announcement':
      return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
    case 'workshop':
      return 'bg-azure-100 text-azure-800 dark:bg-azure-900/30 dark:text-azure-300';
    case 'competition':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  }
};
