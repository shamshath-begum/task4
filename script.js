
// Ans:To compare two JSON objects in JavaScript and check if they have the same properties (regardless of the order), you can use the following approach:


 obj1 = { name: "person1", age: 5 };
 obj2 = { name: "person1", age: 5 };

function compareJSON(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const areEqual = compareJSON(obj1, obj2);
console.log(areEqual); // true


// In the above code, the `compareJSON` function takes two JSON objects (`obj1` and `obj2`) as input and performs a property-based comparison. Here's how it works:

// 1. First, we extract the keys (property names) from both `obj1` and `obj2` using `Object.keys()`.
// 2. We check if the number of keys in `obj1` is equal to the number of keys in `obj2`. If they are not equal, the objects cannot have the same properties, so we return `false`.
// 3. Next, we iterate over the keys of `obj1` using a `for...of` loop.
// 4. For each key, we check if it exists in `obj2` using `keys2.includes(key)`. If it doesn't exist, or if the values of the corresponding properties are not equal, we return `false`.
// 5. If the loop completes without returning `false`, it means that all properties in `obj1` are present in `obj2` with equal values, so we return `true`.

// In the provided example, the `areEqual` variable will be `true` since `obj1` and `obj2` have the same properties and values, even though the order of properties is not the same.





