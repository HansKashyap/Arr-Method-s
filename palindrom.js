
function checkpalindrom(x)
{
    var rev=0,y,n1=x;
    while(x>0)
    {
        y=x%10;
        rev=rev*10+y;
        x=parseInt(x/10);
    }
    if(rev==n1)
    return "palindrom"
     else
     return "not palindrom"
}
checkpalindrom()

var x=checkpalindrom(127)
console.log(x)
console.log(checkpalindrom(121))
console.log(checkpalindrom(122))
console.log(checkpalindrom(313))


