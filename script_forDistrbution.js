



let template_Distributiont_html  = `<div class="profile">`;
let firstNOINTShownDistributionWithRegion = false;
let empolyerDistributionWithNoRegion;
let empolyerDistributionWithRegionNOINT;
let empolyerDistributionWithRegionSWCH;
let empolyerDistributionWithRegionSOAT;

function getDataDistributionWithNoRegion() {
    return empolyer.filter(empl => 
        empl.Department === "Vertrieb" &&
        empl.Region === undefined )
}


function getDataDistributionWithRegionSWCH() {
    return empolyer.filter(empl => 
        empl.Department === "Vertrieb" &&  empl.Region === "SW.CH");
}

function getDataDistributionWithRegionSOAT() {
    return empolyer.filter(empl =>    empl.Department === "Vertrieb" && empl.Region === "SO.AT");
}

function getDataDistributionWithRegionNOINT() {
    return empolyer.filter(empl => empl.Department === "Vertrieb" && empl.Region === "NO.INT");
}


function showDistribution() {
    let show_template_distribution = document.getElementById("distribution");
    let toggleWidth_distribution = document.getElementById("distribution_head_id");
    empolyerDistributionWithNoRegion = getDataDistributionWithNoRegion();
    
    empolyerDistributionWithRegionNOINT = getDataDistributionWithRegionNOINT();
    empolyerDistributionWithRegionSWCH = getDataDistributionWithRegionSWCH();
    empolyerDistributionWithRegionSOAT = getDataDistributionWithRegionSOAT();

    if (show_template_distribution.innerHTML.trim() === "") {
        getDistrubtionEmployerWithNoRegion(show_template_distribution, toggleWidth_distribution);
        getDistrubtionEmployerRegionNOINT(show_template_distribution, toggleWidth_distribution);
        getDistrubtionEmployerRegionSWCH(show_template_distribution, toggleWidth_distribution);
        getDistrubtionEmployerRegionSOAT(show_template_distribution, toggleWidth_distribution);
    } else {
        helpFunctionForcloseDistribution(show_template_distribution, toggleWidth_distribution);
    }
}



// no Region
function getDistrubtionEmployerWithNoRegion(show_template_distribution, toggleWidth_distribution) {
     template_Distributiont_html  = ` <div class="profile">`
         for (let index = 0; index < empolyerDistributionWithNoRegion.length; index++) {
        const empolyerNameWithNoRegion = empolyerDistributionWithNoRegion[index].Name;
        let createCodeForempolyerDistributionWithNoRegion = ` <div class="person"> <img class="profil_img" src="./assets/img/profilbild.png" alt=""> <p class="profil_name">${empolyerNameWithNoRegion}</p></div> `;

    if (index === 0) {
           showBeginningtemplate_developmentwithNoRegion(show_template_distribution, createCodeForempolyerDistributionWithNoRegion, toggleWidth_distribution)
           if (index === empolyerDistributionWithNoRegion.length - 1) {
            endingtemplate_developmentwithNoRegion()
           }
    } else if (index === empolyerDistributionWithNoRegion.length - 1) {
        showLasttemplate_developmentwithNoRegion(createCodeForempolyerDistributionWithNoRegion)
    } else if (index % 3 === 0) {
        showFirsttemplate_developmentwithNoRegion(createCodeForempolyerDistributionWithNoRegion)
    }else if (index % 3 === 2) {
        showThirdtemplate_developmentwithNoRegion(createCodeForempolyerDistributionWithNoRegion)
    } else
        showNexttemplate_developmentwithNoRegion(createCodeForempolyerDistributionWithNoRegion) 
    }

    if (empolyerDistributionWithRegionNOINT == 0  && empolyerDistributionWithRegionSOAT == 0 && empolyerDistributionWithRegionSWCH == 0  ) {
        show_template_distribution.innerHTML = template_Distributiont_html
        toggleWidth_distribution.classList.add("width_for_distribution");
    }
}





function showThirdtemplate_developmentwithNoRegion(createCodeForempolyerDistributionWithNoRegion) {
     template_Distributiont_html += `${createCodeForempolyerDistributionWithNoRegion}</div>`
}

function showFirsttemplate_developmentwithNoRegion(createCodeForempolyerDistributionWithNoRegion) {
     template_Distributiont_html += ` <div class="persons-container">${createCodeForempolyerDistributionWithNoRegion}`
}

