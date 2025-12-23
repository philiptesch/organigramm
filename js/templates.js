


function template_distribution(empolyerDistribution) {
    return `   
<div class="profile">
  <div class="persons-container">
    <div class="person">
        <img class="profil_img" src="./assets/img/profilbild.png" alt="">
        <p class="profil_name"> ${empolyerDistribution[0].Name} </p>
    </div>
</div>
</div>

<div class="profile_for_distribution">
    <h6 class="sub_line_distribution">NO.INT</h6>
    <div class="persons-container">
        <div class="person">
            <img class="profil_img" src="./assets/img/profilbild.png" alt="">
            <p class="profil_name">${empolyerDistribution[1].Name}</p>
        </div>
        <div class="person">
            <img class="profil_img" src="./assets/img/profilbild.png" alt="">
            <p class="profil_name">${empolyerDistribution[2].Name}</p>
        </div>
        <div class="person">
            <img class="profil_img" src="./assets/img/profilbild.png" alt="">
            <p class="profil_name">${empolyerDistribution[3].Name}</p>
        </div>
    </div>
</div>

<!-- 3 Personen: SW.CH -->
<div class="profile_for_distribution">
    <h6 class="sub_line_distribution">SW.CH</h6>
    <div class="persons-container">
        <div class="person">
            <img class="profil_img" src="./assets/img/profilbild.png" alt="">
            <p class="profil_name">${empolyerDistribution[4].Name}</p>
        </div>
        <div class="person">
            <img class="profil_img" src="./assets/img/profilbild.png" alt="">
            <p class="profil_name">${empolyerDistribution[5].Name}</p>
        </div>
        <div class="person">
            <img class="profil_img" src="./assets/img/profilbild.png" alt="">
            <p class="profil_name">${empolyerDistribution[6].Name}</p>
        </div>
    </div>
</div>

<!-- 3 Personen: SO.AT -->
<div class="profile_for_distribution">
    <h6 class="sub_line_distribution">SO.AT</h6>
    <div class="persons-container">
        <div class="person">
            <img class="profil_img" src="./assets/img/profilbild.png" alt="">
            <p class="profil_name">${empolyerDistribution[7].Name}</p>
        </div>
        <div class="person">
            <img class="profil_img" src="./assets/img/profilbild.png" alt="">
            <p class="profil_name">${empolyerDistribution[8].Name}</p>
        </div>
        <div class="person">
            <img class="profil_img" src="./assets/img/profilbild.png" alt="">
            <p class="profil_name">${empolyerDistribution[9].Name}</p>
        </div>
    </div>
</div>

            `
    
}


function template_showkeyAccountMgmt(empolyerAccountMgmt
                ,empolyerPartnerMgmt,empolyerGFQReferent, empolyerIntOperation) {
    return `<div class="profile_for_keyAccountMgmt">
                    <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">Max 1</p></div>
                </div>
                      </div>



                 <div class="partner_content">
                <div class="partner_head"><h4 class="partner_headline">Partner Mgmt</h4>
                      <p>${empolyerAccountMgmt[0].Name} </p></div>
                <div class="profile_partner_mgmt">
                    <div class="profile_head">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerPartnerMgmt[0].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerPartnerMgmt[1].Name}</p></div>
                    </div>

                    <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerPartnerMgmt[2].Name}</p></div>
                </div>
                </div>



                  <div class="gfq_Referent_content">
                <div class="gfq_Referent">
                    <div class="gfq_Referent_head"><h4 class="gfq_Referent_headline">GFQ-Referent</h4>      
                        <p>${empolyerGFQReferent[0].Name}</p>
                    </div>
                    
                    <div class="profile">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerGFQReferent[0].Name}</p></div>
                    </div>
                </div>
                </div>

                  <div class="gfq_Referent_content">
                <div class="int_operations">




                    <div class="int_operations_head"><h4 class="int_operations_headline">Int-Operations</h4>
                     <p>Klaus </p></div>
                    <div class="profile">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerIntOperation[0].Name}</p></div>
                    </div>
                </div> `
}


function template_technicalSupport(empolyerTechnicalSupport) {
    return `          
<div class="profile_header">

    <div class="profile_technical_support">
        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerTechnicalSupport[0].Name}</p></div>
        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerTechnicalSupport[1].Name}</p></div>
        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerTechnicalSupport[2].Name}</p></div>
    </div>

    <!-- viele Blöcke wiederholt -->
    <div class="profil_content">
        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerTechnicalSupport[3].Name}</p></div>
        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerTechnicalSupport[4].Name}</p></div>
        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerTechnicalSupport[5].Name}</p></div>
    </div>

    <div class="profil_content">
        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerTechnicalSupport[6].Name}</p></div>
        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerTechnicalSupport[7].Name}</p></div>
        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerTechnicalSupport[8].Name}</p></div>
    </div>

    <div class="profil_content">
        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerTechnicalSupport[9].Name}</p></div>
        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerTechnicalSupport[10].Name}</p></div>
        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerTechnicalSupport[11].Name}</p></div>
    </div>

    <div class="profil_content">
        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerTechnicalSupport[12].Name}</p></div>
        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerTechnicalSupport[13].Name}</p></div>
        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerTechnicalSupport[14].Name}</p></div>
    </div>

</div>`;
}


