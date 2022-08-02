import { app } from 'electron'

export function getDataPath() {
  let path = app.getPath('userData')
  return path
}
