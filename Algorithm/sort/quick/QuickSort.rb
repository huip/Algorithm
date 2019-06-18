def quick_sort(array,l,r)
  left = l
  right = r
  pivot = array[l + (r - l) / 2]
  while left <= right
    while array[left] < pivot
      left += 1
    end
    while array[right] > pivot
      right -= 1
    end
    if left <= right
      array[left],array[right] = array[right],array[left]
      left += 1
      right -= 1
    end
  end
  if l < right
    quick_sort(array,l,right)
  end
  if left < r
    quick_sort(array,left,r)
  end
  return array
end
array = [0,2,1,3,6,4,5,7,9,8]
quick_sort(array,0,array.length - 1)