function template_ProjectsConsulting(empolyerProjectsConsulting) {
    return`   <div class="profile_header">

                    <div class="profile_technical_support">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerProjectsConsulting[0].Name}1</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerProjectsConsulting[1].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerProjectsConsulting[2].Name}</p></div>
                    </div>

                    <div class="profil_content">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerProjectsConsulting[3].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerProjectsConsulting[4].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerProjectsConsulting[5].Name}</p></div>
                    </div>

                    <div class="profil_content">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerProjectsConsulting[6].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerProjectsConsulting[7].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerProjectsConsulting[8].Name}</p></div>
                    </div>

                    <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerProjectsConsulting[9].Name}</p></div>

                </div>
    `
}


function template_special_operations(empolyerSpecialOperations) {
 return`  <div class="profile_header">

                    <div class="profile_special_operations">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerSpecialOperations[0].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerSpecialOperations[1].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerSpecialOperations[2].Name}</p></div>
                    </div>

                    <div class="profil_content">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerSpecialOperations[3].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerSpecialOperations[4].Name}</p></div>
                    </div>

                </div>
 
 `

}


function template_office_sales_coordination(empolyerOfficeAndSalesCoordination) {
    return `  <div class="profile_header">

                    <div class="profile_office_sales_coordination">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerOfficeAndSalesCoordination[0].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerOfficeAndSalesCoordination[1].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerOfficeAndSalesCoordination[2].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerOfficeAndSalesCoordination[3].Name}</p></div>
                    </div>

                    <div class="profil_content">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerOfficeAndSalesCoordination[4].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerOfficeAndSalesCoordination[5].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerOfficeAndSalesCoordination[6].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerOfficeAndSalesCoordination[7].Name}</p></div>
                    </div>

                    <div class="profil_content">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerOfficeAndSalesCoordination[8].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerOfficeAndSalesCoordination[9].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerOfficeAndSalesCoordination[10].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerOfficeAndSalesCoordination[11].Name}</p></div>
                    </div>

                    <div class="profil_content">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerOfficeAndSalesCoordination[12].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerOfficeAndSalesCoordination[13].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerOfficeAndSalesCoordination[14].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerOfficeAndSalesCoordination[15].Name}</p></div>
                    </div>

                    <div class="profil_content">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerOfficeAndSalesCoordination[16].Name}</p></div>
                    </div>

                </div>
    `
}

function show_template_MarketingAndDesign(empolyerMarketingAndDesign,
        empolyerPRStrategy, empolyerInternalCommunication, empolyerProcessOptimization) {
    return`   <div class="profile_header_for_marketing_and_design">

                    <div class="profile_marketing_and_design">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerMarketingAndDesign[0].Name}1</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerMarketingAndDesign[1].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerMarketingAndDesign[2].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerMarketingAndDesign[3].Name}</p></div>
                    </div>
                    </div>
                    </div>


                <!-- Marketing & Design -->
                 <div class="prAndStrategie">
                    <div class="other_departments_under_marketing_headline_prAndStrategi">
                        <h4 class="other_departments_under_marketing_headline">PR & Strategie </h4>
                     <p>${empolyerPRStrategy[0].Name}</p></div>
                         <div class="other_departments_under_marketing">
                    <div class="profil_content">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerPRStrategy[0].Name}</p></div>
                    </div>
                </div>
                </div>


  <!-- Marketing & Design -->
   <div class="internalCommunications">
                
                    <div class="other_departments_under_marketing_head_int_operations"><h4 class="int_operations_headline">Internal Communications</h4>
                     <p>${empolyerInternalCommunication[0].Name}</p></div>
                         <div class="other_departments_under_marketing">
                    <div class="profil_content">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerInternalCommunication[0].Name}</p></div>
                    </div>                </div>
                </div>
  <!-- Marketing & Design -->


  
                 <div class="processOptimization">
                       <div class="other_departments_under_marketing">
                        <div class="other_departments_under_marketing_headline_processOptimization"><h4 class="other_departments_under_marketing_headline">Prozessoptimierung</h4>
                         <p>${empolyerProcessOptimization[0].Name}</p></div>
                        <div class="profil_content">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerProcessOptimization[0].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerProcessOptimization[1].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name"${empolyerProcessOptimization[2].Name}</p></div>
                    </div>
                </div>
                </div>
    
    `
}

