def select_sort(array)
  min_index = ''
  (0...array.length).each do |i|
    min_index = i
    (i...array.length).each do |j|
      if array[min_index] > array[j]
        min_index = j
      end
    end
    array[min_index],array[i] = array[i],array[min_index]
  end
  return array
end
array = [0,2,1,3,6,4,5,7,9,8]
select_sort(array)
