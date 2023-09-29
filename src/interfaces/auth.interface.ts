export interface State {
  token: string; 
  profile: object | null;
  isAuth: boolean;
}

export interface Actions {
  setToken: (token: string) => void;
  setProfile: (profile: object) => void;
  setLogout: () => void;
}

export interface PropsProtecredRoutes {
  isAllowed:  boolean;
  children?: React.ReactNode;
} 