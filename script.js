let empolyer = [];

async function getData() {
    let response = await fetch("./empolyer.json");
    empolyer = await response.json();
    console.log('response', empolyer);
    getDataDistribution();
    getDataAccountMgmt();
    getDataPartnerMgmt();
    getDataGFQReferent();
    getDataIntOperation();
}

function getDataDistribution() {
    return empolyer.filter(empl => empl.Department === "Vertrieb");
}

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

function getMarketingAndDesign() {
    return empolyer.filter(emp => emp.Department === "Marketing & Design");
}

function getPRStrategy() {
    return empolyer.filter(emp => emp.Department === "PR & Strategie");
}

function getInternalCommunication() {
    return empolyer.filter(emp => emp.Department === "Internat Communication");
}

function getProcessOptimization() {
    return empolyer.filter(emp => emp.Department === "Prozessoptimierung");
}

function getHRAndAccounting() {
    return empolyer.filter(emp => emp.Department === "HR & Rechnungswesen");
}

function getITAndTechnology() {
    return empolyer.filter(emp => emp.Department === "IT & Technik");
}

function getLegalDepartment() {
    return empolyer.filter(emp => emp.Department === "Rechtsabteilung");
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
        helpFunctionForshowDistribution(show_template_distribution, toggleWidth_distribution, empolyerDistribution);
    } else {
        helpFunctionForcloseDistribution(show_template_distribution, toggleWidth_distribution);
    }
}

function helpFunctionForshowDistribution(box, head, empolyerDistribution) {
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

function showkeyAccountMgmt() {
    let show_template_showkeyAccountMgmt = document.getElementById("keyAccountMgmt");
    let toggleWidth_keyaccount = document.getElementById("keyaccount_head_id");
    let empolyerAccountMgmt = getDataAccountMgmt();
    let empolyerPartnerMgmt = getDataPartnerMgmt();
    let empolyerGFQReferent = getDataGFQReferent();
    let empolyerIntOperation = getDataIntOperation();

    if (show_template_showkeyAccountMgmt.innerHTML.trim() === "") {
        helpFunctionForshowkeyAccountMgmt(
            show_template_showkeyAccountMgmt,
            toggleWidth_keyaccount,
            empolyerAccountMgmt,
            empolyerPartnerMgmt,
            empolyerGFQReferent,
            empolyerIntOperation
        );
    } else {
        helpFunctionForclosekeyAccountMgmt(show_template_showkeyAccountMgmt, toggleWidth_keyaccount);
    }
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

function showtechnicalSupport() {
    let show_template_technicalSupport = document.getElementById("technical_supportId");
    let toggleWidth_technicalSupport = document.getElementById("technical_support_headId");
    let empolyerTechnicalSupport = getTechnicalSupport();

    if (show_template_technicalSupport.innerHTML.trim() === "") {
        helpFunctionForshowtechnicalSupport(show_template_technicalSupport, toggleWidth_technicalSupport, empolyerTechnicalSupport);
    } else {
        helpFunctionForclosetechnicalSupport(show_template_technicalSupport, toggleWidth_technicalSupport);
    }
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




function showMarketingAndDesign() {
    let show_template_MarketingAndDesign = document.getElementById("marketingAndDesignId");
    let toggleWidth_MarketingAndDesign = document.getElementById("marketingAndDesignHeadId");
    let empolyerMarketingAndDesign= getMarketingAndDesign()
    let empolyerPRStrategy= getPRStrategy()
    let empolyerInternalCommunication= getInternalCommunication()
    let empolyerProcessOptimization= getProcessOptimization()
    if (show_template_MarketingAndDesign.innerHTML.trim()  === "") {
      helpFunctionMarketingAndDesign(show_template_MarketingAndDesign, toggleWidth_MarketingAndDesign, empolyerMarketingAndDesign,
        empolyerPRStrategy, empolyerInternalCommunication, empolyerProcessOptimization
      )
    } else {
    helpFunctionForcloseMarketingAndDesign(show_template_MarketingAndDesign, toggleWidth_MarketingAndDesign)
    }
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



function showhrAndAccounting() {
    let show_template_hrAndAccounting = document.getElementById("hrAndAccountingId");
    let toggleWidth_hrAndAccounting= document.getElementById("hrAndAccountingHeadId");
    let empolyerHRAndAccounting= getHRAndAccounting()
    let empolyerITAndTechnology= getITAndTechnology()
    let empolyerLegalDepartment= getLegalDepartment()
    if (show_template_hrAndAccounting.innerHTML.trim()  === "") {
      helpFunctionhrAndAccounting(show_template_hrAndAccounting, toggleWidth_hrAndAccounting, empolyerHRAndAccounting, empolyerITAndTechnology, empolyerLegalDepartment)
    } else {
    helpFunctionForclosehrAndAccounting(show_template_hrAndAccounting, toggleWidth_hrAndAccounting)
    }
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

