// Nodes data
export const nodes = [
    { id: 1, name: "The Ultimate Abstraction", url: "/mondrian", category: "art" },
    { id: 2, name: "Technology", url: "", category: "compsci" },
    { id: 3, name: "Maths", url: "", category: "maths" },
    { id: 4, name: "Nature", url: "", category: "nature"},
    { id: 5, name: "Other", url: "", category: "other" },
    { id: 6, name: "External", url: "", category: "external" },
  ]
  
//Links data
export const links = [
    { source: 1, target: 6 },
    { source: 6, target: 2 },
    { source: 2, target: 3 },
    { source: 2, target: 5 },
    { source: 3, target: 4 },
  ]
  