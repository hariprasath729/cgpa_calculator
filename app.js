
/* ---------- PRESETS ---------- */
const PRESETS = {
  AIDS: {
    1: [
      { name: "Communicative English (HS23111)", credits: 3 },
      { name: "Matrices and Calculus (MA23111)", credits: 4 },
      { name: "Physics for Information Science (PH23111)", credits: 3 },
      { name: "Problem Solving and C Programming (GE23111)", credits: 3 },
      { name: "Basic Electrical and Electronics Engineering (GE23113)", credits: 3 },
      { name: "Heritage of Tamils (GE23112)", credits: 0 },
      { name: "Physics Laboratory (PH23121)", credits: 1 },
      { name: "Problem Solving and C Programming Laboratory (GE23121)", credits: 1 },
      { name: "Engineering Practices Laboratory (GE23122)", credits: 1 }
    ],

    2: [
      { name: "Professional English (HS23211)", credits: 2 },
      { name: "Engineering Chemistry (CY23211)", credits: 3 },
      { name: "Statistics and Numerical Methods (MA23211)", credits: 4 },
      { name: "Python for Data Science (AD23211)", credits: 3 },
      { name: "Tamil & Technology (GE23213)", credits: 0 },
      { name: "Engineering Graphics (GE23231)", credits: 4 },
      { name: "Data Structures Design (AD23231)", credits: 4 },
      { name: "Chemistry Laboratory (CY23221)", credits: 1 },
      { name: "Python for Data Science Laboratory (AD23221)", credits: 1 },
      { name: "Communication Laboratory / Foreign Language (GE23221)", credits: 1 }
    ],

    3: [
      { name: "Discrete Mathematics (MA23311)", credits: 4 },
      { name: "Artificial Intelligence (AL23311)", credits: 3 },
      { name: "Object Oriented Programming (CS23312)", credits: 3 },
      { name: "Database Management Systems (CS23411)", credits: 3 },
      { name: "Digital Principles and Computer Organization (EC23331)", credits: 4 },
      { name: "Artificial Intelligence Laboratory (AL23321)", credits: 1 },
      { name: "Database Management Systems Laboratory (CS23421)", credits: 1 },
      { name: "Object Oriented Programming Laboratory (CS23322)", credits: 1 },
      { name: "Data Wrangling (AD231C1)", credits: 1 }
    ],

    4: [
      { name: "Environmental Science and Sustainability (GE23411)", credits: 2 },
      { name: "Probability and Statistics (MA23411)", credits: 4 },
      { name: "Data Analytics (AD23411)", credits: 3 },
      { name: "Machine Learning (AL23411)", credits: 3 },
      { name: "Operating Systems (CS23412)", credits: 3 },
      { name: "Design and Analysis of Algorithms (CS23431)", credits: 4 },
      { name: "Data Analytics Laboratory (AD23421)", credits: 1 },
      { name: "Machine Learning Laboratory (AL23421)", credits: 1 },
      { name: "Operating Systems Laboratory (CS23422)", credits: 1 },
      { name: "Introduction to Azure Machine Learning (AD231C1)", credits: 1 }
    ],

    5: [
      { name: "Deep Learning (AD23511)", credits: 3 },
      { name: "Computer Networks (CS23511)", credits: 3 },
      { name: "Professional Elective I", credits: 3 },
      { name: "Professional Elective II", credits: 3 },
      { name: "Mandatory Course I", credits: 0 },
      { name: "Big Data Analytics (AD23531)", credits: 4 },
      { name: "Data Exploration and Visualization (AD23532)", credits: 4 },
      { name: "Deep Learning Laboratory (AD23521)", credits: 1 },
      { name: "Computer Networks Laboratory (CS23521)", credits: 1 },
      { name: "Industry Oriented Course III", credits: 1 }
    ],

    6: [
      { name: "Professional Elective III", credits: 3 },
      { name: "Professional Elective IV", credits: 3 },
      { name: "Open Elective I", credits: 3 },
      { name: "Open Elective II", credits: 3 },
      { name: "Mandatory Course II", credits: 0 },
      { name: "Embedded Systems and IoT (EC23631)", credits: 4 },
      { name: "Object Oriented Software Engineering (CS23631)", credits: 4 },
      { name: "Mini Project (AD23621)", credits: 2 }
    ],

    7: [
      { name: "Human Values and Ethics (GE23711)", credits: 2 },
      { name: "Elective – Management", credits: 3 },
      { name: "Data and Information Security (CB23511)", credits: 3 },
      { name: "Professional Elective V", credits: 3 },
      { name: "Professional Elective VI", credits: 3 },
      { name: "Internship / Certification Course (AD23721)", credits: 2 }
    ],

    8: [
      { name: "Open Elective III", credits: 3 },
      { name: "Project Work (AD23821)", credits: 10 }
    ]
  },
  AIML: {
    1: [
      { name: "Communicative English (HS23111)", credits: 3 },
      { name: "Engineering Chemistry (CY23111)", credits: 3 },
      { name: "Matrices and Calculus (MA23111)", credits: 4 },
      { name: "Problem Solving and C Programming (GE23111)", credits: 3 },
      { name: "Heritage of Tamils (GE23112)", credits: 0 },
      { name: "Engineering Graphics (GE23131)", credits: 4 },
      { name: "Chemistry Laboratory (CY23121)", credits: 1 },
      { name: "Problem Solving and C Programming Laboratory (GE23121)", credits: 1 },
      { name: "Engineering Practices Laboratory (GE23122)", credits: 1 }
    ],

    2: [
      { name: "Professional English (HS23211)", credits: 2 },
      { name: "Statistics and Numerical Methods (MA23211)", credits: 4 },
      { name: "Physics for Information Science (PH23211)", credits: 3 },
      { name: "Basic Electrical and Electronics Engineering (GE23211)", credits: 3 },
      { name: "Python for Data Science (AD23211)", credits: 3 },
      { name: "Tamils and Technology (GE23213)", credits: 0 },
      { name: "Data Structures and Design (AD23231)", credits: 4 },
      { name: "Physics Laboratory (PH23221)", credits: 1 },
      { name: "Python for Data Science Laboratory (AD23221)", credits: 1 },
      { name: "Communication Laboratory / Foreign Language (GE23221)", credits: 1 }
    ],

    3: [
      { name: "Discrete Mathematics (MA23311)", credits: 4 },
      { name: "Artificial Intelligence (AL23311)", credits: 3 },
      { name: "Object Oriented Programming (CS23312)", credits: 3 },
      { name: "Database Management Systems (CS23411)", credits: 3 },
      { name: "Digital Principles and Computer Organization (EC23331)", credits: 4 },
      { name: "Artificial Intelligence Laboratory (AL23321)", credits: 1 },
      { name: "Database Management Systems Laboratory (CS23421)", credits: 1 },
      { name: "Object Oriented Programming Laboratory (CS23322)", credits: 1 },
      { name: "Data Wrangling (AD231C1)", credits: 1 }
    ],

    4: [
      { name: "Environmental Sciences and Sustainability (GE23411)", credits: 2 },
      { name: "Formal Language and Automata Theory (AD23412)", credits: 4 },
      { name: "Data Analytics (AD23411)", credits: 3 },
      { name: "Machine Learning (AL23411)", credits: 3 },
      { name: "Operating Systems (CS23412)", credits: 3 },
      { name: "Design and Analysis of Algorithms (CS23431)", credits: 4 },
      { name: "Machine Learning Laboratory (AL23421)", credits: 1 },
      { name: "Data Analytics Laboratory (AD23421)", credits: 1 },
      { name: "Operating Systems Laboratory (CS23422)", credits: 1 },
      { name: "Introduction to Azure Machine Learning (AD231C1)", credits: 1 },
    ],

    5: [
      { name: "Deep Learning for Computer Vision (AL23511)", credits: 3 },
      { name: "Computer Networks (CS23511)", credits: 3 },
      { name: "Professional Elective I", credits: 3 },
      { name: "Professional Elective II", credits: 3 },
      { name: "Mandatory Course I", credits: 0 },
      { name: "Natural Language Processing (AL23531)", credits: 4 },
      { name: "Big Data Analytics (AD23531)", credits: 4 },
      { name: "Deep Learning for Computer Vision Laboratory (AL23521)", credits: 1 },
      { name: "Computer Networks Laboratory (CS23521)", credits: 1 },
      { name: "Industry Oriented Course III", credits: 1 }
    ],

    6: [
      { name: "Professional Elective III", credits: 3 },
      { name: "Professional Elective IV", credits: 3 },
      { name: "Open Elective I", credits: 3 },
      { name: "Open Elective II", credits: 3 },
      { name: "Mandatory Course II", credits: 0 },
      { name: "Embedded Systems and IoT (EC23631)", credits: 4 },
      { name: "Object Oriented Software Engineering (CS23631)", credits: 4 },
      { name: "Mini Project (AL23621)", credits: 2 },
    ],

    7: [
      { name: "Human Values and Ethics (GE23711)", credits: 2 },
      { name: "Elective – Management", credits: 3 },
      { name: "Cryptography and Cyber Security (CS23513)", credits: 3 },
      { name: "Professional Elective V", credits: 3 },
      { name: "Professional Elective VI", credits: 3 },
      { name: "Internship / Certification Course (AL23721)", credits: 2 }
    ],

    8: [
      { name: "Open Elective III", credits: 3 },
      { name: "Project Work (AL23821)", credits: 10 }
    ]
  }
};

