def insertion_sort(array):
  for index in range(1,len(array)):
    value = array[index]
    i = index - 1
    while i >= 0:
      if array[i] > array[i+1]:
        array[i+1] = array[i]
        array[i] = value
        i = i - 1
      else:
        break
  return array
if __name__ == '__main__':
  array = [0,2,1,3,6,4,5,7,9,8]
  insertion_sort(array)

