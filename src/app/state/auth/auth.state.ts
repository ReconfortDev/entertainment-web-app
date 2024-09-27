import { User } from '../../models/auth';


export interface AuthState {
  users: User[];
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const initialAuthState: AuthState = {
  users: [],
  user: null,
  loading: false,
  error: null
};