const gradePoints = { O:10,"A+":9,A:8,"B+":7,B:6,C:5,U:0 };

const tbody = document.getElementById("tbody");
const cgpaEl = document.getElementById("cgpa");
const totalCreditsEl = document.getElementById("totalCredits");
const HISTORY_KEY = "cgpa_history";
// Auto update copyright year
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- MODAL ---------- */
const modal = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalInput = document.getElementById("modalInput");
const modalMessage = document.getElementById("modalMessage");
const modalCancel = document.getElementById("modalCancel");
const modalConfirm = document.getElementById("modalConfirm");

let modalCallback = null;

function openModal({ title, value="", message="", confirmText="Confirm", onConfirm }) {
  modalTitle.textContent = title;
  modalInput.value = value;
  modalInput.style.display = value !== null ? "block" : "none";
  modalMessage.textContent = message;
  modalConfirm.textContent = confirmText;
  modalCallback = onConfirm;
  modal.classList.remove("hidden");
  modalInput.focus();
}

modalCancel.onclick = () => modal.classList.add("hidden");

modalConfirm.onclick = () => {
  modal.classList.add("hidden");
  if (modalCallback) modalCallback(modalInput.value);
};

/* ---------- TABLE ---------- */
function addRow(name="", credits="", grade=""){
  const tr=document.createElement("tr");
  tr.innerHTML=`
    <td><input value="${name}"></td>
    <td><input type="number" min="0" value="${credits}"></td>
    <td>
      <select>
        <option value="">--</option>
        ${Object.keys(gradePoints).map(g=>`<option ${g===grade?"selected":""}>${g}</option>`).join("")}
      </select>
    </td>
    <td><button>X</button></td>`;
  tr.querySelector("button").onclick=()=>{
    tr.classList.add("removing");
    setTimeout(()=>{tr.remove();calc();},200);
  };
  tr.querySelectorAll("input,select").forEach(e=>e.oninput=calc);
  tbody.appendChild(tr);
}

