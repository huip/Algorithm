bubble_sort = (array)->
  count = array.length
  for i in [0...count]
    for j in [0...count- i - 1]
      if array[j] > array[j+1]
        temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
  return array
array = [0,2,1,3,6,4,5,7,9,8]
bubble_sort(array)
