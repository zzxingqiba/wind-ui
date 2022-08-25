import { computed, unref } from 'vue'

export const defaultNamespace = 'w'

// B__E--M
const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  let cls = `${namespace}-${block}`
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}

export const useNamespace = (block: string) => {
  const namespace = computed(() => defaultNamespace)

  const b = (blockSuffix = '') =>
    _bem(unref(namespace), block, blockSuffix, '', '')
  const e = (element?: string) =>
    element ? _bem(unref(namespace), block, '', element, '') : ''
  const m = (modifier?: string) =>
    modifier ? _bem(unref(namespace), block, '', '', modifier) : ''
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element
      ? _bem(unref(namespace), block, blockSuffix, element, '')
      : ''
  const em = (element?: string, modifier?: string) =>
    element && modifier
      ? _bem(unref(namespace), block, '', element, modifier)
      : ''
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier
      ? _bem(unref(namespace), block, blockSuffix, '', modifier)
      : ''
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? _bem(unref(namespace), block, blockSuffix, element, modifier)
      : ''

  // --w_xxx;
  const cssVar = (object: Record<string, string>) => {
    const cssVarMap: Record<string, string> = {}
    for (const key in object) {
      cssVarMap[`--${namespace.value}_${key}`] = object[key]
    }
    return cssVarMap
  }

  // --w-block_xxx
  const cssVarBlock = (object: Record<string, string>) => {
    const cssVarMap: Record<string, string> = {}
    for (const key in object) {
      cssVarMap[`--${namespace.value}-${block}_${key}`] = object[key]
    }
    return cssVarMap
  }

  // --w-xxx
  const cssVarName = (name: string) => `--${namespace.value}_${name}`

  // --w-block_xxx
  const cssVarBlockName = (name: string) =>
    `--${namespace.value}-${block}_${name}`

  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    cssVar,
    cssVarBlock,
    cssVarName,
    cssVarBlockName,
  }
}
