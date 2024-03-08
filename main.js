menu_list_array = [ "Veg Margherita Pizza","Chicken Pizza","Beef Pizza","Jalapeno Pizza","Pepper Pizza","Sizzling Pizza","Tomato Pizza","Double Cheese Pizza","Momo Pizza","Fried Chicken Pizza" ]; 

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion(){
    //Give the appropriate id name as add_item
	var item = document.getElementById("add_item").value;
   
    menu_list_array.push(item);
}

