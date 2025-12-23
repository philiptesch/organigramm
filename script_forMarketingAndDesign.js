let template_MarketingAndDesign_html 
let employerMarketingAndDesign;
let employerPRAndStrategy;
let employerInternalCommunication;
let employerProcessOptimization;



function getMarketingAndDesign() {
    return empolyer.filter(emp => emp.Department === "Marketing & Design");
}

function getPRAndStrategy() {
    return empolyer.filter(emp => emp.Department === "PR & Strategie");
}

function getInternalCommunication() {
    return empolyer.filter(emp => emp.Department === "Internat Communication");
}

function getProcessOptimization() {
    return empolyer.filter(emp => emp.Department === "Prozessoptimierung");
}





function showMarketingAndDesign() {
    let show_template_MarketingAndDesign = document.getElementById("marketingAndDesignId");
    let toggleWidth_MarketingAndDesign = document.getElementById("marketingAndDesignHeadId");
    employerMarketingAndDesign= getMarketingAndDesign();
    employerPRAndStrategy= getPRAndStrategy();
    employerInternalCommunication= getInternalCommunication();
    employerProcessOptimization= getProcessOptimization();
    if (show_template_MarketingAndDesign.innerHTML.trim()  === "") {
        getMarketingAndDesignEmployer(show_template_MarketingAndDesign, toggleWidth_MarketingAndDesign )
        getPrAndStrategyEmployer(show_template_MarketingAndDesign, toggleWidth_MarketingAndDesign)
        getInternalCommunicationsEmployer(show_template_MarketingAndDesign, toggleWidth_MarketingAndDesign)
        getProcessOptimizationEmployer(show_template_MarketingAndDesign, toggleWidth_MarketingAndDesign)
    } else {
    helpFunctionForcloseMarketingAndDesign(show_template_MarketingAndDesign, toggleWidth_MarketingAndDesign)
    }
}




function getMarketingAndDesignEmployer(show_template_MarketingAndDesign, toggleWidth_MarketingAndDesign) {
     template_MarketingAndDesign_html  = `<div class="profile_header_for_marketing_and_design"><div class="profile_marketing_and_design">`
         for (let index = 0; index < employerMarketingAndDesign.length; index++) {
        const employerNameMarketingAndDesign = employerMarketingAndDesign[index].Name;
        let createCodeForempolyerMarketingAndDesignEmployer = ` <div class="person"> <img class="profil_img" src="./assets/img/profilbild.png" alt=""> <p class="profil_name">${employerNameMarketingAndDesign}</p></div> `;


    if (index === 0) {
           showBeginningtemplate_MarketingAndDesignEmployer(show_template_MarketingAndDesign, createCodeForempolyerMarketingAndDesignEmployer, toggleWidth_MarketingAndDesign)
           if (index === employerNameMarketingAndDesign.length - 1) {
            endingtemplate_MarketingAndDesignEmployer()
           }
    } else if (index === employerMarketingAndDesign.length - 1) {
        showLasttemplate_MarketingAndDesignEmployer(createCodeForempolyerMarketingAndDesignEmployer)
    } else if (index % 4 === 0) {
        showFirsttemplate_MarketingAndDesignEmployer(createCodeForempolyerMarketingAndDesignEmployer)
    }else if (index % 4 === 3) {
        showfourthtemplate_MarketingAndDesignEmployer(createCodeForempolyerMarketingAndDesignEmployer)
    } else
        showNexttemplate_MarketingAndDesignEmployer(createCodeForempolyerMarketingAndDesignEmployer) 
    }

    if (employerPRAndStrategy == 0 && employerProcessOptimization == 0  && employerInternalCommunication ==0 ) {
        show_template_MarketingAndDesign.innerHTML = template_MarketingAndDesign_html
        toggleWidth_MarketingAndDesign.classList.add("width_for_marketingAndDesign");
    }
}





function showfourthtemplate_MarketingAndDesignEmployer(createCodeForempolyerMarketingAndDesignEmployer) {
     template_MarketingAndDesign_html += `${createCodeForempolyerMarketingAndDesignEmployer}</div>`
}

