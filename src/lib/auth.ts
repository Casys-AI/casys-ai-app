// $lib/auth.ts
import { writable, get } from 'svelte/store';

export interface ApiKeyInfo {
    prefix: string;
    suffix: string;
    maskedKey: string;
}

interface AuthState {
    isLoggedIn: boolean;
    username: string | null;
    apiKey: string | null;
    apiKeyInfo: ApiKeyInfo | null;
}

function createAuth() {
    const { subscribe, set, update } = writable<AuthState>({
        isLoggedIn: false,
        username: null,
        apiKey: null,
        apiKeyInfo: null
    });

    return {
        subscribe,
        setUsername: (username: string) => {
            update(state => ({ ...state, username }));
        },
        getUsername: () => {
            return get({ subscribe }).username;
        },
        login: (username: string, apiKey: string, apiKeyInfo: ApiKeyInfo) => {
            update(state => ({
                ...state,
                isLoggedIn: true,
                username,
                apiKey,
                apiKeyInfo
            }));
        },
        logout: () => {
            set({ isLoggedIn: false, username: null, apiKey: null, apiKeyInfo: null });
        },
        checkAuth: () => {
            // Implement logic to check authentication status if needed
        }
    };
}

export const auth = createAuth();