/* ---------- CGPA ---------- */
function calc(){
  let tc=0,tp=0;
  tbody.querySelectorAll("tr").forEach(r=>{
    const c=+r.children[1].firstElementChild.value;
    const g=r.children[2].firstElementChild.value;
    if(!c||!g) r.classList.add("incomplete");
    else r.classList.remove("incomplete");
    if(c&&g){tc+=c;tp+=c*gradePoints[g];}
  });
 const raw = tp / tc;
const newCGPA = tc ? Math.floor(raw * 100) / 100 : 0;
  if(cgpaEl.textContent!==newCGPA){
    cgpaEl.classList.add("cgpa-update");
    setTimeout(()=>{
      cgpaEl.textContent=newCGPA;
      cgpaEl.classList.remove("cgpa-update");
    },120);
  }
  totalCreditsEl.textContent=tc;
}

/* ---------- PRESET LOAD ---------- */
dept.onchange = sem.onchange = ()=>{
  tbody.innerHTML="";
  if(PRESETS[dept.value]?.[sem.value]){
    PRESETS[dept.value][sem.value]
      .filter(s=>s.credits>0)
      .forEach(s=>addRow(s.name,s.credits));
  }
  calc();
};

add.onclick=()=>addRow();

/* ---------- UPLOAD ---------- */
uploadBox.onclick=()=>fileInput.click();
uploadBox.ondragover=e=>{e.preventDefault();uploadBox.classList.add("drag");};
uploadBox.ondragleave=()=>uploadBox.classList.remove("drag");
uploadBox.ondrop=e=>{
  e.preventDefault();
  uploadBox.classList.remove("drag");
  handleFile(e.dataTransfer.files[0]);
};
fileInput.onchange=e=>handleFile(e.target.files[0]);

