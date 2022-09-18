export function throwError(location: string, message: string): never {
  throw new Error(`[naive/${location}]: ${message}`)
}