function showBeginningtemplate_developmentwithNoRegion(show_template_distribution, createCodeForempolyerDistributionWithNoRegion, toggleWidth_distribution) {
    template_Distributiont_html += ` <div class="persons-container">${createCodeForempolyerDistributionWithNoRegion}`
    toggleWidth_distribution.classList.remove("width_for_distribution");
    show_template_distribution.classList.remove('unfold-close');
    show_template_distribution.classList.add('unfold')
}

function showNexttemplate_developmentwithNoRegion(createCodeForempolyerDistributionWithNoRegion) {
     template_Distributiont_html += ` ${createCodeForempolyerDistributionWithNoRegion}`
}


function showLasttemplate_developmentwithNoRegion(createCodeForempolyerDistributionWithNoRegion) {
     template_Distributiont_html += ` ${createCodeForempolyerDistributionWithNoRegion}</div> </div>`;
     console.log('template_Distributiont_html', template_Distributiont_html);
     
}

function endingtemplate_developmentwithNoRegion() {
    template_Distributiont_html += `</div> </div>`
}



// Region INT

function getDistrubtionEmployerRegionNOINT(show_template_distribution, toggleWidth_distribution){
        template_Distributiont_html  += ` <div class="profile_for_distribution"><h6 class="sub_line_distribution">NO.INT</h6>`
         for (let index = 0; index < empolyerDistributionWithRegionNOINT.length; index++) {
        const empolyerNameWithRegionNOINT = empolyerDistributionWithRegionNOINT[index].Name;
        let createCodeForempolyerDistributionWithRegionNOINT = ` <div class="person"> <img class="profil_img" src="./assets/img/profilbild.png" alt=""> <p class="profil_name">${empolyerNameWithRegionNOINT}</p></div> `;

    if (index === 0) {
           showBeginningtemplate_developmentwithRegionNOINT(createCodeForempolyerDistributionWithRegionNOINT)

           if (index === empolyerDistributionWithRegionNOINT.length - 1) {
                endingtemplate_developmentRegionNOINT()
           }
    } else if (index === empolyerDistributionWithRegionNOINT.length - 1) {
        showLasttemplate_developmentwithRegionNOINT(createCodeForempolyerDistributionWithRegionNOINT)
    } else if (index % 3 === 0) {
        showFirsttemplate_developmentwithRegionNOINT(createCodeForempolyerDistributionWithRegionNOINT)
    }else if (index % 3 === 2) {
        showThirdtemplate_developmentwithRegionNOINT(createCodeForempolyerDistributionWithRegionNOINT)
    } else
        showNexttemplate_developmentwithRegionNOINT(createCodeForempolyerDistributionWithRegionNOINT) 
    }

    
    if (empolyerDistributionWithRegionSOAT == 0 && empolyerDistributionWithRegionSWCH == 0  ) {
        show_template_distribution.innerHTML = `${template_Distributiont_html}</div>`
        console.log('template_Distributiont_html',template_Distributiont_html);
        
        toggleWidth_distribution.classList.add("width_for_distribution");
    }
}


function endingtemplate_developmentRegionNOINT() {
    template_Distributiont_html += `</div> </div>`
}



function showThirdtemplate_developmentwithRegionNOINT(createCodeForempolyerDistributionWithRegionNOINT) {
     template_Distributiont_html += `${createCodeForempolyerDistributionWithRegionNOINT}</div>`
}

function showFirsttemplate_developmentwithRegionNOINT(createCodeForempolyerDistributionWithRegionNOINT) {
     template_Distributiont_html += ` <div class="persons-container">${createCodeForempolyerDistributionWithRegionNOINT}`
}

function showBeginningtemplate_developmentwithRegionNOINT(createCodeForempolyerDistributionWithRegionNOINT) {
    template_Distributiont_html += ` <div class="persons-container">${createCodeForempolyerDistributionWithRegionNOINT}`
}

function showNexttemplate_developmentwithRegionNOINT(createCodeForempolyerDistributionWithRegionNOINT) {
     template_Distributiont_html += ` ${createCodeForempolyerDistributionWithRegionNOINT}`
}


function showLasttemplate_developmentwithRegionNOINT(createCodeForempolyerDistributionWithRegionNOINT) {
     template_Distributiont_html += ` ${createCodeForempolyerDistributionWithRegionNOINT}</div> </div>`;
}


