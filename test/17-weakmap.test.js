test('has a set method', () => {
  const key = {
    name: 'Aaron'
  }
  const value = {
    twitter: '@js_dev',
    gplus: '+AaronFrost'
  }
  // Create a new WeakMap called 'myMap'
  // Add a new entry. Use key as the key and values as the value
  let myMap = new WeakMap()
  myMap.set(key, value)
  expect(myMap.has(key)).toBe(true)
})

test(`should enable private members in classes`, () => {
  // If you make it this far, write a class with private member variables, using WeakMaps
  let member = new WeakMap()
  class Person {
    constructor(name, age) {
      const mem = {
        _name: name,
        _age: age
      }
      member.set(this, mem)
    }

    getName() {
      return member.get(this)._name
    }

    getAge() {
      return member.get(this)._age
    }
  }

  const person = new Person('Kent C. Dodds', 26)
  expect(person._name).toBeUndefined()
  expect(person.getName()).toBe('Kent C. Dodds')
  expect(person._age).toBeUndefined()
  expect(person.getAge()).toBe(26)
})