function showFirsttemplate_MarketingAndDesignEmployer(createCodeForempolyerMarketingAndDesignEmployer) {
     template_MarketingAndDesign_html += ` <div class="persons-container">${createCodeForempolyerMarketingAndDesignEmployer}`
}

function showBeginningtemplate_MarketingAndDesignEmployer(show_template_MarketingAndDesign, createCodeForempolyerMarketingAndDesignEmployer, toggleWidth_MarketingAndDesign) {
    template_MarketingAndDesign_html += ` <div class="persons-container">${createCodeForempolyerMarketingAndDesignEmployer}`
    toggleWidth_MarketingAndDesign.classList.remove("width_for_marketingAndDesign");
    show_template_MarketingAndDesign.classList.remove('unfold-close');
    show_template_MarketingAndDesign.classList.add('unfold')
}

function showNexttemplate_MarketingAndDesignEmployer(createCodeForempolyerMarketingAndDesignEmployer) {
     template_MarketingAndDesign_html += ` ${createCodeForempolyerMarketingAndDesignEmployer}`
}


function showLasttemplate_MarketingAndDesignEmployer(createCodeForempolyerMarketingAndDesignEmployer) {
     template_MarketingAndDesign_html += ` ${createCodeForempolyerMarketingAndDesignEmployer}</div> </div> </div>`;
     console.log('template_KeyAccountMgmt_html', template_KeyAccountMgmt_html);
     
}

function endingtemplate_MarketingAndDesignEmployer() {
    template_MarketingAndDesign_html += `</div> </div> </div>`
}







function getPrAndStrategyEmployer(show_template_MarketingAndDesign, toggleWidth_MarketingAndDesign) {
     template_MarketingAndDesign_html  += `    <div class="prAndStrategie"><div class="other_departments_under_marketing_headline_prAndStrategi"><h4 class="other_departments_under_marketing_headline">PR & Strategie </h4><p>${employerPRAndStrategy[0].Name}</p></div><div class="other_departments_under_marketing"><div class="profil_contentForMargetingAndDesingDepartment">`
         for (let index = 0; index < employerPRAndStrategy.length; index++) {
        const employerNamePrAndStrategy = employerPRAndStrategy[index].Name;
        let createCodeForempolyerPrAndStrategyEmployer = ` <div class="person"> <img class="profil_img" src="./assets/img/profilbild.png" alt=""> <p class="profil_name">${employerNamePrAndStrategy}</p></div> `;


    if (index === 0) {
           showBeginningtemplate_PrAndStrategyEmployer(createCodeForempolyerPrAndStrategyEmployer)
           if (index === employerPRAndStrategy.length - 1) {
            endingtemplate_PrAndStrategyEmployer()
           }
    } else if (index === employerPRAndStrategy.length - 1) {
        showLasttemplate_PrAndStrategyEmploye(createCodeForempolyerPrAndStrategyEmployer)
    } else if (index % 4 === 0) {
        showFirsttemplate_PrAndStrategyEmployer(createCodeForempolyerPrAndStrategyEmployer)
    }else if (index % 4 === 3) {
        showfourthtemplate_PrAndStrategyEmployer(createCodeForempolyerPrAndStrategyEmployer)
    } else
        showNexttemplate_PrAndStrategyEmployer(createCodeForempolyerPrAndStrategyEmployer) 
    }

    if (employerProcessOptimization == 0  && employerInternalCommunication ==0 ) {
        show_template_MarketingAndDesign.innerHTML = template_MarketingAndDesign_html
        toggleWidth_MarketingAndDesign.classList.add("width_for_marketingAndDesign");
    }
}





function showfourthtemplate_PrAndStrategyEmployer(createCodeForempolyerPrAndStrategyEmployer) {
     template_MarketingAndDesign_html += `${createCodeForempolyerPrAndStrategyEmployer}</div>`
}

function showFirsttemplate_PrAndStrategyEmployer(createCodeForempolyerPrAndStrategyEmployer) {
     template_MarketingAndDesign_html += ` <div class="persons-container">${createCodeForempolyerPrAndStrategyEmployer}`
}

function showBeginningtemplate_PrAndStrategyEmployer(createCodeForempolyerPrAndStrategyEmployer) {
    template_MarketingAndDesign_html += ` <div class="persons-container">${createCodeForempolyerPrAndStrategyEmployer}`

}