function getDistrubtionEmployerRegionSWCH(show_template_distribution, toggleWidth_distribution){
        template_Distributiont_html  += `<div class="profile_for_distribution"><h6 class="sub_line_distribution">SW.CH</h6>`
         for (let index = 0; index < empolyerDistributionWithRegionSWCH.length; index++) {
        const empolyerNameWithRegionSWCH = empolyerDistributionWithRegionSWCH[index].Name;
        let createCodeForempolyerDistributionWithRegionSWCH = ` <div class="person"> <img class="profil_img" src="./assets/img/profilbild.png" alt=""> <p class="profil_name">${empolyerNameWithRegionSWCH}</p></div> `;

    if (index === 0) {
           showBeginningtemplate_developmentwithRegionSWCH(createCodeForempolyerDistributionWithRegionSWCH)

        if (index === empolyerDistributionWithRegionSWCH.length - 1) {
            endingtemplate_developmentRegionSWCH();
        }

    } else if (index === empolyerDistributionWithRegionSWCH.length - 1) {
        showLasttemplate_developmentwithRegionSWCH(createCodeForempolyerDistributionWithRegionSWCH)
    } else if (index % 3 === 0) {
        showFirsttemplate_developmentwithRegionSWCH(createCodeForempolyerDistributionWithRegionSWCH)
    }else if (index % 3 === 2) {
        showThirdtemplate_developmentwithRegionSWCH(createCodeForempolyerDistributionWithRegionSWCH)
    } else
        showNexttemplate_developmentwithRegionSWCH(createCodeForempolyerDistributionWithRegionSWCH) 
    }

    
    if (empolyerDistributionWithRegionSOAT == 0  ) {
        show_template_distribution.innerHTML = `${template_Distributiont_html}</div>`
        console.log('template_Distributiont_html',template_Distributiont_html);
        toggleWidth_distribution.classList.add("width_for_distribution");
    }
}


function endingtemplate_developmentRegionSWCH() {
    template_Distributiont_html += `</div> </div>`
}


function showThirdtemplate_developmentwithRegionSWCH(createCodeForempolyerDistributionWithRegionSWCH) {
     template_Distributiont_html += `${createCodeForempolyerDistributionWithRegionSWCH}</div>`
}

function showFirsttemplate_developmentwithRegionSWCH(createCodeForempolyerDistributionWithRegionSWCH) {
     template_Distributiont_html += ` <div class="persons-container">${createCodeForempolyerDistributionWithRegionSWCH}`
}

function showBeginningtemplate_developmentwithRegionSWCH(createCodeForempolyerDistributionWithRegionSWCH) {
    template_Distributiont_html += ` <div class="persons-container">${createCodeForempolyerDistributionWithRegionSWCH}`
}

function showNexttemplate_developmentwithRegionSWCH(createCodeForempolyerDistributionWithRegionSWCH) {
     template_Distributiont_html += ` ${createCodeForempolyerDistributionWithRegionSWCH}`
}


function showLasttemplate_developmentwithRegionSWCH(createCodeForempolyerDistributionWithRegionSWCH) {
     template_Distributiont_html += ` ${createCodeForempolyerDistributionWithRegionSWCH}</div> </div>`;
}




function getDistrubtionEmployerRegionSOAT(show_template_distribution, toggleWidth_distribution){
        template_Distributiont_html  += `<div class="profile_for_distribution"><h6 class="sub_line_distribution">SO.AT</h6>`
         for (let index = 0; index < empolyerDistributionWithRegionSOAT.length; index++) {
        const empolyerNameWithRegionSOAT = empolyerDistributionWithRegionSOAT[index].Name;
        let createCodeForempolyerDistributionWithRegionSOAT = ` <div class="person"> <img class="profil_img" src="./assets/img/profilbild.png" alt=""> <p class="profil_name">${empolyerNameWithRegionSOAT}</p></div> `;

    if (index === 0) {
           showBeginningtemplate_developmentwithRegionSOAT(createCodeForempolyerDistributionWithRegionSOAT)

           if (index === empolyerDistributionWithRegionSOAT.length - 1) {
                endingtemplate_developmentRegionSOAT();
           }
    } else if (index === empolyerDistributionWithRegionSWCH.length - 1) {
        showLasttemplate_developmentwithRegionSOAT(createCodeForempolyerDistributionWithRegionSOAT)
    } else if (index % 3 === 0) {
        showFirsttemplate_developmentwithRegionSOAT(createCodeForempolyerDistributionWithRegionSOAT)
    }else if (index % 3 === 2) {
        showThirdtemplate_developmentwithRegionSOAT(createCodeForempolyerDistributionWithRegionSOAT)
    } else
        showNexttemplate_developmentwithRegionSOAT(createCodeForempolyerDistributionWithRegionSOAT) 
    }

        show_template_distribution.innerHTML += `${template_Distributiont_html}</div>`
        console.log('template_Distributiont_html',template_Distributiont_html);
        toggleWidth_distribution.classList.add("width_for_distribution");
}


