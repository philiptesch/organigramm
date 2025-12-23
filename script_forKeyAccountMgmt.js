let template_KeyAccountMgmt_html 
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
        getKeyAccountMgmtEmpolyer(show_template_showkeyAccountMgmt, toggleWidth_keyaccount );
        getPartnerMgmtEmployer(show_template_showkeyAccountMgmt, toggleWidth_keyaccount );
        getGfqReferentEmployer(show_template_showkeyAccountMgmt, toggleWidth_keyaccount); 
        getIntoperationsEmployer(show_template_showkeyAccountMgmt, toggleWidth_keyaccount);
    } else {
        helpFunctionForclosekeyAccountMgmt(show_template_showkeyAccountMgmt, toggleWidth_keyaccount);
    }
}





function getKeyAccountMgmtEmpolyer(show_template_showkeyAccountMgmt, toggleWidth_keyaccount) {
     template_KeyAccountMgmt_html  = ` <div class="profile_for_keyAccountMgmt">`
         for (let index = 0; index < empolyerKeyAccountMgmt.length; index++) {
        const empolyerNameKeyAccountMgmtEmpolyer = empolyerKeyAccountMgmt[index].Name;
        let createCodeForempolyerKeyAccountMgmtEmpolyer = ` <div class="person"> <img class="profil_img" src="./assets/img/profilbild.png" alt=""> <p class="profil_name">${empolyerNameKeyAccountMgmtEmpolyer}</p></div> `;


    if (index === 0) {
           showBeginningtemplate_KeyAccountMgmtEmpolyer(show_template_showkeyAccountMgmt, createCodeForempolyerKeyAccountMgmtEmpolyer, toggleWidth_keyaccount)
           if (index === empolyerKeyAccountMgmt.length - 1) {
            endingtemplate_KeyAccountMgmtEmpolyer()
           }
    } else if (index === empolyerKeyAccountMgmt.length - 1) {
        showLasttemplate_KeyAccountMgmtEmpolyer(createCodeForempolyerKeyAccountMgmtEmpolyer)
    } else if (index % 2 === 0) {
        showFirsttemplate_KeyAccountMgmtEmpolyer(createCodeForempolyerKeyAccountMgmtEmpolyer)
    }else if (index % 2 === 1) {
        showSecondtemplate_KeyAccountMgmtEmpolyer(createCodeForempolyerKeyAccountMgmtEmpolyer)
    } else
        showNexttemplate_KeyAccountMgmtEmpolyer(createCodeForempolyerKeyAccountMgmtEmpolyer) 
    }

    if (empolyerPartnerMgmt == 0  && empolyerGFQReferent == 0 && empolyerIntOperations == 0  ) {
        show_template_showkeyAccountMgmt.innerHTML = template_KeyAccountMgmt_html
        toggleWidth_keyaccount.classList.add("width_for_keyaccount");
    }
}





function showSecondtemplate_KeyAccountMgmtEmpolyer(createCodeForempolyerKeyAccountMgmtEmpolyer) {
     template_KeyAccountMgmt_html += `${createCodeForempolyerKeyAccountMgmtEmpolyer}</div>`
}

function showFirsttemplate_KeyAccountMgmtEmpolyer(createCodeForempolyerKeyAccountMgmtEmpolyer) {
     template_KeyAccountMgmt_html += ` <div class="persons-container">${createCodeForempolyerKeyAccountMgmtEmpolyer}`
}

function showBeginningtemplate_KeyAccountMgmtEmpolyer(show_template_showkeyAccountMgmt, createCodeForempolyerKeyAccountMgmtEmpolyer, toggleWidth_keyaccount) {
    template_KeyAccountMgmt_html += ` <div class="persons-container">${createCodeForempolyerKeyAccountMgmtEmpolyer}`
    toggleWidth_keyaccount.classList.remove("width_for_keyaccount");
    show_template_showkeyAccountMgmt.classList.remove('unfold-close');
    show_template_showkeyAccountMgmt.classList.add('unfold')
}

function showNexttemplate_KeyAccountMgmtEmpolyer(createCodeForempolyerKeyAccountMgmtEmpolyer) {
     template_KeyAccountMgmt_html += ` ${createCodeForempolyerKeyAccountMgmtEmpolyer}`
}


function showLasttemplate_KeyAccountMgmtEmpolyer(createCodeForempolyerKeyAccountMgmtEmpolyer) {
     template_KeyAccountMgmt_html += ` ${createCodeForempolyerKeyAccountMgmtEmpolyer}</div> </div>`;
     console.log('template_KeyAccountMgmt_html', template_KeyAccountMgmt_html);
     
}

function endingtemplate_KeyAccountMgmtEmpolyer() {
    template_KeyAccountMgmt_html += `</div> </div>`
}









