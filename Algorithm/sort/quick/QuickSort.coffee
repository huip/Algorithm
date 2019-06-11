quick_sort = (array,l,r)->
  left = l
  right = r
  pivot = array[l + (r - l) / 2]
  while left <= right
    while array[left] < pivot
      left += 1
    while array[right] > pivot
      right -= 1
    # swap item of array
    if left <= right
      temp = array[left]
      array[left] =  array[right]
      array[right] = temp
      left += 1
      right -= 1
  if l < right
    quick_sort(array,l,right)
  if left < r
    quick_sort(array,left,r)
  return array
# Unit test
array = [0,2,1,3,6,4,5,7,9,8]
quick_sort(array,0,array.length - 1)
