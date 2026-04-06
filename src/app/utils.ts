import { User } from '../types/User';

export function isUserArray(data: User[] | { error: string }): data is User[] {
  return Array.isArray(data);
}
