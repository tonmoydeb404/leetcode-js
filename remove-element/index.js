var removeElement = function (nums, val) {
  var count = 0;
  var k = 0;
  while (k < nums.length) {
    if (nums[k] == val) {
      for (var j = k; j < nums.length; j++) {
        if (nums.length > j + 1) {
          nums[j] = nums[j + 1];
        } else {
          count++;
          nums[j] = "_";
        }
      }
    } else {
      k++;
    }
  }

  return k - count;
};

var nums = [0, 1, 2, 2, 3, 0, 4, 2];
var val = 2;

console.log(nums);
console.log(removeElement(nums, val));
