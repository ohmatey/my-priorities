import { prioritiesList } from '../../data/'

const findPriority = id => prioritiesList.find(priority => priority.id === id)

export default findPriority
