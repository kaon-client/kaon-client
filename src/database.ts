import { DATABASE, ITERATION, VERSION } from './constants'

// updates
export async function checkForUpdate(): Promise<boolean> {
    let versionData = await fetch(DATABASE + 'version.json')
    let version = await versionData.json()

    if (version.version > VERSION || (version.version == VERSION && version.i > ITERATION)) {
        return true
    }

    return false
}

export async function getJSON<T>(file: string): Promise<T> {
    let data = await fetch(DATABASE + file)
    if (data.status == 200) {
        return await data.json()
    } else {
        throw new Error('Failed to fetch data')
    }
}
