function generate_content()
{
  wCount = Math.floor((window.innerWidth*2.5)/180);
  hCount = Math.floor((window.innerHeight*2.5)/150);
  b = document.getElementsByTagName("body")[0];
  for (y=0;y<hCount;y++)
  {
    for (x=0;x<wCount;x++)
    {
      q = document.createElement("span");
      q.innerHTML = "<iframe src=\"//rcm-na.amazon-adsystem.com/e/cm?o=1&p=9&l=ez&f=ifr&linkID=7eb1b96497a564498a8a4b1cf96736d6&t=inthelink-20&tracking_id=inthelink-20\" width=\"180\" height=\"150\" scrolling=\"no\" border=\"0\" marginwidth=\"0\" style=\"border:none;\" frameborder=\"0\"></iframe>";
      b.appendChild(q);
    }
    q = document.createElement("br");
    b.appendChild(q);
  }
}
