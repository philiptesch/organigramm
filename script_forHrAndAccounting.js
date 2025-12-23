let template_HRAndAccounting_html 
let employerHRAndAccounting;
let employerITAndTechnology;
let employerLegalDepartment;


function getHRAndAccounting() {
    return empolyer.filter(emp => emp.Department === "HR & Rechnungswesen");
}

function getITAndTechnology() {
    return empolyer.filter(emp => emp.Department === "IT & Technik");
}

function getLegalDepartment() {
    return empolyer.filter(emp => emp.Department === "Rechtsabteilung");
}




function showHrAndAccounting() {
    let show_template_hrAndAccounting = document.getElementById("hrAndAccountingId");
    let toggleWidth_hrAndAccounting= document.getElementById("hrAndAccountingHeadId");
    employerHRAndAccounting= getHRAndAccounting();
    employerITAndTechnology= getITAndTechnology();
    employerLegalDepartment= getLegalDepartment();
    if (show_template_hrAndAccounting.innerHTML.trim()  === "") {
        getHrAndAccountingEmployer(show_template_hrAndAccounting, toggleWidth_hrAndAccounting);
        getITAndTechnologyEmployer(show_template_hrAndAccounting,toggleWidth_hrAndAccounting );
        getLegalDepartmentEmployer(show_template_hrAndAccounting,toggleWidth_hrAndAccounting);
    } else {
    helpFunctionForclosehrAndAccounting(show_template_hrAndAccounting, toggleWidth_hrAndAccounting)
    }
}




function getHrAndAccountingEmployer(show_template_hrAndAccounting, toggleWidth_hrAndAccounting) {
     template_HRAndAccounting_html  = `<div class="profile_header_for_hr_and_accounting"><div class="profile_hr_and_accounting"><div class="profil_content_for_HrandAccounting">`
         for (let index = 0; index < employerHRAndAccounting.length; index++) {
        const employerNameHrAndAccounting = employerHRAndAccounting[index].Name;
        let createCodeForempolyerHrAndAccountingEmployer = ` <div class="person"> <img class="profil_img" src="./assets/img/profilbild.png" alt=""> <p class="profil_name">${employerNameHrAndAccounting}</p></div> `;


    if (index === 0) {
           showBeginningtemplate_HrAndAccountingEmployer(show_template_hrAndAccounting, createCodeForempolyerHrAndAccountingEmployer, toggleWidth_hrAndAccounting)
           if (index === employerHRAndAccounting.length - 1) {
            endingtemplate_MarketingAndDesignEmployer()
           }
    } else if (index === employerHRAndAccounting.length - 1) {
        showLasttemplate_HrAndAccountingEmployer(createCodeForempolyerHrAndAccountingEmployer)
    } else if (index % 4 === 0) {
        showFirsttemplate_HrAndAccountingEmployer(createCodeForempolyerHrAndAccountingEmployer)
    }else if (index % 4 === 3) {
        showfourthtemplate_HrAndAccountingEmployer(createCodeForempolyerHrAndAccountingEmployer)
    } else
        showNexttemplate_HrAndAccountingEmployer(createCodeForempolyerHrAndAccountingEmployer) 
    }

    if (employerITAndTechnology == 0 && employerLegalDepartment == 0) {
        show_template_hrAndAccounting.innerHTML = template_HRAndAccounting_html
        toggleWidth_hrAndAccounting.classList.add("width_for_hr_and_accounting");
    }
}





function showfourthtemplate_HrAndAccountingEmployer(createCodeForempolyerHrAndAccountingEmployer) {
     template_HRAndAccounting_html += `${createCodeForempolyerHrAndAccountingEmployer}</div>`
}

function showFirsttemplate_HrAndAccountingEmployer(createCodeForempolyerHrAndAccountingEmployer) {
     template_HRAndAccounting_html += ` <div class="persons-container">${createCodeForempolyerHrAndAccountingEmployer}`
}

