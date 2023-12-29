// Nodes data
export const nodes = [
    { id: 1, name: "Art", url: "https://www.google.co.uk", category: "art" },
    { id: 2, name: "CompSci", url: "https://www.google.co.uk", category: "compsci" },
    { id: 3, name: "Maths", url: "https://www.google.co.uk", category: "maths" },
    { id: 4, name: "Nature", url: "https://www.google.co.uk", category: "nature"},
    { id: 5, name: "Other", url: "https://www.google.co.uk", category: "other" },
    { id: 6, name: "WIP", url: "https://www.google.co.uk", category: "draft" },
  ]
  
//Links data
export const links = [
    { source: 1, target: 6 },
    { source: 6, target: 2 },
    { source: 2, target: 3 },
    { source: 2, target: 5 },
    { source: 3, target: 4 },
  ]
  