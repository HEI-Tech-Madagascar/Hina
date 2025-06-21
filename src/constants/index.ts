import { Calendar, GraduationCap, Home, MessageCircle, TrendingUp, Trophy, Users } from 'lucide-react';
import { Fiantso, Jessy, Koloina } from '@/assets';

export type Post = {
  id: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  type: 'announcement' | 'workshop' | 'competition' | 'general';
};

export const navigation = [
  { id: 'home', name: 'Accueil', icon: Home, path: '' },
  { id: 'club-life', name: 'Vie du Club', icon: Users, path: 'club-life' },
  {
    id: 'student-life',
    name: 'Vie Étudiante',
    icon: GraduationCap,
    path: 'student-life',
  },
  {
    id: 'messages',
    name: 'Messages',
    icon: MessageCircle,
    path: 'messages',
  },
];

export const stats = [
  {
    label: 'Membres actifs',
    value: '0',
    icon: Users,
    color: 'from-ocean-500 to-azure-600',
  },
  {
    label: 'Événements ce mois',
    value: '0',
    icon: Calendar,
    color: 'from-ocean-500 to-azure-600',
  },
  {
    label: 'Projets réalisés',
    value: '0',
    icon: Trophy,
    color: 'from-ocean-500 to-azure-600',
  },
  {
    label: 'Workshops organisés',
    value: '0',
    icon: TrendingUp,
    color: 'from-ocean-500 to-azure-600',
  },
];

export const posts: Post[] = [
  {
    id: '1',
    author: {
      name: 'Jessy Henintsoa Randriamizara',
      avatar: Jessy,
      role: 'Président HEI Tech',
    },
    content:
      "Bienvenue dans la nouvelle plateforme Hina ! Cette plateforme a été créée pour renforcer les liens entre les membres de notre communauté tech. N'hésitez pas à partager vos projets, poser des questions et collaborer ensemble !",
    timestamp: 'il y a 2h',
    likes: 0,
    comments: 0,
    type: 'announcement',
  },
  {
    id: '2',
    author: {
      name: 'Fiantso Harena',
      avatar: Fiantso,
      role: 'Membre HEI Tech',
    },
    content:
      'Workshop React & TypeScript prévu pour ce samedi ! Nous allons construire une application complète en utilisant les dernières bonnes pratiques. Inscriptions ouvertes sur le lien en bio',
    image: 'https://i.pinimg.com/736x/1b/93/9b/1b939bf10e7c437b01c8eac67a941c84.jpg',
    timestamp: 'il y a 5h',
    likes: 0,
    comments: 0,
    type: 'workshop',
  },
  {
    id: '3',
    author: {
      name: 'Koloina Maherison',
      avatar: Koloina,
      role: 'Bureau HEI Tech',
    },
    content:
      "Super fier de présenter mon projet! Merci à toute l'équipe pour les conseils durant le développement. Le code source est disponible sur mon GitHub",
    timestamp: 'hier',
    likes: 0,
    comments: 0,
    type: 'general',
  },
];
