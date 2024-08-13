'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

type UserRoleContextData = {
  role: string;
  setRole: (role: string) => void;
};

const UserRoleContext = createContext({} as UserRoleContextData);

export function UserRoleContextProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState('admin');

  return (
    <UserRoleContext.Provider value={{ role, setRole }}>
      {children}
    </UserRoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(UserRoleContext);

  if (!context) {
    throw new Error('useRole must be used within an UserRoleContextProvider');
  }

  return context;
}
