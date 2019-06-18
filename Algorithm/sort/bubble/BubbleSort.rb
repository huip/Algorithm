def bubble_sort(array)
  (0...array.length).each do |i|
    (0...array.length - i - 1).each do |j|
      if array[j] > array[j+1]
        array[j],array[j+1] = array[j+1],array[j]
      end
    end
  end
  return array
end
array = [0,2,1,3,6,4,5,7,9,8]
bubble_sort(array)

