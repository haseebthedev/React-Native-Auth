import React, { useState, useEffect } from 'react';
import { StackParamList } from '../../App';
import { ScreenEnum } from '../enums';
import { getFromAsyncStorage } from '../utils/storage';

/**
 * This is a mock response interface as the given endpoint in task was not working.
 */
interface mockUserResponse {
    _id: string,
    access_token: string,
    refresh_token: string,
    user: {
        _id: string,
        firstname: string,
        lastname: string,
        email: string
    }
}

export const useAuth = () => {
    const [initialRoute, setInitialRoute] = useState<keyof StackParamList>();
    const [userSession, setUserSession] = useState<mockUserResponse>();
    const [loading, setLoading] = useState<boolean>(true);

    /**
     * Checking if our app is already having any user session.
     */
    const checkUserSession = async () => {
        const result = await getFromAsyncStorage('USER:SESSION');
        if (result) {
            setUserSession(result)
            setInitialRoute(ScreenEnum.HOME)
            setLoading(false)
        } else {
            setInitialRoute(ScreenEnum.LOGIN)
            setLoading(false)
        }
    }


    useEffect(() => {
        checkUserSession()
    }, [])

    return {
        initialRoute, userSession, loading
    } as const;
}