type Mods = Record<string, string | boolean> 

export const classNames = (cls: string, mods: Mods, additional: string[]): string => {
    return [
        cls, 
        ...additional, 
        ...Object.entries(mods)
            .filter(([cls, value]) => !!value)
            .map(([cls, value]) => cls)
    ].join(' ')
}