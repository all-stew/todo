import DB from '../db/db'
import { ipcRenderer } from 'electron'

const task = {}
task.get = async function () {
  const data = await ipcRenderer.invoke('get-data-path').then((storePath) => {
    DB.initDB(storePath)
    return DB.get('test')
  })
  return data
}

export default task
