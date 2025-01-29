document.addEventListener("DOMContentLoaded", function () {
    const tdInputAlg = document.querySelector("tbody tr:nth-child(1) td:nth-child(3) input");
    const tpInputAlg = document.querySelector("tbody tr:nth-child(1) td:nth-child(4) input");
    const examInputAlg = document.querySelector("tbody tr:nth-child(1) td:nth-child(5) input");
    const moyenneCellAlg = document.querySelector("tbody tr:nth-child(1) td:nth-child(6)");

    const tdInputArch = document.querySelector("tbody tr:nth-child(2) td:nth-child(3) input");
    const examInputArch = document.querySelector("tbody tr:nth-child(2) td:nth-child(5) input");
    const moyenneCellArch = document.querySelector("tbody tr:nth-child(2) td:nth-child(6)");

    const tpInputSys = document.querySelector("tbody tr:nth-child(3) td:nth-child(4) input");
    const examInputSys = document.querySelector("tbody tr:nth-child(3) td:nth-child(5) input");
    const moyenneCellSys = document.querySelector("tbody tr:nth-child(3) td:nth-child(6)");

    const tdInputAna = document.querySelector("tbody tr:nth-child(4) td:nth-child(3) input");
    const examInputAna = document.querySelector("tbody tr:nth-child(4) td:nth-child(5) input");
    const moyenneCellAna = document.querySelector("tbody tr:nth-child(4) td:nth-child(6)");

    const tdInputAlge = document.querySelector("tbody tr:nth-child(5) td:nth-child(3) input");
    const examInputAlge = document.querySelector("tbody tr:nth-child(5) td:nth-child(5) input");
    const moyenneCellAlge = document.querySelector("tbody tr:nth-child(5) td:nth-child(6)");

    const tpInputAng = document.querySelector("tbody tr:nth-child(6) td:nth-child(4) input");
    const examInputAng = document.querySelector("tbody tr:nth-child(6) td:nth-child(5) input");
    const moyenneCellAng = document.querySelector("tbody tr:nth-child(6) td:nth-child(6)");

    const examInputElec = document.querySelector("tbody tr:nth-child(7) td:nth-child(5) input");
    const moyenneCellElec = document.querySelector("tbody tr:nth-child(7) td:nth-child(6)");

    const moyenneFinaleCell = document.querySelector("tbody tr:last-child td:last-child");

    
    let moyennesModules = [];

   
    function calculateMoyenneAlg() {
        let td = parseFloat(tdInputAlg.value) || 0;
        let tp = parseFloat(tpInputAlg.value) || 0;
        let exam = parseFloat(examInputAlg.value) || 0;
        let moyenne = ((td * 0.2) + (tp * 0.2) + (exam * 0.6)) * 5;
        moyenneCellAlg.textContent = moyenne.toFixed(2);
        moyennesModules[0] = moyenne;
        updateMoyenneFinale();
    }

    function calculateMoyenneArch() {
        let td = parseFloat(tdInputArch.value) || 0;
        let exam = parseFloat(examInputArch.value) || 0;
        let moyenne = ((td * 0.4) + (exam * 0.6)) * 4;
        moyenneCellArch.textContent = moyenne.toFixed(2);
        moyennesModules[1] = moyenne;
        updateMoyenneFinale();
    }

    function calculateMoyenneSys() {
        let td = parseFloat(tpInputSys.value) || 0;
        let exam = parseFloat(examInputSys.value) || 0;
        let moyenne = ((td * 0.4) + (exam * 0.6)) * 3;
        moyenneCellSys.textContent = moyenne.toFixed(2);
        moyennesModules[2] = moyenne;
        updateMoyenneFinale();
    }

    function calculateMoyenneAna() {
        let td = parseFloat(tdInputAna.value) || 0;
        let exam = parseFloat(examInputAna.value) || 0;
        let moyenne = ((td * 0.4) + (exam * 0.6)) * 3;
        moyenneCellAna.textContent = moyenne.toFixed(2);
        moyennesModules[3] = moyenne;
        updateMoyenneFinale();
    }

    function calculateMoyenneAlge() {
        let td = parseFloat(tdInputAlge.value) || 0;
        let exam = parseFloat(examInputAlge.value) || 0;
        let moyenne = ((td * 0.4) + (exam * 0.6)) * 3;
        moyenneCellAlge.textContent = moyenne.toFixed(2);
        moyennesModules[4] = moyenne;
        updateMoyenneFinale();
    }

    function calculateMoyenneAng() {
        let tp = parseFloat(tpInputAng.value) || 0;
        let exam = parseFloat(examInputAng.value) || 0;
        let moyenne = ((tp * 0.5) + (exam * 0.5)) * 1;
        moyenneCellAng.textContent = moyenne.toFixed(2);
        moyennesModules[5] = moyenne;
        updateMoyenneFinale();
    }

    function calculateMoyenneElec() {
        
        let exam = parseFloat(examInputElec.value) || 0;
        let moyenne = exam ; 
        moyenneCellElec.textContent = moyenne.toFixed(2);
        moyennesModules[6] = moyenne;
        updateMoyenneFinale();
    }

    
    function updateMoyenneFinale() {
        let sommeMoyennes = 0;

        for (let i = 0; i < moyennesModules.length; i++) {
            if (!isNaN(moyennesModules[i])) {
                sommeMoyennes += moyennesModules[i];
            }
        }

        let moyenneFinale = sommeMoyennes / 20;

        moyenneFinaleCell.textContent = moyenneFinale.toFixed(2);

        if (moyenneFinale >= 10) {
            moyenneFinaleCell.style.backgroundColor = "green";
            moyenneFinaleCell.style.color = "white";
        } else {
            moyenneFinaleCell.style.backgroundColor = "red";
            moyenneFinaleCell.style.color = "white";
        }
    }

    tdInputAlg.addEventListener("input", calculateMoyenneAlg);
    tpInputAlg.addEventListener("input", calculateMoyenneAlg);
    examInputAlg.addEventListener("input", calculateMoyenneAlg);

    tdInputArch.addEventListener("input", calculateMoyenneArch);
    examInputArch.addEventListener("input", calculateMoyenneArch);

    tpInputSys.addEventListener("input", calculateMoyenneSys);
    examInputSys.addEventListener("input", calculateMoyenneSys);

    tdInputAna.addEventListener("input", calculateMoyenneAna);
    examInputAna.addEventListener("input", calculateMoyenneAna);

    tdInputAlge.addEventListener("input", calculateMoyenneAlge);
    examInputAlge.addEventListener("input", calculateMoyenneAlge);

    tpInputAng.addEventListener("input", calculateMoyenneAng);
    examInputAng.addEventListener("input", calculateMoyenneAng);

  
    examInputElec.addEventListener("input", calculateMoyenneElec);
});