function handleFile(file){
  if(!file) return;
  tbody.innerHTML="";
  if(file.name.endsWith(".xlsx")||file.name.endsWith(".csv")) parseExcel(file);
  else if(file.name.endsWith(".pdf")) parsePDF(file);
}

function parseExcel(file){
  const r=new FileReader();
  r.onload=e=>{
    const wb=XLSX.read(e.target.result,{type:"binary"});
    const rows=XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
    rows.forEach(row=>{
      const code=row["Subject Code"];
      const grade=row["Grade"];
      const m=findPreset(code);
      if(m&&m.credits>0) addRow(m.name,m.credits,grade||"");
    });
    calc();
  };
  r.readAsBinaryString(file);
}

async function parsePDF(file) {
  const pdf = await pdfjsLib.getDocument(URL.createObjectURL(file)).promise;
  let tokens = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    tokens.push(...content.items.map(it => it.str.trim()).filter(Boolean));
  }

  const gradeSet = new Set(["O", "A+", "A", "B+", "B", "C", "U"]);
  const subjectCodeRegex = /^[A-Z]{2,3}\d{5}$/;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    // Detect subject code
    if (subjectCodeRegex.test(token)) {
      const preset = findPreset(token);
      if (!preset || preset.credits === 0) continue;

      // Look ahead for grade (next ~15 tokens)
      let grade = "";
      for (let j = i + 1; j < i + 15 && j < tokens.length; j++) {
        if (gradeSet.has(tokens[j])) {
          grade = tokens[j];
          break;
        }
      }

      addRow(preset.name, preset.credits, grade);
    }
  }

  calc();
}

function findPreset(code){
  for(const s in PRESETS.AIDS){
    for(const sub of PRESETS.AIDS[s]){
      if(sub.name.includes(code)) return sub;
    }
  }
  return null;
}

/* ---------- HISTORY ---------- */
saveCgpa.onclick = () => {
  openModal({
    title: "Save CGPA",
    value: "Final CGPA",
    confirmText: "Save",
    onConfirm: (name) => {
      if (!name) return;

      const data = [...tbody.querySelectorAll("tr")].map(r => ({
        subject: r.children[0].firstElementChild.value,
        credits: r.children[1].firstElementChild.value,
        grade: r.children[2].firstElementChild.value
      }));

      const entry = {
        name,
        cgpa: cgpaEl.textContent,
        data,
        date: new Date().toLocaleString()
      };

      const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
      history.push(entry);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    }
  });
};


openHistory.onclick=()=>{
  renderHistory();
  historyPanel.classList.add("show");
};

function closeHistory(){
  historyPanel.classList.remove("show");
}

function renderHistory(){
  historyList.innerHTML="";
  const history=JSON.parse(localStorage.getItem(HISTORY_KEY)||"[]");
  history.forEach((h,i)=>{
    const li=document.createElement("li");
    li.innerHTML=`
      <span>${h.name} (${h.cgpa})</span>
      <span>
        <button onclick="loadHistory(${i})">Load</button>
        <button onclick="renameHistory(${i})">Rename</button>
        <button onclick="deleteHistory(${i})">Delete</button>
      </span>`;
    historyList.appendChild(li);
  });
}

function loadHistory(i){
  const history=JSON.parse(localStorage.getItem(HISTORY_KEY)||"[]");
  tbody.innerHTML="";
  history[i].data.forEach(d=>addRow(d.subject,d.credits,d.grade));
  calc();
  closeHistory();
}

function renameHistory(i){
  const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");

  openModal({
    title: "Rename CGPA",
    value: history[i].name,
    confirmText: "Rename",
    onConfirm: (newName) => {
      if (!newName) return;
      history[i].name = newName;
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
      renderHistory();
    }
  });
}


function deleteHistory(i){
  const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");

  openModal({
    title: "Delete Saved CGPA?",
    value: null,
    message: "This action cannot be undone.",
    confirmText: "Delete",
    onConfirm: () => {
      history.splice(i, 1);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
      renderHistory();
    }
  });
}