function getPartnerMgmtEmployer(show_template_showkeyAccountMgmt, toggleWidth_keyaccount) {
     template_KeyAccountMgmt_html  += `   <div class="partner_content"><div class="partner_head"><h4 class="partner_headline">Partner Mgmt</h4><p>${empolyerPartnerMgmt[0].Name} </p></div><div class="profile_partner_mgmt">`
         for (let index = 0; index < empolyerPartnerMgmt.length; index++) {
        const empolyerNamePartnerMgmt = empolyerPartnerMgmt[index].Name;
        let createCodeForempolyerPartnerMgmtEmployer = ` <div class="person"> <img class="profil_img" src="./assets/img/profilbild.png" alt=""> <p class="profil_name">${empolyerNamePartnerMgmt}</p></div> `;


    if (index === 0) {
           showBeginningtemplate_PartnerMgmtEmployer(createCodeForempolyerPartnerMgmtEmployer)
           if (index === empolyerPartnerMgmt.length - 1) {
            endingtemplate_PartnerMgmtEmployerr()
           }
    } else if (index === empolyerPartnerMgmt.length - 1) {
        showLasttemplate_PartnerMgmtEmployer(createCodeForempolyerPartnerMgmtEmployer)
    } else if (index % 2 === 0) {
        showFirsttemplate_PartnerMgmtEmployer(createCodeForempolyerPartnerMgmtEmployer)
    }else if (index % 2 === 1) {
        showSecondtemplate_PartnerMgmtEmployer(createCodeForempolyerPartnerMgmtEmployer)
    } else
        showNexttemplate_PartnerMgmtEmployer(createCodeForempolyerPartnerMgmtEmployer) 
    }

    if (empolyerGFQReferent == 0 && empolyerIntOperations == 0  ) {
        show_template_showkeyAccountMgmt.innerHTML = template_KeyAccountMgmt_html
        toggleWidth_keyaccount.classList.add("width_for_keyaccount");
    }
}





function showSecondtemplate_PartnerMgmtEmployer(createCodeForempolyerPartnerMgmtEmployer) {
     template_KeyAccountMgmt_html += `${createCodeForempolyerPartnerMgmtEmployer}</div>`
}

function showFirsttemplate_PartnerMgmtEmployer(createCodeForempolyerPartnerMgmtEmployer) {
     template_KeyAccountMgmt_html += ` <div class="persons-container">${createCodeForempolyerPartnerMgmtEmployer}`
}

function showBeginningtemplate_PartnerMgmtEmployer(createCodeForempolyerPartnerMgmtEmployer) {
    template_KeyAccountMgmt_html += ` <div class="persons-container">${createCodeForempolyerPartnerMgmtEmployer}`
}

function showNexttemplate_PartnerMgmtEmployer(createCodeForempolyerPartnerMgmtEmployer) {
     template_KeyAccountMgmt_html += ` ${createCodeForempolyerPartnerMgmtEmployer}`
}


function showLasttemplate_PartnerMgmtEmployer(createCodeForempolyerPartnerMgmtEmployer) {
     template_KeyAccountMgmt_html += ` ${createCodeForempolyerPartnerMgmtEmployer}</div> </div> </div>`;
     console.log('template_KeyAccountMgmt_html', template_KeyAccountMgmt_html);
     
}

function endingtemplate_PartnerMgmtEmployerr() {
    template_KeyAccountMgmt_html += `</div> </div> </div>`
}




function getGfqReferentEmployer(show_template_showkeyAccountMgmt, toggleWidth_keyaccount) {
     template_KeyAccountMgmt_html  += `<div class="gfq_Referent_content"><div class="gfq_Referent"><div class="gfq_Referent_head"><h4 class="gfq_Referent_headline">GFQ-Referent</h4><p>${empolyerGFQReferent[0].Name}</p></div><div class="profile_for_Gfq_Referent">`
         for (let index = 0; index < empolyerGFQReferent.length; index++) {
        const empolyerNameGfqReferent = empolyerGFQReferent[index].Name;
        let createCodeForempolyerGfqReferentEmployer = ` <div class="person"> <img class="profil_img" src="./assets/img/profilbild.png" alt=""> <p class="profil_name">${empolyerNameGfqReferent}</p></div> `;


    if (index === 0) {
           showBeginningtemplate_GfqReferentEmployer(createCodeForempolyerGfqReferentEmployer)
           if (index === empolyerGFQReferent.length - 1) {
            endingtemplate_GfqReferentEmployer()
           }
    } else if (index === empolyerGFQReferent.length - 1) {
        showLasttemplate_GfqReferentEmployer(createCodeForempolyerGfqReferentEmployer)
    } else if (index % 2 === 0) {
        showFirsttemplate_GfqReferentEmployer(createCodeForempolyerGfqReferentEmployer)
    }else if (index % 2 === 1) {
        showSecondtemplate_GfqReferentEmployer(createCodeForempolyerGfqReferentEmployer)
    } else
        showNexttemplate_GfqReferentEmployer(createCodeForempolyerGfqReferentEmployer) 
    }

    if (empolyerIntOperations == 0  ) {
        show_template_showkeyAccountMgmt.innerHTML = template_KeyAccountMgmt_html
        toggleWidth_keyaccount.classList.add("width_for_keyaccount");
    }
}





