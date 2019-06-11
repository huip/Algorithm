def bubble_sort(array):
  for i in range(len(array)):
    for j in range(len(array) - i -1):
      if array[j] > array[j+1]:
        array[j],array[j+1] = array[j+1],array[j]
  return array
array = [0,2,1,3,6,4,5,7,9,8]
bubble_sort(array)
