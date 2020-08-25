const adder = (a, b, cb) => {
  const sum = a + b
  cb(sum)
}

adder(5, 7, sum => {
  console.log(sum)
})
adder(12, 3, sum => {
  console.log(`The sum is ${sum}`)
})
adder(1, 1, hotdog => {
  console.log(hotdog + 5)
})
