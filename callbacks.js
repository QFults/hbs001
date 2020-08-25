const adder = (a, b, cb) => {
  const sum = a + b
  cb(sum)
}

// adder(5, 7, sum => {
//   console.log(sum)
// })

const subtracter = (a, b, cb) => {
  const result = a - b
  cb(result)
}

// subtracter(5, 7, result => {
//   console.log(result)
// })

const multiplier = (a, b, cb) => {
  const result = a * b
  cb(result)
}

// multiplier(5, 7, result => {
//   console.log(result)
// })

const divider = (a, b, cb) => {
  const result = a / b
  cb(result)
}

// divider(5, 7, result => {
//   console.log(result)
// })
