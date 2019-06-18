insertion_sort = (array)->
  count = array.length
  for i in [1...count]
    value = array[i]
    j = i - 1
    while j >= 0
      if array[j] > array[j+1]
        array[j+1] = array[j]
        array[j] = value
        j = j - 1
      else
        break
  return array
array = [0,2,1,3,6,4,5,7,9,8]
console.log insertion_sort(array)
