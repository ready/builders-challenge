import generateResolver from '../../utils/generateResolver'

interface Entity {
  id: number
  name: string
  description?: string
  createdAt: string
}

interface EntityInput {
  name: string
  description?: string
}

interface EntityDatabase {
  [id: number]: Entity
}

const entities: EntityDatabase = {}
let index = 0

/**
 * Gets an entity from the database
 * @param id - the id of the entity to retrieve
 * @returns the entity matching the given id, if available
 */
const getEntity = (id: number): Entity => {
  if (id in entities) {
    return entities[id]
  }

  throw new Error('No such entity with specified id')
}

/**
 * Creates a new entity and adds it to the database
 * @param entity - the name and description of the entity
 * @returns the new entity just created
 */
const createEntity = (entity: EntityInput): Entity => {
  const id = index += 1
  entities[id] = {
    ...entity,
    id,
    createdAt: (new Date()).toString()
  }
  return entities[id]
}

/**
 * Updates an entity in the database with new data
 * @param entity - the new name and description of the entity
 * @returns the entity just updated, if available
 */
const updateEntity = (id: number, entity: EntityInput): Entity => {
  if (id in entities) {
    entities[id] = { ...entities[id], ...entity }
    return entities[id]
  }

  throw new Error('No such entity with specified id')
}

/**
 * Deletes an entity from the database
 * @param id - the id of the entity to delete
 * @returns true if the operation was successful
 */
const deleteEntity = (id: number): boolean => {
  if (id in entities) {
    delete entities[id] // eslint-disable-line @typescript-eslint/no-dynamic-delete
    return true
  }

  throw new Error('No such entity with specified id')
}

export default {
  Query: {
    getEntity: generateResolver(({ args }) => getEntity(args.id))
  },
  Mutation: {
    createEntity: generateResolver(({ args }) => createEntity(args.entity)),
    updateEntity: generateResolver(({ args }) => updateEntity(args.id, args.entity)),
    deleteEntity: generateResolver(({ args }) => deleteEntity(args.id))
  }
}
