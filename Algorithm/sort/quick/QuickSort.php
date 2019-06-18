<?php
  function quick_sort($array,$l,$r)
  {
    $left = $l;
    $right = $r;
    $pivot = $array[$l + ($r - $l) / 2];
    while( $left <= $right )
    {
      while($array[$left] < $pivot)
      {
        $left++;
      }
      while($array[$right] > $pivot)
      {
        $right--;
      }
      // swap items of array
      if( $left <= $right )
      {
        $temp = $array[$left];
        $array[$left] = $array[$right];
        $array[$right] = $temp;
        $left++;
        $right--;
      }
    }
    if($l < $right)
    {
      quick_sort($array,$l,$rght);
    }
    if($left < $r)
    {
      quick_sort($array,$left,$r);
    }
    return $array;
  }
  $array = [0,2,1,3,6,4,5,7,9,8];
  quick_sort($array,0,count($array) - 1);
?>
