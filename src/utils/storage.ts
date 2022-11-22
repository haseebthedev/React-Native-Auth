import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getFromAsyncStorage(key: string): Promise<any | null> {
    try {
        const almostThere = await AsyncStorage.getItem(key)
        if (almostThere) {
            return JSON.parse(almostThere)
        } else {
            return null
        }
    } catch {
        return null
    }
}

export async function setInAsyncStorage(key: string, value: any): Promise<boolean> {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
        return true
    } catch {
        return false
    }
}

export async function removeFromAsyncStorage(key: string): Promise<void> {
    try {
        await AsyncStorage.removeItem(key)
    } catch { }
}

export async function clearFromAsyncStorage(): Promise<void> {
    try {
        await AsyncStorage.clear()
    } catch { }
}
