projects = {
    'Project 1':{
        'Image':'',
        'Description':'',
    },
    'Project 2':{
        'Image':'',
        'Description':'',
    },
    'Project 3':{
        'Image':'',
        'Description':'',
    },
    'Project 4':{
        'Image':'',
        'Description':'',
    },
    'Project 5':{
        'Image':'',
        'Description':'',
    },
}

project_number = 1
js_string = ''
for(project in projects){
    //First we create the body of the project
    body = '\t\t<div  class=card>\n'
    body += '\t\t\t<div>Body of the '+project+'</div>\n'
    body += '\t\t</div>\n'
    // Start of html
    if(project_number%2==1){
        js_string += '<div class="row">\n'
        js_string += '\t<div class="col-md-1"></div>\n'
        js_string += '\t<div class="col-md-5">\n'
        js_string += body
        js_string += '\t</div>\n'
    }
    else{
        js_string += '\t<div class="col-md-5">\n'
        js_string += body
        js_string += '\t</div>\n'
        js_string += '</div>\n'
        js_string += '<br>\n'
    }
    project_number += 1
}
//Just to fix moments where you have dont have an even number of projects (first div must be closed)
if(project_number%2==0){
    js_string += '</div>\n'
} 
console.log(project_number)
console.log(js_string)
document.getElementById('Projects').innerHTML = js_string