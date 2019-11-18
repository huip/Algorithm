#coding:utf-8 
# Select sort 
def select_sort(array):
  for i in range(len(array)):
    # Get min index of unsort array
    min_index = i
    for j in range(min_index,len(array)):
      if array[min_index] > array[j]:
        min_index = j
    # Resort array
    array[i],array[min_index] = array[min_index],array[i]
  return array

if __name__ == '__main__':
  array = [0,2,1,3,6,4,5,7,9,8]
  select_sort(array)
