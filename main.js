projects = {
    'Project 1':{
        'Image':'',
        'Description':'',
        'Language':'Python',
    },
    'Project 2':{
        'Image':'',
        'Description':'',
        'Language':'R',
    },
    'Project 3':{
        'Image':'',
        'Description':'',
        'Language':'C++',
    },
    'Project 4':{
        'Image':'',
        'Description':'',
        'Language':'Python',
    },
    'Project 5':{
        'Image':'',
        'Description':'',
        'Language':'HTML5',
    },
}

project_number = 1
js_string = ''
for(var project in projects){
    //First we create the body of the project
    body = '\t\t<div  class=card>\n'
    body += '\t\t\t<div>'
    // Language
    if (projects[project]['Language'] == 'Python') {body +='<img src="Python_symbol.png" width="150px" height="70px">'}
    else if(projects[project]['Language'] == 'C++') {body +='<img src="C_symbol.png" width="100px" height="70px">'}
    else if(projects[project]['Language'] == 'R') {body +='<img src="R_symbol.png" width="70px" height="50px">'}
    else if(projects[project]['Language'] == 'HTML5') {body +='<img src="HTML5_symbol.png" width="70px" height="70px">'}
    //
    body += '\t\t\t</div>\n'
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