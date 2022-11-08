function flags() {
    var x = document.getElementById("mySelect").value;
    switch (x)
    {
        case "Jordan":
        document.getElementById("flag").src="https://abunawaf.com/wp-content/uploads/2016/01/%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86.jpg"
        break;
        case "Germany":
        document.getElementById("flag").src="https://th.bing.com/th/id/OIP.p7KHi7tK3IEKjUP7aqBJiQHaEc?pid=ImgDet&rs=1"
        break;
        case "Russia":
            document.getElementById("flag").src="https://th.bing.com/th/id/OIP.rJvZZoJtrABxf4fvalbbBgHaFj?pid=ImgDet&rs=1"
            break;
            case "Palestine":
            document.getElementById("flag").src="https://th.bing.com/th/id/OIP.ZQYqrd95Cr7gIXwXtrEUQgHaFj?pid=ImgDet&rs=1"
            break;
            case "Norway":
                document.getElementById("flag").src="https://th.bing.com/th/id/OIP.ezxsVEy9VsWiL27f4rpZgwHaEK?pid=ImgDet&rs=1"
                break;
    }
  }