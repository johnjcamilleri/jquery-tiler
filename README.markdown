# jQuery Tiler

Auto-tile boxes of different dimensions into a neat grid.

If you have ever created tiled a layout by floating a bunch of boxes together, you may have noticed that when these boxes have different dimensions (heights/widths) you end up with a lot of space and an altogther un-neat layout:

![Figure A: Floating of different-sized blocks leaves a lot of white space](https://raw.github.com/johnjcamilleri/jquery-tiler/master/images/tiler-before.png)

The tiler plugin fixes this by greedily inserting each box into the column which is “shortest”, resulting in something like that in Figure B.

![Figure B: By using the jquery-tiler plugin our boxes are now neatly stacked](https://raw.github.com/johnjcamilleri/jquery-tiler/master/images/tiler-after.png)

Note how the order of the boxes has changed. To me this is acceptable, but more importantly it is somewhat unavoidable (as someone wise used to tell me, “you have to break eggs if you want to make an omelette”).

Note that in this scenario all boxes are forced into fixed column widths. There is also some support for varying widths (i.e. preserving the width of each box) however it is far from complete.