function showSecondtemplate_GfqReferentEmployer(createCodeForempolyerGfqReferentEmployer) {
     template_KeyAccountMgmt_html += `${createCodeForempolyerGfqReferentEmployer}</div>`
}

function showFirsttemplate_GfqReferentEmployer(createCodeForempolyerGfqReferentEmployer) {
     template_KeyAccountMgmt_html += ` <div class="persons-container">${createCodeForempolyerGfqReferentEmployer}`
}

function showBeginningtemplate_GfqReferentEmployer(createCodeForempolyerGfqReferentEmployer) {
    template_KeyAccountMgmt_html += ` <div class="persons-container">${createCodeForempolyerGfqReferentEmployer}`
}

function showNexttemplate_GfqReferentEmployer(createCodeForempolyerGfqReferentEmployer) {
     template_KeyAccountMgmt_html += ` ${createCodeForempolyerGfqReferentEmployer}`
}


function showLasttemplate_GfqReferentEmployer(createCodeForempolyerGfqReferentEmployer) {
     template_KeyAccountMgmt_html += ` ${createCodeForempolyerGfqReferentEmployer}</div> </div> </div>`;
     console.log('template_KeyAccountMgmt_html', template_KeyAccountMgmt_html);
     
}

function endingtemplate_GfqReferentEmployer() {
    template_KeyAccountMgmt_html += `</div> </div> </div>`
}












function getIntoperationsEmployer(show_template_showkeyAccountMgmt, toggleWidth_keyaccount) {
     template_KeyAccountMgmt_html  += `<div class="int_operations_content"> <div class="int_operations"><div class="int_operations_head"><h4 class="int_operations_headline">Int-Operations</h4><p>${empolyerIntOperations[0].Name} </p></div><div class="profile_for_Int_operations">`
         for (let index = 0; index < empolyerIntOperations.length; index++) {
        const empolyerNameIntoperations = empolyerIntOperations[index].Name;
        let createCodeForempolyerIntoperationsEmployer = ` <div class="person"> <img class="profil_img" src="./assets/img/profilbild.png" alt=""> <p class="profil_name">${empolyerNameIntoperations}</p></div> `;


    if (index === 0) {
           showBeginningtemplate_IntoperationsEmployer(createCodeForempolyerIntoperationsEmployer)
           if (index === empolyerIntOperations.length - 1) {
            endingtemplate_IntoperationsEmployer()
           }
    } else if (index === empolyerIntOperations.length - 1) {
        showLasttemplate_IntoperationsEmployer(createCodeForempolyerIntoperationsEmployer)
    } else if (index % 2 === 0) {
        showFirsttemplate_IntoperationsEmployer(createCodeForempolyerIntoperationsEmployer)
    }else if (index % 2 === 1) {
        showSecondtemplate_IntoperationsEmployer(createCodeForempolyerIntoperationsEmployer)
    } else
        showNexttemplate_IntoperationsEmployer(createCodeForempolyerIntoperationsEmployer) 
    }

  
        show_template_showkeyAccountMgmt.innerHTML = template_KeyAccountMgmt_html
        toggleWidth_keyaccount.classList.add("width_for_keyaccount");
    
}





function showSecondtemplate_IntoperationsEmployer(createCodeForempolyerIntoperationsEmployer) {
     template_KeyAccountMgmt_html += `${createCodeForempolyerIntoperationsEmployer}</div>`
}

function showFirsttemplate_IntoperationsEmployer(createCodeForempolyerIntoperationsEmployer) {
     template_KeyAccountMgmt_html += ` <div class="persons-container">${createCodeForempolyerIntoperationsEmployer}`
}

function showBeginningtemplate_IntoperationsEmployer(createCodeForempolyerIntoperationsEmployer) {
    template_KeyAccountMgmt_html += ` <div class="persons-container">${createCodeForempolyerIntoperationsEmployer}`
}

function showNexttemplate_IntoperationsEmployer(createCodeForempolyerIntoperationsEmployer) {
     template_KeyAccountMgmt_html += ` ${createCodeForempolyerIntoperationsEmployer}`
}


function showLasttemplate_IntoperationsEmployer(createCodeForempolyerIntoperationsEmployer) {
     template_KeyAccountMgmt_html += ` ${createCodeForempolyerIntoperationsEmployer}</div> </div> </div>`;
     console.log('template_KeyAccountMgmt_html', template_KeyAccountMgmt_html);
     
}

function endingtemplate_IntoperationsEmployer() {
    template_KeyAccountMgmt_html += `</div> </div> </div>`
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