document.addEventListener("DOMContentLoaded", function () {
    function updateTableHeaders() {
        const tableHeaders = document.querySelectorAll("th");

        if (window.innerWidth < 660) {
            tableHeaders[0].textContent = "Modules"; 
            tableHeaders[1].textContent = "Coef"; 
            tableHeaders[2].textContent = "TD"; 
            tableHeaders[3].textContent = "TP"; 
            tableHeaders[4].textContent = "Exam"; 
            tableHeaders[5].textContent = "Moyenne"; 

            const moduleNames = document.querySelectorAll("tbody td:first-child");
            moduleNames[0].textContent = "Algo";
            moduleNames[1].textContent = "Archi";
            moduleNames[2].textContent = "Se";
            moduleNames[3].textContent = "Analyse";
            moduleNames[4].textContent = "Algebre";
            moduleNames[5].textContent = "Anglais";
            moduleNames[6].textContent = "Elect";
        } else {
            tableHeaders[0].textContent = "Modules";
            tableHeaders[1].textContent = "Coef";
            tableHeaders[2].textContent = "TD";
            tableHeaders[3].textContent = "TP";
            tableHeaders[4].textContent = "Exam";
            tableHeaders[5].textContent = "Moyenne Module";

            const moduleNames = document.querySelectorAll("tbody td:first-child");
            moduleNames[0].textContent = "Algorithmique et structure de données";
            moduleNames[1].textContent = "Architecture des ordinateurs";
            moduleNames[2].textContent = "Systeme d'exploitation";
            moduleNames[3].textContent = "Analyse";
            moduleNames[4].textContent = "Algèbre";
            moduleNames[5].textContent = "Anglais";
            moduleNames[6].textContent = "Electronique";
        }
    }

    updateTableHeaders();

    window.addEventListener("resize", updateTableHeaders);
});










