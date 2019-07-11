<?php
  function select_sort($array) 
  {
    for($i = 0; $i < count($array);$i++)
    {
      $min_index = $i;
      for($j = $i; $j < count($array);$j++)
      {
        if($array[$min_index] > $array[$j])
        {
          $min_index = $j;
        }
      }
      $temp = $array[$min_index];
      $array[$min_index] = $array[$i];
      $array[$i] = $temp;
    }
    return $array;
  }
  $array = [0,2,1,3,6,4,5,7,9,8];
  var_dump(select_sort($array));
?>
