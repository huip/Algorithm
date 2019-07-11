# SelectSort with coffee
selectSort = (array)->
  count = array.length
  for i in [0...count]
    min_index = i
    for j in  [i...count]
      if array[min_index] > array[j]
        min_index = j
    temp = array[min_index]
    array[min_index] =  array[i]
    array[i] = temp
  return array
array = [0,2,1,3,6,4,5,7,9,8]
selectSort(array)
