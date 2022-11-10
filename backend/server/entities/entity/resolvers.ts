import generateResolver from '../../utils/generateResolver'

const entities = {}
let index = 0

export default {
  Query: {
    getEntity: generateResolver(({
      args: {
        id
      }
    }) => {
      if (id in entities) {
        return entities[id]
      } else {
        throw new Error('No such entity with specified id')
      }
    })
  },
  Mutation: {
    createEntity: generateResolver(({
      args: {
        entity
      }
    }) => {
      const id = index += 1
      entities[id] = { 
        ...entity, 
        id, 
        createdAt: new Date() 
      }
      return entities[id] 
    }),
    updateEntity: generateResolver(({
      args: {
        id, 
        entity
      }
    }) => {
      if (id in entities) {
        entities[id] = { ...entities[id], ...entity }
        return entities[id]
      } else {
        throw new Error('No such entity with specified id')
      }
    }),
    deleteEntity: generateResolver(({
      args: {
        id
      }
    }) => {
      if (id in entities) {
        delete entities[id]
        return true
      } else {
        throw new Error('No such entity with specified id')
      }
    })
  }
}
