document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("image");
    const preview = document.getElementById("imagePreview");

    fileInput.addEventListener("change", function() {
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();

            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = "block";
            };
            

            reader.readAsDataURL(fileInput.files[0]);
        }
    });
});
"use strict";

const leftSection = document.querySelector(".left");
const rightSection = document.querySelector(".right");

leftSection.addEventListener("click", (e) => {
    if (e.target.className === "bgColorChange") changeBgColor(e.target);
    if (e.target.id === "drawBorder") drawBorder(e.target);
    if (e.target.name === "listStyle") changeListStyleType(e.target);
});

leftSection.addEventListener("change", (e) => {
    if (e.target.id === "fontColorSelector") changeFontColor();
});

leftSection.addEventListener("focusout", (e) => {
    if (e.target.id === "changeFontSize") changeFontSize();
});

const changeBgColor = (evtTarget) => {
    leftSection.style.backgroundColor = window.getComputedStyle(evtTarget).getPropertyValue('background-color');
};

const changeFontColor = () => {
    const selectVal = document.getElementById("fontColorSelector").value;
    leftSection.style.color = selectVal; 
};

const changeFontSize = () => {
    const textVal = document.getElementById("changeFontSize").value;
    leftSection.style.fontSize = textVal; 
};

const drawBorder = (evtTarget) => {
    const img = document.getElementById("img");
    img.style.border = evtTarget.checked ? "1px solid white" : "none";
};

const changeListStyleType = (evtTarget) => {
    const list = document.getElementById("list");
    list.style.listStyleType = evtTarget.value;
};

function changeTemplate() {
    const cvContainer = document.getElementById("cvContainer");
    const template = document.getElementById("cvTemplate").value;

    
}

function changeColor() {
    const colorSelect = document.getElementById("colorSelect");
    const selectedColor = colorSelect.value;

    
    document.querySelector(".left").style.backgroundColor = selectedColor;

    
    document.querySelector(".right").style.backgroundColor = selectedColor;
}
document.getElementById("addSection").addEventListener("click", function() {
    const container = document.getElementById("sectionsContainer");

    
    const newSection = document.createElement("section");
    newSection.classList.add("custom-section");

   
    const header = document.createElement("h2");
    header.textContent = "Nowa Sekcja";

    
    const textarea = document.createElement("textarea");
    textarea.placeholder = "Wpisz tutaj treść sekcji";

    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Usuń";
    deleteBtn.addEventListener("click", function() {
        container.removeChild(newSection);
    });

    
    newSection.appendChild(header);
    newSection.appendChild(textarea);
    newSection.appendChild(deleteBtn);

    
    container.appendChild(newSection);
});


const translations = {
    "en": {
        "cvTemplateLabel": "Select CV template:",
        "classicOption": "Classic",
        "modernOption": "Modern",
        "languageLabel": "Language:",
        "enOption": "English",
        "plOption": "Polish",
        "fnameLabel": "Name:",
        "namePlaceholder": "e.g. John",
        "colorLabel": "Select color:",
        "greenOption": "Green",
        "blueOption": "Blue",
        "yellowOption": "Yellow",
        "redOption": "Red",
        "photoLabel": "Your photo",
        "skillsLabel": "Skills",
        "skillsPlaceholder": "e.g. Coding, Design",
        "interestsLabel": "Phone Number",
        "interestsPlaceholder": "e.g. 123987567",
        "experienceLabel": "Experience",
        "experiencePlaceholder": "e.g. Web Developer at XYZ",
        "educationLabel": "Education",
        "educationPlaceholder": "e.g. Bachelor's in IT",
        "deleteDataButton": "Delete saved data",
        "privacyPolicyHeader": "Klauzula Rodo",
        "consentMessageLabel": "",
        "printButton": "Print"
    }
};

function changeLanguage() {
    const lang = document.getElementById("language").value;
    const translationsForLang = translations[lang];

    
    if (translationsForLang) {
        document.querySelector('label[for="cvTemplate"]').textContent = translationsForLang.cvTemplateLabel;
        document.querySelector('#cvTemplate option[value="classic"]').textContent = translationsForLang.classicOption;
        document.querySelector('#cvTemplate option[value="modern"]').textContent = translationsForLang.modernOption;
        document.querySelector('label[for="language"]').textContent = translationsForLang.languageLabel;
        document.querySelector('#language option[value="en"]').textContent = translationsForLang.enOption;
        document.querySelector('#language option[value="pl"]').textContent = translationsForLang.plOption;
        document.querySelector('label[for="fname"]').textContent = translationsForLang.fnameLabel;
        document.querySelector('#fname').placeholder = translationsForLang.namePlaceholder;
        document.querySelector('label[for="colorSelect"]').textContent = translationsForLang.colorLabel;
        document.querySelector('#colorSelect option[value="green"]').textContent = translationsForLang.greenOption;
        document.querySelector('#colorSelect option[value="blue"]').textContent = translationsForLang.blueOption;
        document.querySelector('#colorSelect option[value="yellow"]').textContent = translationsForLang.yellowOption;
        document.querySelector('#colorSelect option[value="red"]').textContent = translationsForLang.redOption;
        document.querySelector('label[for="image"]').textContent = translationsForLang.photoLabel;
        document.querySelector('label[for="skills"]').textContent = translationsForLang.skillsLabel;
        document.querySelector('#skills').placeholder = translationsForLang.skillsPlaceholder;
        document.querySelector('label[for="Email"]').textContent = translationsForLang.interestsLabel;
        document.querySelector('#email').placeholder = translationsForLang.interestsPlaceholder;
        document.querySelector('label[for="experience"]').textContent = translationsForLang.experienceLabel;
        document.querySelector('#experience').placeholder = translationsForLang.experiencePlaceholder;
        document.querySelector('label[for="education"]').textContent = translationsForLang.educationLabel;
        document.querySelector('#education').placeholder = translationsForLang.educationPlaceholder;
        document.querySelector('.clear-btn').textContent = translationsForLang.deleteDataButton;
        document.querySelector('.footer h2').textContent = translationsForLang.privacyPolicyHeader;
        document.querySelector('button[onclick="window.print()"]').textContent = translationsForLang.printButton;
    }
}
function changeCvStyle(template) {
    const cvContainer = document.getElementById("cvContainer");
    cvContainer.classList.remove("cv-classic", "cv-modern");
    cvContainer.classList.add("cv-" + template);
}

function changeTemplate() {
    const template = document.getElementById("cvTemplate").value;
    changeCvStyle(template);
    localStorage.setItem("cvTemplate", template);
}

document.addEventListener("DOMContentLoaded", function() {
    const cvTemplateSelect = document.getElementById("cvTemplate");
    cvTemplateSelect.addEventListener("change", changeTemplate);
});