function showBeginningtemplate_HrAndAccountingEmployer(show_template_hrAndAccounting, createCodeForempolyerHrAndAccountingEmployer, toggleWidth_hrAndAccounting) {
    template_HRAndAccounting_html += ` <div class="persons-container">${createCodeForempolyerHrAndAccountingEmployer}`
    toggleWidth_hrAndAccounting.classList.remove("width_for_hr_and_accounting");
    show_template_hrAndAccounting.classList.remove('unfold-close');
    show_template_hrAndAccounting.classList.add('unfold')
}

function showNexttemplate_HrAndAccountingEmployer(createCodeForempolyerHrAndAccountingEmployer) {
     template_HRAndAccounting_html += ` ${createCodeForempolyerHrAndAccountingEmployer}`
}


function showLasttemplate_HrAndAccountingEmployer(createCodeForempolyerHrAndAccountingEmployer) {
     template_HRAndAccounting_html += ` ${createCodeForempolyerHrAndAccountingEmployer}</div> </div> </div>`;
     console.log('template_KeyAccountMgmt_html', template_HRAndAccounting_html);
     
}

function endingtemplate_MarketingAndDesignEmployer() {
    template_HRAndAccounting_html += `</div> </div> </div>`
}



function getITAndTechnologyEmployer(show_template_hrAndAccounting, toggleWidth_hrAndAccounting) {
     template_HRAndAccounting_html  += `<div class="itAndtechnic"><div class="other_departments_under_marketing"><div class="other_departments_under_marketing_headline_itAndtechnic"><h4 class="other_departments_under_marketing_headline">IT & Technik</h4><p>${employerITAndTechnology[0].Name}</p></div>`
         for (let index = 0; index < employerITAndTechnology.length; index++) {
        const employerNameITAndTechnology = employerITAndTechnology[index].Name;
        let createCodeForempolyerITAndTechnologyEmployer = ` <div class="person"> <img class="profil_img" src="./assets/img/profilbild.png" alt=""> <p class="profil_name">${employerNameITAndTechnology}</p></div> `;


    if (index === 0) {
           showBeginningtemplate_ITAndTechnologyEmployer(createCodeForempolyerITAndTechnologyEmployer)
           if (index === employerITAndTechnology.length - 1) {
            endingtemplate_ITAndTechnologyEmployer()
           }
    } else if (index === employerITAndTechnology.length - 1) {
        showLasttemplate_ITAndTechnologyEmployer(createCodeForempolyerITAndTechnologyEmployer)
    } else if (index % 4 === 0) {
        showFirsttemplate_ITAndTechnologyEmployer(createCodeForempolyerITAndTechnologyEmployer)
    }else if (index % 4 === 3) {
        showfourthtemplate_ITAndTechnologyEmployer(createCodeForempolyerITAndTechnologyEmployer)
    } else
        showNexttemplate_ITAndTechnologyEmployer(createCodeForempolyerITAndTechnologyEmployer) 
    }

    if (employerLegalDepartment == 0) {
        show_template_hrAndAccounting.innerHTML = template_HRAndAccounting_html
        toggleWidth_hrAndAccounting.classList.add("width_for_hr_and_accounting");
    }
}





function showfourthtemplate_ITAndTechnologyEmployer(createCodeForempolyerITAndTechnologyEmployer) {
     template_HRAndAccounting_html += `${createCodeForempolyerITAndTechnologyEmployer}</div>`
}

function showFirsttemplate_ITAndTechnologyEmployer(createCodeForempolyerITAndTechnologyEmployer) {
     template_HRAndAccounting_html += ` <div class="persons-container">${createCodeForempolyerITAndTechnologyEmployer}`
}

function showBeginningtemplate_ITAndTechnologyEmployer(createCodeForempolyerITAndTechnologyEmployer) {
    template_HRAndAccounting_html += ` <div class="persons-container">${createCodeForempolyerITAndTechnologyEmployer}`
}

function showNexttemplate_ITAndTechnologyEmployer(createCodeForempolyerITAndTechnologyEmployer) {
     template_HRAndAccounting_html += ` ${createCodeForempolyerITAndTechnologyEmployer}`
}


function showLasttemplate_ITAndTechnologyEmployer(createCodeForempolyerITAndTechnologyEmployer) {
     template_HRAndAccounting_html += ` ${createCodeForempolyerITAndTechnologyEmployer}</div> </div> </div>`;
     console.log('template_KeyAccountMgmt_html', template_HRAndAccounting_html);
     
}

