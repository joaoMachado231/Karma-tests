import { UniqueServiceId as UniqueIdService } from './unique-id.service'

const service = new UniqueIdService

describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix} should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app')
    expect(id.startsWith('app-')).toBeTrue()
  })

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix} should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set()

    for(let i = 0; i < 50; i++){
      ids.add(service.generateUniqueIdWithPrefix('app'))
    }

    expect(ids.size).toBe(50)
  })

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generated ids when called`, () => {
    service.generateUniqueIdWithPrefix('app')
    service.generateUniqueIdWithPrefix('app')

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2)
  })
})
