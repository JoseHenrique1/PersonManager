export const personDbSchema = {
  $id: "personDb",
  type: "object",
  properties: {
    id: { type: "string" },
    name: {type: "string"},
    age: { type: "integer" },
    content: { type: "string" },
  }
}

export const personSchema = {
  $id: "person",
  type: "object",
  properties: {
    name: {type: "string"},
    age: { type: "integer" },
    content: { type: "string" }
  },
  required: ["name"]
}

export const getPersonsSchema = {
  response: {
    200: {
      type: "array",
      items: { $ref: "personDb" }
    }
  }
}

export const getPersonSchema = {
  params: {
    type: "object",
    properties: {
      id: { type: 'string', default: " " }
    },
    required: ["id"]
  },
  response: {
    200: {$ref: "personDb"}
  }
}

export const postPersonSchema = {
  body: {$ref: "person"},
  response: {
    200: {$ref: "personDb"}
  }
}

export const updatePersonSchema = {
  params: {
    type: "object",
    properties: {
      id: { type: 'string', default: " " }
    },
    required: ["id"]
  },
  body: {$ref: "person"},
  response: {
    200: {$ref: "personDb"}
  }
}

export const deletePersonSchema = {
  params: {
    type: "object",
    properties: {
      id: { type: 'string', default: " " }
    },
    required: ["id"]
  },
  response: {
    200: {$ref: "personDb"}
  }
}