function show_template_hrAndAccounting(empolyerHRAndAccounting, empolyerITAndTechnology, empolyerLegalDepartment) {
    return `<div class="profile_header_for_hr_and_accounting">
                    <div class="profile_hr_and_accounting">
                        <div class="profil_content">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerHRAndAccounting[0].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerHRAndAccounting[1].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerHRAndAccounting[2].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerHRAndAccounting[3].Name}</p></div>
                    </div> 
                    </div>    
                        <div class="profil_content">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerHRAndAccounting[4].Name}</p></div>
                    </div>
                    </div>
                    </div>
                       <div class="itAndtechnic">

                      <div class="other_departments_under_marketing">
                    <div class="other_departments_under_marketing_headline_itAndtechnic"><h4 class="other_departments_under_marketing_headline">IT & Technik</h4>
                     <p>${empolyerITAndTechnology[0].Name}</p></div>
                  <div class="profil_content">
                  <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerITAndTechnology[0].Name}</p></div>
                  <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerITAndTechnology[1].Name}</p></div>
                  <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerITAndTechnology[2].Name}</p></div>
                  <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerITAndTechnology[3].Name}</p></div>
                    </div>
                </div>
                </div>
                <div class="legal_department">
                  <div class="other_departments_under_marketing">
                    <div class="other_departments_under_marketing_headline_legal_department"><h4 class="other_departments_under_marketing_headline">Rechtsabteilung </h4>
                     <p>${empolyerLegalDepartment[0].Name}</p></div>
                  <div class="profil_content">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerLegalDepartment[0].Name}</p></div>
                    </div>
`
                
}


function template_development(empolyerExecutiveTeamCTO,
        empolyerQualityEngineering,empolyerResourceAndData, empolyerQualityManagement, empolyerSoftwareTesting, empolyerDocumentatio) {
    return `    <section class="boardAndQualityEngineering">
                <div class="horizontal_boards">
                <div class="board">
                    <h6 class="sub_line">Vorstandsteam CTO</h6>
                    <div class="board_team">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerExecutiveTeamCTO[0].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerExecutiveTeamCTO[1].Name}</p></div>
                    </div>
                    <div class="board_team">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerExecutiveTeamCTO[2].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerExecutiveTeamCTO[3].Name}</p></div>
                    </div>
                </div>



                <div class="board">
                    <h6 class="sub_line">Quality Engineering</h6>
                    <div class="board_team">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerQualityEngineering[0].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerQualityEngineering[1].Name}</p></div>
                    </div>
                    <div class="board_team">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerQualityEngineering[2].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerQualityEngineering[3].Name}</p></div>
                    </div>
                </div>
  </div>



                <div class="development_test">
                    <h6 class="sub_line">Softwaretest</h6>
                       <div class="board_team">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerSoftwareTesting[0].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerSoftwareTesting[1].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerSoftwareTesting[2].Name}</p></div>
                    </div>

                </div>
            </section>





            <section class="boardAndQualityEngineering">
                  <div class="horizontal_boards">
                <div class="board">
                    <h6 class="sub_line">Resources & Data</h6>
                    <div class="board_team">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerResourceAndData[0].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerResourceAndData[1].Name}</p></div>
                    </div>
                       <div class="board_team">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerResourceAndData[2].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerResourceAndData[3].Name}</p></div>
                    </div>
                </div>



                <div class="board">
                    <h6 class="sub_line">Quality Management</h6>
                    <div class="board_team">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerQualityManagement[0].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerQualityManagement[1].Name}</p></div>
                    </div>
                       <div class="board_team">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerQualityManagement[2].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerQualityManagement[3].Name}</p></div>
                    </div>
                       <div class="board_team">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerQualityManagement[4].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerQualityManagement[5].Name}</p></div>
                    </div>
                       <div class="board_team">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerQualityManagement[6].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerQualityManagement[7].Name}</p></div>
                    </div>
                         <div class="board_team">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerQualityManagement[8].Name}</p></div>
                    </div>
                </div>
                </div>


                
                     <div class="development_test">
                    <h6 class="sub_line">Dokumentation</h6>
                            <div class="board_team">
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerDocumentatio[0].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerDocumentatio[1].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerDocumentatio[2].Name}</p></div>
                        <div class="person"><img class="profil_img" src="./assets/img/profilbild.png" alt=""><p class="profil_name">${empolyerDocumentatio[3].Name}</p></div>
                    </div>

                </div>
            </section>`
}