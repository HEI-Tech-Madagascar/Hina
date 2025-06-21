import type { Post } from '@/constants';

export const getTypeText = (type: Post['type']) => {
  switch (type) {
    case 'announcement':
      return 'Annonce';
    case 'workshop':
      return 'Workshop';
    case 'competition':
      return 'Compétition';
    default:
      return 'Général';
  }
};