function showNexttemplate_PrAndStrategyEmployer(createCodeForempolyerPrAndStrategyEmployer) {
     template_MarketingAndDesign_html += ` ${createCodeForempolyerPrAndStrategyEmployer}`
}


function showLasttemplate_PrAndStrategyEmploye(createCodeForempolyerPrAndStrategyEmployer) {
     template_MarketingAndDesign_html += ` ${createCodeForempolyerPrAndStrategyEmployer}</div> </div> </div>`;
     console.log('template_KeyAccountMgmt_html', template_MarketingAndDesign_html);
     
}

function endingtemplate_PrAndStrategyEmployer() {
    template_MarketingAndDesign_html += `</div> </div> </div>`
}




function getInternalCommunicationsEmployer(show_template_MarketingAndDesign, toggleWidth_MarketingAndDesign) {
     template_MarketingAndDesign_html  += `<div class="internalCommunications"><div class="other_departments_under_marketing_head_int_operations"><h4 class="int_operations_headline">Internal Communications</h4><p>${employerInternalCommunication[0].Name}</p></div><div class="other_departments_under_marketing">  <div class="profil_contentForMargetingAndDesingDepartment">`
         for (let index = 0; index < employerInternalCommunication.length; index++) {
        const employerNameInternalCommunications = employerInternalCommunication[index].Name;
        let createCodeForempolyerInternalCommunicationsEmployer = ` <div class="person"> <img class="profil_img" src="./assets/img/profilbild.png" alt=""> <p class="profil_name">${employerNameInternalCommunications}</p></div> `;


    if (index === 0) {
           showBeginningtemplate_InternalCommunicationsEmployer(createCodeForempolyerInternalCommunicationsEmployer)
           if (index === employerInternalCommunication.length - 1) {
            endingtemplate_InternalCommunicationsEmployer()
           }
    } else if (index === employerInternalCommunication.length - 1) {
        showLasttemplate_InternalCommunicationsEmployer(createCodeForempolyerInternalCommunicationsEmployer)
    } else if (index % 4 === 0) {
        showFirsttemplate_InternalCommunicationsEmployer(createCodeForempolyerInternalCommunicationsEmployer)
    }else if (index % 4 === 3) {
        showfourthtemplate_InternalCommunicationsEmployer(createCodeForempolyerInternalCommunicationsEmployer)
    } else
        showNexttemplate_InternalCommunicationsEmployer(createCodeForempolyerInternalCommunicationsEmployer) 
    }

    if (employerProcessOptimization == 0) {
        show_template_MarketingAndDesign.innerHTML = template_MarketingAndDesign_html
        toggleWidth_MarketingAndDesign.classList.add("width_for_marketingAndDesign");
    }
}





function showfourthtemplate_InternalCommunicationsEmployer(createCodeForempolyerInternalCommunicationsEmployer) {
     template_MarketingAndDesign_html += `${createCodeForempolyerInternalCommunicationsEmployer}</div>`
}

function showFirsttemplate_InternalCommunicationsEmployer(createCodeForempolyerInternalCommunicationsEmployer) {
     template_MarketingAndDesign_html += ` <div class="persons-container">${createCodeForempolyerInternalCommunicationsEmployer}`
}

function showBeginningtemplate_InternalCommunicationsEmployer(createCodeForempolyerInternalCommunicationsEmployer) {
    template_MarketingAndDesign_html += ` <div class="persons-container">${createCodeForempolyerInternalCommunicationsEmployer}`

}

function showNexttemplate_InternalCommunicationsEmployer(createCodeForempolyerInternalCommunicationsEmployer) {
     template_MarketingAndDesign_html += ` ${createCodeForempolyerInternalCommunicationsEmployer}`
}


function showLasttemplate_InternalCommunicationsEmployer(createCodeForempolyerInternalCommunicationsEmployer) {
     template_MarketingAndDesign_html += ` ${createCodeForempolyerInternalCommunicationsEmployer}</div> </div> </div> </div>`;
     console.log('template_KeyAccountMgmt_html', template_MarketingAndDesign_html);
     
}

function endingtemplate_InternalCommunicationsEmployer() {
    template_MarketingAndDesign_html += `</div> </div> </div> </div>`
}




