# sass-aray

```scss
$list:( 320,360,375,393,412,414,480,540,640,720,768);
$len: length($list);

body{
    size: $len;
    first: nth($list, 1);
    last: nth($list, $len);
}
@for $i from 1 to $len {
    $value: nth($list, $i);
    $current: $value + 1;
    $next: nth($list, $i +1);
    .c-#{$i}{
        value: $value;
        current: $current;
        next: $next;
    }
}
```