var removeElement = function (nums, val) {
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      continue;
    }
    nums[count] = nums[i];
    count++;
  }

  return count;
};

var nums = [0, 1, 2, 2, 3, 0, 4, 2];
var val = 2;

console.log(nums);
console.log(removeElement(nums, val));
