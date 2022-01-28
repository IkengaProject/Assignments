let genericTest = (testName, resultLocation , func, param, expectedValue) => {
  console.log(`Running ${testName}`)
  let case1 = param
  let testCaseElem = document.getElementById(resultLocation)
  let result = func(case1);
  testCaseElem.appendChild(responseElem((result === expectedValue), testName,
  expectedValue, result, param))
}

let responseElem = (bool, testName, expected, actual, input) => {
  let node = document.createElement("p")
  let successMessage =  `${testName}: Success, Expected result: ${expected},
  Actual Output: ${actual}, Input: ${input}`
  let failMessage = `Failed ${testName}: Expected result: ${expected}, Actual Output: ${actual}, Input ${input}`
  node.innerText = (bool) ? successMessage : failMessage
  node.className = (bool) ? "success" : `fail`
  return node
}
