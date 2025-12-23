let empolyer = [];
let template_technicalSupport_html  = `<div  class="profile_header">`




async function getData() {
    let response = await fetch("./empolyer.json");
    empolyer = await response.json();
    console.log('response', empolyer);
}

function getDataDistribution() {
    return empolyer.filter(empl => empl.Department === "Vertrieb");
}



function getTechnicalSupport() {
    return empolyer.filter(emp => emp.Department === "Technical Support");
}

function getProjectsConsulting() {
    return empolyer.filter(emp => emp.Department === "Projects & Consulting");
}

function getSpecialOperations() {
    return empolyer.filter(emp => emp.Department === "Special Operations");
}

function getOfficeAndSalesCoordination() {
    return empolyer.filter(emp => emp.Department === "Office & Sales Coordination");
}


function getExecutiveTeamCTO() {
    return empolyer.filter(emp => emp.Department === "Vorstandsteam CTO");
}

function getQualityEngineering() {
    return empolyer.filter(emp => emp.Department === "Quality Engineering");
}

function getResourceAndData() {
    return empolyer.filter(emp => emp.Department === "Resource & Data");
}

function getQualityManagement() {
    return empolyer.filter(emp => emp.Department === "Quality Management");
}

function getSoftwareTesting() {
    return empolyer.filter(emp => emp.Department === "Softwaretest");
}

function getDocumentation() {
    return empolyer.filter(emp => emp.Department === "Dokumentation");
}

function showDistribution() {
    let show_template_distribution = document.getElementById("distribution");
    let toggleWidth_distribution = document.getElementById("distribution_head_id");
    let empolyerDistribution = getDataDistribution();

    if (show_template_distribution.innerHTML.trim() === "") {
        getDistrubtionEmployer(empolyerDistribution, show_template_distribution, toggleWidth_distribution);
    } else {
        helpFunctionForcloseDistribution(show_template_distribution, toggleWidth_distribution);
    }
}


function getDistrubtionEmployer(empolyerDistribution, show_template_technicalSupport, toggleWidth_technicalSupport) {
    template_Distributiont_html  = ` <div class="profile">`

    for (let index = 0; index < empolyerDistribution.length; index++) {
        const empolyerName = empolyerDistribution[index].Name;
        const employer = empolyerDistribution[index]

        let createCodeForempolyerDistribution = `
            <div class="person">
                <img class="profil_img" src="./assets/img/profilbild.png" alt="">
                <p class="profil_name">${empolyerName}</p>
            </div>
        `;

        if (!employer.Region) {
                template_DistrubtionEmployertwithNoRegion(empolyerDistribution, createCodeForempolyerDistribution, index, show_template_technicalSupport, toggleWidth_technicalSupport)
        }

        checkTemplateForDistrubtionEmployer(createCodeForempolyerDistribution, index, empolyerDistribution,  employer, show_template_technicalSupport, toggleWidth_technicalSupport )
}

}

function checkTemplateForDistrubtionEmployer(createCodeForempolyerDistribution, index, empolyerDistribution,  employer, show_template_technicalSupport, toggleWidth_technicalSupport) {
        
        if (employer.Region === "NO.INT") {
            gettemplate_developmentwithRegionNOINT(createCodeForempolyerDistribution, index, empolyerDistribution,  employer);
        } 
        else if (index === empolyerTechnicalSupport.length - 1) {
            getTemplatLastElementFortechnicalSupport(createCodeForempolyerTechnicalSupport, show_template_technicalSupport);
        } 
        else if (index % 3 === 0) {
            getTemplatFirstElementFortechnicalSupport(createCodeForempolyerTechnicalSupport);
        } else if (index % 3 === 2) {
            getTemplatThirdElementFortechnicalSupport(createCodeForempolyerTechnicalSupport);
        }
        else {
            getTemplatNextElementFortechnicalSupport(createCodeForempolyerTechnicalSupport);
        }
}


function gettemplate_developmentwithRegionNOINT(createCodeForempolyerDistribution, index, empolyerDistribution,  employer) {

    if (employer.Region === "NO.INT" && firstNOINTShownDistributionWithRegion === false) {
        template_Distributiont_html += `
    <div class="profile_for_distribution">
    <h6 class="sub_line_distribution">NO.INT</h6>
    <div class="persons-container"> ${createCodeForempolyerDistribution}`
    firstNOINTShownDistributionWithRegion =true
    } else if (index % 3 === 0 &&firstNOINTShownDistributionWithRegion === true) {
   

    }else {

    }

}

function gettemplate_developmentwithNoRegion(createCodeForempolyerDistribution, index, empolyerDistribution,  employer) {

        if (index === 0) {
            getTemplatBeginningFortechnicalSupport(createCodeForempolyerTechnicalSupport, toggleWidth_technicalSupport, show_template_technicalSupport);
        } 
        else if (index === empolyerTechnicalSupport.length - 1) {
            getTemplatLastElementFortechnicalSupport(createCodeForempolyerTechnicalSupport, show_template_technicalSupport);
        } 
        else if (index % 3 === 0) {
            getTemplatFirstElementFortechnicalSupport(createCodeForempolyerTechnicalSupport);
        } else if (index % 3 === 2) {
            getTemplatThirdElementFortechnicalSupport(createCodeForempolyerTechnicalSupport);
        }
        else {
            getTemplatNextElementFortechnicalSupport(createCodeForempolyerTechnicalSupport);
        }
    
}




















