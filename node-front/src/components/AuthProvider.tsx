import React, { createContext, useContext, useState } from 'react';

// Auth 상태 관리용 Context 생성
interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthContext를 제공하는 Provider 컴포넌트
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        const storedAuth = localStorage.getItem('isAuthenticated');
        return storedAuth === 'true';
    });

    const login = () => {
       
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
    }
    const logout = () => {setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');

    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// useAuth 훅 생성 (Context 사용 편리성을 위해)
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};