function endingtemplate_ITAndTechnologyEmployer() {
    template_HRAndAccounting_html += `</div> </div> </div>`
}




function getLegalDepartmentEmployer(show_template_hrAndAccounting, toggleWidth_hrAndAccounting) {
     template_HRAndAccounting_html  += `   <div class="legal_department"><div class="other_departments_under_marketing"><div class="other_departments_under_marketing_headline_legal_department"><h4 class="other_departments_under_marketing_headline">Rechtsabteilung </h4><p>${employerLegalDepartment[0].Name}</p></div>>`
         for (let index = 0; index < employerLegalDepartment.length; index++) {
        const employerNameLegalDepartment = employerLegalDepartment[index].Name;
        let createCodeForempolyerLegalDepartmentEmployer = ` <div class="person"> <img class="profil_img" src="./assets/img/profilbild.png" alt=""> <p class="profil_name">${employerNameLegalDepartment}</p></div> `;


    if (index === 0) {
           showBeginningtemplate_LegalDepartmentEmployer(createCodeForempolyerLegalDepartmentEmployer)
           if (index === employerLegalDepartment.length - 1) {
            endingtemplate_LegalDepartmentEmployer()
           }
    } else if (index === employerLegalDepartment.length - 1) {
        showLasttemplate_LegalDepartmentEmployer(createCodeForempolyerLegalDepartmentEmployer)
    } else if (index % 4 === 0) {
        showFirsttemplate_LegalDepartmentEmployer(createCodeForempolyerLegalDepartmentEmployer)
    }else if (index % 4 === 3) {
        showfourthtemplate_LegalDepartmentEmployer(createCodeForempolyerLegalDepartmentEmployer)
    } else
        showNexttemplate_LegalDepartmentEmployer(createCodeForempolyerLegalDepartmentEmployer) 
    }
        show_template_hrAndAccounting.innerHTML = template_HRAndAccounting_html
        toggleWidth_hrAndAccounting.classList.add("width_for_hr_and_accounting");
    
}





function showfourthtemplate_LegalDepartmentEmployer(createCodeForempolyerLegalDepartmentEmployer) {
     template_HRAndAccounting_html += `${createCodeForempolyerLegalDepartmentEmployer}</div>`
}

function showFirsttemplate_LegalDepartmentEmployer(createCodeForempolyerLegalDepartmentEmployer) {
     template_HRAndAccounting_html += ` <div class="persons-container">${createCodeForempolyerLegalDepartmentEmployer}`
}

function showBeginningtemplate_LegalDepartmentEmployer(createCodeForempolyerLegalDepartmentEmployer) {
    template_HRAndAccounting_html += ` <div class="persons-container">${createCodeForempolyerLegalDepartmentEmployer}`
}

function showNexttemplate_LegalDepartmentEmployer(createCodeForempolyerLegalDepartmentEmployer) {
     template_HRAndAccounting_html += ` ${createCodeForempolyerLegalDepartmentEmployer}`
}


function showLasttemplate_LegalDepartmentEmployer(createCodeForempolyerLegalDepartmentEmployer) {
     template_HRAndAccounting_html += ` ${createCodeForempolyerLegalDepartmentEmployer}</div> </div> </div>`;
     
}

function endingtemplate_LegalDepartmentEmployer() {
    template_HRAndAccounting_html += `</div> </div> </div>`
}




function helpFunctionhrAndAccounting(box, head, empolyerHRAndAccounting, empolyerITAndTechnology, empolyerLegalDepartment) {
    box.innerHTML = show_template_hrAndAccounting(empolyerHRAndAccounting, empolyerITAndTechnology, empolyerLegalDepartment);
    head.classList.remove("width_for_hr_and_accounting");
    box.classList.remove('unfold-close');
    box.classList.add('unfold');
}

function helpFunctionForclosehrAndAccounting(box, head) {
    box.classList.remove('unfold');
    box.classList.add('unfold-close');
    setTimeout(() => {
        box.innerHTML = "";
    }, 300);
    head.classList.add("width_for_hr_and_accounting");
}