function showtechnicalSupport() {
    let show_template_technicalSupport = document.getElementById("technical_supportId");
    let toggleWidth_technicalSupport = document.getElementById("technical_support_headId");
    let empolyerTechnicalSupport = getTechnicalSupport();
    if (show_template_technicalSupport.innerHTML.trim() === "") {
        gettechnicalSupportEmployer(empolyerTechnicalSupport, show_template_technicalSupport, toggleWidth_technicalSupport ) 
    } else {
        helpFunctionForclosetechnicalSupport(show_template_technicalSupport, toggleWidth_technicalSupport )
    }   
}


function gettechnicalSupportEmployer(empolyerTechnicalSupport, show_template_technicalSupport, toggleWidth_technicalSupport) {

    template_technicalSupport_html  = ` <div  class="profile_header">`

    for (let index = 0; index < empolyerTechnicalSupport.length; index++) {
        const empolyer = empolyerTechnicalSupport[index].Name;

        let createCodeForempolyerTechnicalSupport = `
            <div class="person">
                <img class="profil_img" src="./assets/img/profilbild.png" alt="">
                <p class="profil_name">${empolyer}</p>
            </div>
        `;
        if (index === 0) {
            getTemplatBeginningFortechnicalSupport(createCodeForempolyerTechnicalSupport, toggleWidth_technicalSupport, show_template_technicalSupport);
        } 
        else if (index === empolyerTechnicalSupport.length - 1) {
            getTemplatLastElementFortechnicalSupport(createCodeForempolyerTechnicalSupport, show_template_technicalSupport);
        } 
        else if (index % 3 === 0) {
            getTemplatFirstElementFortechnicalSupport(createCodeForempolyerTechnicalSupport);
        } else if (index % 3 === 2) {
            getTemplatThirdElementFortechnicalSupport(createCodeForempolyerTechnicalSupport);
        }
        else {
            getTemplatNextElementFortechnicalSupport(createCodeForempolyerTechnicalSupport);
        }
    }
}

function getTemplatBeginningFortechnicalSupport(createCodeForempolyerTechnicalSupport, toggleWidth_technicalSupport, show_template_technicalSupport) {
    let html = `<div class="profile_technical_support">`;
    template_technicalSupport_html += `${html} ${createCodeForempolyerTechnicalSupport}`; // Header sofort schließen
    toggleWidth_technicalSupport.classList.remove("width_for_technicalSupport");
    show_template_technicalSupport.classList.remove('unfold-close');
    show_template_technicalSupport.classList.add('unfold');
}

function getTemplatFirstElementFortechnicalSupport(createCodeForempolyerTechnicalSupport){
    template_technicalSupport_html += `<div class="profil_content">${createCodeForempolyerTechnicalSupport}`;
}

function getTemplatNextElementFortechnicalSupport(createCodeForempolyerTechnicalSupport){
    template_technicalSupport_html += createCodeForempolyerTechnicalSupport;
}

function getTemplatThirdElementFortechnicalSupport(createCodeForempolyerTechnicalSupport){
    template_technicalSupport_html += `${createCodeForempolyerTechnicalSupport}</div>`; // Profil_content schließen
}
function getTemplatLastElementFortechnicalSupport(createCodeForempolyerTechnicalSupport,show_template_technicalSupport) {
    template_technicalSupport_html += `${createCodeForempolyerTechnicalSupport}</div> </div>`
    show_template_technicalSupport.innerHTML =`${template_technicalSupport_html}`
}

function helpFunctionForshowtechnicalSupport(box, head, empolyerTechnicalSupport) {
    box.innerHTML = template_technicalSupport(empolyerTechnicalSupport);
    head.classList.remove("width_for_technicalSupport");
    box.classList.remove('unfold-close');
    box.classList.add('unfold');
}

function helpFunctionForclosetechnicalSupport(box, head) {
    box.classList.remove('unfold');
    box.classList.add('unfold-close');
    setTimeout(() => { box.innerHTML = ""; }, 300);
    head.classList.add("width_for_technicalSupport");
}

function showProjectsConsulting() {
    let show_template_ProjectsConsulting = document.getElementById("projects_consultingId");
    let toggleWidth_ProjectsConsultingt = document.getElementById("projects_consultingheadId");
    let empolyerProjectsConsulting = getProjectsConsulting()  
    if (show_template_ProjectsConsulting.innerHTML.trim()  === "") {
      helpFunctionForshowProjectsConsulting(show_template_ProjectsConsulting, toggleWidth_ProjectsConsultingt, empolyerProjectsConsulting)
    } else {
    helpFunctionForcloseProjectsConsulting(show_template_ProjectsConsulting, toggleWidth_ProjectsConsultingt)
    }
}


