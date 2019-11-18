def quick_sort(array,l,r):
  left = l
  right = r
  pivot = array[l + (r - l) / 2]
  while left <= right:
    while array[left] < pivot:
      left += 1
    while array[right] > pivot:
      right -= 1
    if left <= right:
      array[left],array[right] = array[right],array[left]
      left += 1
      right -=1
  if l < right:
    quick_sort(array,l,right)
  if left < r:
    quick_sort(array,left,r)
  return array

if __name__ == '__main__':
  array = [0,2,1,3,6,4,5,7,9,8]
  print quick_sort(array,0,len(array) - 1)
