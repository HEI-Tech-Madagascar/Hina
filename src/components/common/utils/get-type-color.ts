import type { Post } from '@/constants';

export const getTypeColor = (type: Post['type']) => {
  switch (type) {
    case 'announcement':
      return 'bg-red-100 text-red-800';
    case 'workshop':
      return 'bg-azure-100 text-azure-800';
    case 'competition':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