function getProcessOptimizationEmployer(show_template_MarketingAndDesign, toggleWidth_MarketingAndDesign) {
     template_MarketingAndDesign_html  += `  <div class="processOptimization"><div class="other_departments_under_marketing"> <div class="other_departments_under_marketing_headline_processOptimization"><h4 class="other_departments_under_marketing_headline">Prozessoptimierung</h4><p>${employerProcessOptimization[0].Name}</p></div><div class="profil_contentForMargetingAndDesingDepartment">`
         for (let index = 0; index < employerProcessOptimization.length; index++) {
        const employerNameProcessOptimizations = employerProcessOptimization[index].Name;
        let createCodeForempolyerProcessOptimizationEmployer = ` <div class="person"> <img class="profil_img" src="./assets/img/profilbild.png" alt=""> <p class="profil_name">${employerNameProcessOptimizations}</p></div> `;


    if (index === 0) {
           showBeginningtemplate_ProcessOptimizationEmployer(createCodeForempolyerProcessOptimizationEmployer)
           if (index === employerProcessOptimization.length - 1) {
            endingtemplate_ProcessOptimizationEmployer()
           }
    } else if (index === employerProcessOptimization.length - 1) {
        showLasttemplate_ProcessOptimizationEmployer(createCodeForempolyerProcessOptimizationEmployer)
    } else if (index % 4 === 0) {
        showFirsttemplate_ProcessOptimizationEmployer(createCodeForempolyerProcessOptimizationEmployer)
    }else if (index % 4 === 3) {
        showfourthtemplate_ProcessOptimizationEmployer(createCodeForempolyerProcessOptimizationEmployer)
    } else
        showNexttemplate_ProcessOptimizationEmployer(createCodeForempolyerProcessOptimizationEmployer) 
    }
        show_template_MarketingAndDesign.innerHTML = template_MarketingAndDesign_html
        toggleWidth_MarketingAndDesign.classList.add("width_for_marketingAndDesign");
    
}





function showfourthtemplate_ProcessOptimizationEmployer(createCodeForempolyerInternalCommunicationsEmployer) {
     template_MarketingAndDesign_html += `${createCodeForempolyerInternalCommunicationsEmployer}</div>`
}

function showFirsttemplate_ProcessOptimizationEmployer(createCodeForempolyerInternalCommunicationsEmployer) {
     template_MarketingAndDesign_html += ` <div class="persons-container">${createCodeForempolyerInternalCommunicationsEmployer}`
}

function showBeginningtemplate_ProcessOptimizationEmployer(createCodeForempolyerInternalCommunicationsEmployer) {
    template_MarketingAndDesign_html += ` <div class="persons-container">${createCodeForempolyerInternalCommunicationsEmployer}`

}

function showNexttemplate_ProcessOptimizationEmployer(createCodeForempolyerInternalCommunicationsEmployer) {
     template_MarketingAndDesign_html += ` ${createCodeForempolyerInternalCommunicationsEmployer}`
}


function showLasttemplate_ProcessOptimizationEmployer(createCodeForempolyerInternalCommunicationsEmployer) {
     template_MarketingAndDesign_html += ` ${createCodeForempolyerInternalCommunicationsEmployer}</div> </div> </div>`;
     console.log('template_KeyAccountMgmt_html', template_MarketingAndDesign_html);
     
}

function endingtemplate_ProcessOptimizationEmployer() {
    template_MarketingAndDesign_html += `</div> </div> </div>`
}





function helpFunctionMarketingAndDesign(box, head,empolyerMarketingAndDesign,
        empolyerPRStrategy, empolyerInternalCommunication, empolyerProcessOptimization) {
    box.innerHTML = show_template_MarketingAndDesign(empolyerMarketingAndDesign,
        empolyerPRStrategy, empolyerInternalCommunication, empolyerProcessOptimization);
    head.classList.remove("width_for_marketingAndDesign");
    box.classList.remove('unfold-close');
    box.classList.add('unfold');
}

function helpFunctionForcloseMarketingAndDesign(box, head) {
    box.classList.remove('unfold');
    box.classList.add('unfold-close');
    setTimeout(() => {
        box.innerHTML = "";
    }, 300);
    head.classList.add("width_for_marketingAndDesign");
}