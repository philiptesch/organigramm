
let empolyerKeyAccountMgmt;
let empolyerPartnerMgmt;
let empolyerGFQReferent;
let empolyerIntOperations;


function getDataAccountMgmt() {
    return empolyer.filter(empl => empl.Department === "KeyAccountMgmt");
}

function getDataPartnerMgmt() {
    return empolyer.filter(empl => empl.Department === "PartnerMgmt");
}

function getDataGFQReferent() {
    return empolyer.filter(empl => empl.Department === "GFQ-Referent");
}

function getDataIntOperation() {
    return empolyer.filter(empl => empl.Department === "Int.Operations");
}




function showkeyAccountMgmt() {
    let show_template_showkeyAccountMgmt = document.getElementById("keyAccountMgmt");
    let toggleWidth_keyaccount = document.getElementById("keyaccount_head_id");
    empolyerKeyAccountMgmt = getDataAccountMgmt();
    empolyerPartnerMgmt = getDataPartnerMgmt();
    empolyerGFQReferent = getDataGFQReferent();
    empolyerIntOperations = getDataIntOperation();

    if (show_template_showkeyAccountMgmt.innerHTML.trim() === "") {
        getKeyAccountMgmtEmpolyer(show_template_showkeyAccountMgmt, toggleWidth_keyaccount )
    } else {
        helpFunctionForclosekeyAccountMgmt(show_template_showkeyAccountMgmt, toggleWidth_keyaccount);
    }
}





function getKeyAccountMgmtEmpolyer(show_template_showkeyAccountMgmt, toggleWidth_keyaccount) {
     template_for_KeyAccountMgmt  = ` <div class="profile_for_keyAccountMgmt">`
         for (let index = 0; index < empolyerKeyAccountMgmt.length; index++) {
        const empolyerNameKeyAccountMgmtEmpolyer = empolyerKeyAccountMgmt[index].Name;
        let createCodeForempolyerDistributionWithNoRegion = ` <div class="person"> <img class="profil_img" src="./assets/img/profilbild.png" alt=""> <p class="profil_name">${empolyerNameKeyAccountMgmtEmpolyer}</p></div> `;

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







function helpFunctionForshowkeyAccountMgmt(box, head, empolyerAccountMgmt, empolyerPartnerMgmt, empolyerGFQReferent, empolyerIntOperation) {
    box.innerHTML = template_showkeyAccountMgmt(empolyerAccountMgmt, empolyerPartnerMgmt, empolyerGFQReferent, empolyerIntOperation);
    head.classList.remove("width_for_keyaccount");
    box.classList.remove('unfold-close');
    box.classList.add('unfold');
}

function helpFunctionForclosekeyAccountMgmt(box, head) {
    box.classList.remove('unfold');
    box.classList.add('unfold-close');
    setTimeout(() => { box.innerHTML = ""; }, 300);
    head.classList.add("width_for_keyaccount");
}