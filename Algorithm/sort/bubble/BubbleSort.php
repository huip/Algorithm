<?php
  function bubble_sort($array)
  {
    for($i = 0; $i < count($array); $i++)
    {
      for($j = 0; $j < count($array) - $i - 1; $j++)
      {
        if($array[$j] > $array[$j+1])
        {
          $temp = $array[$j+1];
          $array[$j+1] = $array[$j];
          $array[$j] = $temp;
        }
      }
    }
    return $array;
  }
$array = [0,2,1,3,6,4,5,7,9,8];
bubble_sort($array)
?>
