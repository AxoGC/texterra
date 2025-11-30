import type {Recipe} from ".";

const recipes: Recipe[] = [
  {
    input: [{ id: 'wheat', count: 3 }],
    output: [{ id: 'bread' }],
    condition: stat => stat.attributes.agriculture > 1,
  },
]

export default recipes
