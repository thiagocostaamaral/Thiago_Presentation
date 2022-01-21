//Defining projects that will appear to user
projects = {

    'Project 3':{
        'Image':'Neural.png',
        'Description':'This code was a side project made during the university period. The main idea was to improve the knowledge of Neural Networks constructing a Multi Layer Perceptron without any Python library instead of "<b>numpy</b>".',
        'Language':'Python',
        'Code':'https://github.com/thiagocostaamaral/Multilayer-Perceptron-from-scratch',
    },
    'Project 4':{
        'Image':'identifier.png',
        'Description':'This project was done in a course of machine learning in University of São Paulo. The main idea of it was to identify street sign patterns in some photos using <b>OpenCV</b>.',
        'Language':'Python',
        'Code':'https://github.com/thiagocostaamaral/Identifier',
    },
    'Project 2':{
        'Image':'R_interface.png',
        'Description':'This project is an Interface application that allows the user to analyse different variables of data source and also apply transformations to it. The main library used in this project was "<b>shiny</b>".',
        'Language':'R',
        'Code':'https://github.com/thiagocostaamaral/R_data_manipulation',
    },

    'Project 1':{
        'Image':'Wind_Turbines.png',
        'Description':'Project made to automatically place all wind turbines in a CAD Software (OpenScad) based on its geospacial location and in the topography map. The main objective was to be able to see distance between the tubines and the relation between it size and the terrain',
        'Language':'Python',
        'Code':'',
    },
    'Project 5':{
        'Image':'',
        'Description':'Finally, this last projet is the one that you are seeing right now &#128518 . It was created with  github page to allow the user to see my Portfolio via web.',
        'Language':'HTML5',
        'Code':'https://github.com/thiagocostaamaral/Thiago_Presentation',
    },
}

// Configuring HTML to enter the site
project_number = 1
js_string = ''
for(let project in projects){
    //------
    //First we create the body of the project (card)
    body = '\t\t<div  class=card id = "'+project+'">\n'
    // Language
    body += '\t\t\t<div>'
    if (projects[project]['Language'] == 'Python') {body +='<img src="Images/Python_symbol.png" width="150px" height="70px">'}
    else if(projects[project]['Language'] == 'C++') {body +='<img src="Images/C_symbol.png" width="100px" height="70px">'}
    else if(projects[project]['Language'] == 'R') {body +='<img src="Images/R_symbol.png" width="90px" height="70px">'}
    else if(projects[project]['Language'] == 'HTML5') {body +='<img src="Images/HTML5_symbol.png" width="70px" height="70px">'}
    body += '</div>\n'
    // Image
    body += '\t\t\t<div id = "Image_'+project+'">\n'
    body += '\t\t\t\t <br>\n'
    if(projects[project]['Image']!=''){
        body += '\t\t\t\t<img src="Images/'+projects[project]['Image']+'"  class="card_image"></img>\n'
    }
    body += '\t\t\t</div>\n'

    //Description
    body += '\t\t\t<div>\n'
    body += '\t\t\t <br>\n'
    body += '\t\t\t '+projects[project]['Description']+'\n'
    body += '\t\t\t</div>\n'

    //Button
    if (projects[project]['Code']!=''){
        body += '\t\t\t <br>\n'
        //body += '\t\t\t<button type="button" class="button"><a href="'+projects[project]['Code']+'">Project Code</a></button>\n'
        body += '\t\t\t<a href="'+projects[project]['Code']+'"><button type="button" class="button">Project Code</button></a>\n'
    }
    //close card
    body += '\t\t</div>\n'


    //---- Start of html
    if(project_number%2==1){
        js_string += '<div class="row" id="line">\n'
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

//Creating event trakers
for(let project in projects){
    console.log(project)
    //Function to be executed when enter the card
    document.getElementById(project).addEventListener("mouseenter",
    function( )
    {
        console.log('Entrou '+project);
        //document.getElementById("Image_"+project).innerHTML = '\t\t\t\t<img src="Images/'+projects[project]['Image2']+'"  class="card_image"></img>\n'
    }
    );
    //Function to be executed when exit the card
    document.getElementById(project).addEventListener("mouseout",
    function( )
    {
        console.log('Saiu '+project)
        //document.getElementById("Image_"+project).innerHTML = '\t\t\t\t<img src="Images/'+projects[project]['Image']+'"  class="card_image"></img>\n'
    }
    );
}

