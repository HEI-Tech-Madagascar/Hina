import { GraduationCap, Home, MessageCircle, Users } from 'lucide-react';

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
