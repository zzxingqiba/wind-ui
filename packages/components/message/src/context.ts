export const messageProviderInjectionKey = Symbol('MessageProviderInjectionKey')
export const messageApiInjectionKey = Symbol('MessageApiInjectionKey')
let seed = 1
export const increaseSeedKey = () => {
  return `MESSAGE_UNIQUE_KEY_${seed++}`
}
