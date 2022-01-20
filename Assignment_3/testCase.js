let testCase1 = (functionParam) => {
  console.log("Running test case 1")
  // howManyEven = [1,2,3,4,5]
  let case1 = [1,2,3,4,5]
  let testCase1Elem = document.getElementById("testCase1")
  console.log(testCase1Elem)
  let result = functionParam(case1);
  if(result === 2) {
    testCase1Elem.className = "success"
    testCase1Elem.innerText = "Test Passed"
  } else {
      console.log("Test failed")
      testCase1Elem.className = "fail"
      testCase1Elem.innerText = `Failed Test 1: Expected result: 2, Actual Output: ${result}`
  }
}
testCase1(howManyEven)