function helpFunctionForshowProjectsConsulting(box, head, empolyerProjectsConsulting) {
    box.innerHTML = template_ProjectsConsulting(empolyerProjectsConsulting);
    head.classList.remove("width_for_projects_consulting");
    box.classList.remove('unfold-close');
    box.classList.add('unfold');
}

function helpFunctionForcloseProjectsConsulting(box, head) {
    box.classList.remove('unfold');
    box.classList.add('unfold-close');
    setTimeout(() => {
        box.innerHTML = "";
    }, 300);
    head.classList.add("width_for_projects_consulting");
}



function showSpecialOperations() {
    let show_template_SpecialOperations = document.getElementById("special_operationsId");
    let toggleWidth_SpecialOperations = document.getElementById("special_operationsheadId");
    let empolyerSpecialOperations= getSpecialOperations()
    if (show_template_SpecialOperations.innerHTML.trim()  === "") {
      helpFunctionForSpecialOperations(show_template_SpecialOperations, toggleWidth_SpecialOperations, empolyerSpecialOperations)
    } else {
    helpFunctionForcloseSpecialOperations(show_template_SpecialOperations, toggleWidth_SpecialOperations)
    }
}


function helpFunctionForSpecialOperations(box, head,empolyerSpecialOperations ) {
    box.innerHTML = template_special_operations(empolyerSpecialOperations);
    head.classList.remove("width_for_special_operations");
    box.classList.remove('unfold-close');
    box.classList.add('unfold');
}

function helpFunctionForcloseSpecialOperations(box, head) {
    box.classList.remove('unfold');
    box.classList.add('unfold-close');
    setTimeout(() => {
        box.innerHTML = "";
    }, 300);
    head.classList.add("width_for_special_operations");
}


function showOfficeAndSalesCoordination() {
    let show_template_OfficeSalesCoordination = document.getElementById("office_sales_coordinationId");
    let toggleWidth_OfficeSalesCoordination = document.getElementById("office_sales_coordinationheadId");
     let empolyerOfficeAndSalesCoordination= getOfficeAndSalesCoordination()
    if (show_template_OfficeSalesCoordination.innerHTML.trim()  === "") {
      helpFunctionOfficeSalesCoordination(show_template_OfficeSalesCoordination, toggleWidth_OfficeSalesCoordination, empolyerOfficeAndSalesCoordination)
    } else {
    helpFunctionForcloseOfficeSalesCoordination(show_template_OfficeSalesCoordination, toggleWidth_OfficeSalesCoordination)
    }
}


function helpFunctionOfficeSalesCoordination(box, head, empolyerOfficeAndSalesCoordination) {
    box.innerHTML = template_office_sales_coordination(empolyerOfficeAndSalesCoordination);
    head.classList.remove("width_for_office_sales_coordination");
    box.classList.remove('unfold-close');
    box.classList.add('unfold');
}

function helpFunctionForcloseOfficeSalesCoordination(box, head) {
    box.classList.remove('unfold');
    box.classList.add('unfold-close');
    setTimeout(() => {
        box.innerHTML = "";
    }, 300);
    head.classList.add("width_for_office_sales_coordination");
}








function showDevelopment() {
    let show_template_development = document.getElementById("developmentId");
    let toggleWidth_development = document.getElementById("developmentHeadId");
    let empolyerExecutiveTeamCTO= getExecutiveTeamCTO()
    let empolyerQualityEngineering= getQualityEngineering()
    let empolyerResourceAndData= getResourceAndData()
    let empolyerQualityManagement= getQualityManagement()
    let empolyerSoftwareTesting= getSoftwareTesting()
    let empolyerDocumentation= getDocumentation()
    if (show_template_development.innerHTML.trim() === "") {
      helpFunctionDevelopment(show_template_development, empolyerExecutiveTeamCTO,
        empolyerQualityEngineering,empolyerResourceAndData, empolyerQualityManagement, empolyerSoftwareTesting, empolyerDocumentation
       )
    } else {
    helpFunctioncloseDevelopment(show_template_development, toggleWidth_development)
    }
}


function helpFunctionDevelopment(box, empolyerExecutiveTeamCTO,
        empolyerQualityEngineering,empolyerResourceAndData, empolyerQualityManagement, empolyerSoftwareTesting, empolyerDocumentatio) {
    box.innerHTML = template_development( empolyerExecutiveTeamCTO,
        empolyerQualityEngineering,empolyerResourceAndData, empolyerQualityManagement, empolyerSoftwareTesting, empolyerDocumentatio);
    box.classList.remove('unfold-close');
    box.classList.add('unfold');
}

function helpFunctioncloseDevelopment(box, head) {
    box.classList.remove('unfold');
    box.classList.add('unfold-close');
    setTimeout(() => {
        box.innerHTML = "";
    }, 300);
}