function endingtemplate_developmentRegionSOAT() {
    template_Distributiont_html += `</div> </div>`
}


function showThirdtemplate_developmentwithRegionSOAT(createCodeForempolyerDistributionWithRegionSOAT) {
     template_Distributiont_html += `${createCodeForempolyerDistributionWithRegionSOAT}</div>`
}

function showFirsttemplate_developmentwithRegionSOAT(createCodeForempolyerDistributionWithRegionSOAT) {
     template_Distributiont_html += ` <div class="persons-container">${createCodeForempolyerDistributionWithRegionSOAT}`
}

function showBeginningtemplate_developmentwithRegionSOAT(createCodeForempolyerDistributionWithRegionSOAT) {
    template_Distributiont_html += ` <div class="persons-container">${createCodeForempolyerDistributionWithRegionSOAT}`
}

function showNexttemplate_developmentwithRegionSOAT(createCodeForempolyerDistributionWithRegionSOAT) {
     template_Distributiont_html += ` ${createCodeForempolyerDistributionWithRegionSOAT}`
}


function showLasttemplate_developmentwithRegionSOAT(createCodeForempolyerDistributionWithRegionSOAT) {
     template_Distributiont_html += ` ${createCodeForempolyerDistributionWithRegionSOAT}</div> </div>`;
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









function showThirdtemplate_developmentwithNoRegion(createCodeForempolyerDistribution) {
     template_Distributiont_html += `${createCodeForempolyerDistribution}</div>`
}

function showFirsttemplate_developmentwithNoRegion(createCodeForempolyerDistribution) {
     template_Distributiont_html += ` <div class="persons-container">${createCodeForempolyerDistribution}`
}

function showNexttemplate_developmentwithNoRegion(createCodeForempolyerDistribution) {
     template_Distributiont_html += ` ${createCodeForempolyerDistribution}`
}


function showLasttemplate_developmentwithNoRegion(createCodeForempolyerDistribution) {
     template_Distributiont_html += ` ${createCodeForempolyerDistribution}</div> </div`;
}

function getTemplatBeginningForDistribution(createCodeForempolyerTechnicalSupport, toggleWidth_technicalSupport, show_template_technicalSupport) {
    let html = `<div class="profile_technical_support">`;
    template_technicalSupport_html += `${html} ${createCodeForempolyerTechnicalSupport}`; // Header sofort schließen
    toggleWidth_technicalSupport.classList.remove("width_for_technicalSupport");
    show_template_technicalSupport.classList.remove('unfold-close');
    show_template_technicalSupport.classList.add('unfold');
}


function template_DistrubtionEmployertwithNoRegion(empolyerDistribution, createCodeForempolyerDistribution, index, show_template_technicalSupport, toggleWidth_technicalSupport) {
   
    if (index === empolyerDistribution.length - 1) {
           showLasttemplate_developmentwithNoRegion(createCodeForempolyerDistribution)
    } else if (index % 3 === 2) {
        showThirdtemplate_developmentwithNoRegion(createCodeForempolyerDistribution)
    } else if (index % 3 === 0) {
            showFirsttemplate_developmentwithNoRegion(createCodeForempolyerDistribution)
    }{
        showNexttemplate_developmentwithNoRegion(createCodeForempolyerDistribution) 
    }

    toggleWidth_technicalSupport.classList.remove("width_for_distribution");
    show_template_technicalSupport.classList.remove('unfold-close');
    show_template_technicalSupport.classList.add('unfold')
    
}







function helpFunctionForshowDistribution(empolyerDistribution, box, head) {
    box.innerHTML = template_distribution(empolyerDistribution);
    head.classList.remove("width_for_distribution");
    box.classList.remove('unfold-close');
    box.classList.add('unfold');
}

function helpFunctionForcloseDistribution(box, head) {
    box.classList.remove('unfold');
    box.classList.add('unfold-close');
    setTimeout(() => { box.innerHTML = ""; }, 300);
    head.classList.add("width_for_distribution");
}