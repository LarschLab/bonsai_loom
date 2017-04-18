#version 400
out vec4 fragColor;
in vec4 spCol;

void main()
{
  // position of the fragment inside the unit circle
  vec2 position = 2 * gl_PointCoord - 1;

  // fragment is inside the circle when the length is smaller than one

  fragColor = length(position) < 1 ? spCol : vec4(1,1,1,1);


}
