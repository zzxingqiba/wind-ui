import { onBeforeMount } from 'vue'
import { generateId } from '@wind/utils'
import { defaultNamespace } from '@wind/hooks'

let cachedContainer: HTMLElement

export const POPPER_CONTAINER_ID = `${defaultNamespace}-popper-container-${generateId()}`

export const POPPER_CONTAINER_SELECTOR = `#${POPPER_CONTAINER_ID}`

const createContainer = () => {
  const container = document.createElement('div')
  container.id = POPPER_CONTAINER_ID
  container.style.position = 'absolute'
  container.style.inset = '0'
  container.style.height = '0'
  container.style.pointerEvents = 'none'
  container.style.zIndex = 'auto'
  document.body.appendChild(container)
  return container
}

export const usePopperContainer = () => {
  onBeforeMount(() => {
    if (
      !cachedContainer ||
      !document.body.querySelector(POPPER_CONTAINER_SELECTOR)
    ) {
      cachedContainer = createContainer()
    }
  })
}
