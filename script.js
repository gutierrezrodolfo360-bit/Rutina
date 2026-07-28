// Base de datos de tu rutina 
const routineData = {
    lunes: {
        name: "LUNES",
        focus: "Pecho, tríceps y hombros",
        warmup: "10-15 min caminadora",
        exercises: [
            { name: "Press de banca", reps: "4 x 8-10", rest: "2 - 3 min", gif: "https://fitcron.com/wp-content/uploads/2021/03/00251301-Barbell-Bench-Press_Chest-FIX_720.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7646504721758391583?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Press inclinado", reps: "3 x 10-12", rest: "2 min", gif: "https://fitcron.com/wp-content/uploads/2021/03/00471301-Barbell-Incline-Bench-Press_Chest_720.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7527868355898838303?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Fondos en paralelas", reps: "3 x 8-12", rest: "2 min", gif: "https://fitcron.com/wp-content/uploads/2021/03/02511301-Chest-Dip_Chest_720.gif", tutorial: "https://www.tiktok.com/@nicolasvasquezsa/video/7064793019576356101?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Extensión tríceps encima de la cabeza en polea", reps: "3 x 10-12", rest: "60 - 90 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/01941301-Cable-Overhead-Triceps-Extension-rope-attachment_Upper-Arms_720.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7343267882576530731?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Extensión tríceps bajo la cabeza en polea", reps: "3 x 10-12", rest: "60 - 90 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/12271301-Cable-Standing-One-Arm-Tricep-Pushdown-Overhand-Grip_Upper-Arms_720.gif", tutorial: "https://www.tiktok.com/@daviddiezft/video/7663274000998550804?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Elevaciones laterales en polea", reps: "4 x 12-15", rest: "60 - 90 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/38801301-Cable-Leaning-Lateral-Raise_Shoulders_720.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7496961628383104287?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Press militar", reps: "3 x 8-10", rest: "2 min", gif: "https://fitcron.com/wp-content/uploads/2021/04/42371301-Dumbbell-Seated-Close-Grip-Press_Shoulders_720.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7309506304643452203?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" }
        ]
    },
    martes: {
        name: "MARTES",
        focus: "Espalda, bíceps, trapecio y antebrazos",
        warmup: "10-15 min caminadora",
        exercises: [
            { name: "Jalón al pecho", reps: "4 x 8-10", rest: "2 - 3 min", gif: "https://vitruve.fit/wp-content/uploads/2021/11/vitruvs.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7364881238525496618?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Remo al pecho mancuernas", reps: "4 x 10-12", rest: "2 min", gif: "https://fitcron.com/wp-content/uploads/2021/04/02931301-Dumbbell-Bent-Over-Row_Back-FIX_720.gif", tutorial: "https://www.tiktok.com/@salarfit_gh/video/7363667948856184069?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Pull over", reps: "3 x 10-12", rest: "90s - 2 min", gif: "https://i.pinimg.com/originals/28/41/d4/2841d494a3adb9366896e14cc0291254.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7401589670317985054?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Elevaciones de hombros", reps: "1 serie al fallo", rest: "90 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/04061301-Dumbbell-Shrug_Back-FIX_720.gif", tutorial: "https://www.tiktok.com/@albertohicianoifbbpro/video/7213076897868041478?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Elevaciones en Y con mancuernas", reps: "3 x 12", rest: "60 - 90 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/35411301-Dumbbell-Incline-Y-Raise_Shoulders_720.gif", tutorial: "https://www.tiktok.com/@lostandlifting/video/6987562070581497093?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Curl Bayesian (inclinado)", reps: "3 x 10-12", rest: "60 - 90 seg", gif: "https://api.smartworkout.app/asset/image/afe21e4f-22a7-4b2f-ba35-f2376c7d3643", tutorial: "https://www.tiktok.com/@juanwagner_/video/7390477617884908831?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Curl Predicador", reps: "3 x 10-12", rest: "60 - 90 seg", gif: "https://i.pinimg.com/originals/15/23/4b/15234bf2aaa9e75ae50c2921dbc722b2.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7456114250164014366?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Curl de muñeca", reps: "3 x 15", rest: "60 seg", gif: "https://fitcron.com/wp-content/uploads/2021/03/03641301-Dumbbell-One-arm-Wrist-Curl_Forearm-SFIX_720.gif", tutorial: "" },
            { name: "Curl de muñeca inverso", reps: "3 x 15", rest: "60 seg", gif: "https://fitcron.com/wp-content/uploads/2021/03/03581301-Dumbbell-One-arm-Revers-Wrist-Curl_Forearms_720.gif", tutorial: "" }
        ]
    },
    miercoles: {
        name: "MIÉRCOLES",
        focus: "Pierna completa y abdomen",
        warmup: "10-15 min en escaleras",
        exercises: [
            { name: "Sentadilla Hack", reps: "3 x 8-10", rest: "2 - 3 min", gif: "https://fitcron.com/wp-content/uploads/2021/04/19921301-Sled-Full-Hack-Squat_Thighs_720.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7652476062923820318?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Leg Extension", reps: "3 x 12-15", rest: "60 - 90 seg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7361506972954414378?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Peso muerto rumano", reps: "3 x 8-10", rest: "2 - 3 min", gif: "https://fitcron.com/wp-content/uploads/2021/04/14591301-Dumbbell-Romanian-Deadlift_Hips_720.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7270505386787081514?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Curl femoral tumbado", reps: "3 x 10-12", rest: "60 - 90 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/05861301-Lever-Lying-Leg-Curl_Thighs_720.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7363697050002672938?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Hip Thrust", reps: "3 x 10-12", rest: "2 min", gif: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsfzDfAdNTvXEnkluPttFyejRPmHZo1Arc_lOV6D1mA&s=10", tutorial: "https://www.tiktok.com/@juanwagner_/video/7282761293877087530?is_from_webapp=1&sender_device=pc" },
            { name: "Máquina de abducción", reps: "3 x 12", rest: "60 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/05971301-Lever-Seated-Hip-Abduction_Hips-FIX_720.gif", tutorial: "" },
            { name: "Máquina de aductores", reps: "4 x 12", rest: "60 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/05981301-Lever-Seated-Hip-Adduction_Thighs_720.gif", tutorial: "" },
            { name: "Elevación de pantorrillas", reps: "3 x 12-15", rest: "60 - 90 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/01081301-Barbell-Standing-Leg-Calf-Raise_Calf_720.gif", tutorial: "https://www.tiktok.com/@guia.de.ejercicios/video/7310894301142076704?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Crunch en polea o máquina", reps: "3 x 12", rest: "45 - 60 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/18571301-Lever-Total-Abdominal-Crunch_Waist_720.gif", tutorial: "https://www.tiktok.com/@christian.ramirezc/video/7578871354036931860?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Dead Bug", reps: "3 x 12 por lado", rest: "45 - 60 seg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Dead-Bug.gif", tutorial: "https://www.tiktok.com/@emotionsalud/video/7199963564520606981?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" }
        ]
    },
    jueves: {
        name: "JUEVES",
        focus: "Upper",
        warmup: "10-15 min caminadora",
        exercises: [
            { name: "Jalón al pecho", reps: "4 x 8-10", rest: "2 - 3 min", gif: "https://vitruve.fit/wp-content/uploads/2021/11/vitruvs.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7364881238525496618?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Remo horizontal", reps: "3 x 10-12", rest: "2 min", gif: "https://static.strengthlevel.com/images/exercises/seated-cable-row/seated-cable-row-800.jpg", tutorial: "https://www.tiktok.com/@eduandreu94/video/7627934644591136022?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Pec fly", reps: "3 x 12-15", rest: "60 - 90 seg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7293901691643039018?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Press de banca", reps: "4 x 8-10", rest: "2 - 3 min", gif: "https://fitcron.com/wp-content/uploads/2021/03/00251301-Barbell-Bench-Press_Chest-FIX_720.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7646504721758391583?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Elevaciones laterales en polea", reps: "4 x 12-15", rest: "60 - 90 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/38801301-Cable-Leaning-Lateral-Raise_Shoulders_720.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7496961628383104287?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Curl Bayesian (inclinado)", reps: "3 x 10-12", rest: "60 - 90 seg", gif: "https://api.smartworkout.app/asset/image/afe21e4f-22a7-4b2f-ba35-f2376c7d3643", tutorial: "https://www.tiktok.com/@juanwagner_/video/7390477617884908831?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Press francés", reps: "3 x 10-12", rest: "90 seg", gif: "https://doriangym.es/wp-content/uploads/2022/10/press-frances-con-mancuernas.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7423129825197542687?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" }
        ]
    },
    viernes: {
        name: "VIERNES",
        focus: "Pierna completa y abdomen",
        warmup: "10-15 min en escaleras",
        exercises: [
            { name: "Leg Press Inclinado", reps: "3 x 8-10", rest: "2 - 3 min", gif: "https://media.tenor.com/yBaS_oBgidsAAAAM/gym.gif", tutorial: "https://www.tiktok.com/@juanpcoach/video/7530318380293770501?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Leg Extension", reps: "3 x 12-15", rest: "60 - 90 seg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7361506972954414378?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Peso muerto rumano", reps: "3 x 8-10", rest: "2 - 3 min", gif: "https://fitcron.com/wp-content/uploads/2021/04/14591301-Dumbbell-Romanian-Deadlift_Hips_720.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7270505386787081514?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Curl femoral tumbado", reps: "3 x 10-12", rest: "60 - 90 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/05861301-Lever-Lying-Leg-Curl_Thighs_720.gif", tutorial: "https://www.tiktok.com/@juanwagner_/video/7363697050002672938?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Hip Thrust", reps: "3 x 10-12", rest: "2 min", gif: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsfzDfAdNTvXEnkluPttFyejRPmHZo1Arc_lOV6D1mA&s=10", tutorial: "https://www.tiktok.com/@juanwagner_/video/7282761293877087530?is_from_webapp=1&sender_device=pc" },
            { name: "Máquina de abducción", reps: "3 x 12", rest: "60 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/05971301-Lever-Seated-Hip-Abduction_Hips-FIX_720.gif", tutorial: "" },
            { name: "Máquina de aductores", reps: "4 x 12", rest: "60 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/05981301-Lever-Seated-Hip-Adduction_Thighs_720.gif", tutorial: "" },
            { name: "Elevación de pantorrillas", reps: "3 x 12-15", rest: "60 - 90 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/01081301-Barbell-Standing-Leg-Calf-Raise_Calf_720.gif", tutorial: "https://www.tiktok.com/@guia.de.ejercicios/video/7310894301142076704?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Elevaciones de piernas", reps: "3 x 15", rest: "45 - 60 seg", gif: "https://fitcron.com/wp-content/uploads/2024/05/11631301-Lying-Leg-Raise_Waist_720.gif", tutorial: "https://www.tiktok.com/@eduandreu94/video/7631274981904682262?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" },
            { name: "Twist ruso", reps: "3 x 15 por lado", rest: "45 - 60 seg", gif: "https://fitcron.com/wp-content/uploads/2024/05/06871301-Russian-Twist_Waist-FIX_720.gif", tutorial: "https://www.tiktok.com/@micah_foreverfit/video/7551876144333638924?is_from_webapp=1&sender_device=pc&web_id=7425803973335483909" }
        ]
    }
};
// Scroll suave al presionar empezar
function scrollToDays() {
    document.getElementById('selector').scrollIntoView({ behavior: 'smooth' });
}

// Cargar la rutina del día seleccionado
function loadDay(dayKey, btnElement) {
    // 1. Manejo visual de botones activos
    document.querySelectorAll('.btn-dia').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    const dayData = routineData[dayKey];
    
    // 2. Rellenar y mostrar la información del día
    const dayInfoDiv = document.getElementById('dayInfo');
    dayInfoDiv.style.display = 'block';
    document.getElementById('dayName').textContent = dayData.name;
    document.getElementById('dayFocus').textContent = dayData.focus;
    document.getElementById('dayWarmup').textContent = dayData.warmup;

    // 3. Generar las tarjetas de ejercicios
    const container = document.getElementById('exercisesContainer');
    container.innerHTML = ''; // Limpiamos la pantalla anterior

    dayData.exercises.forEach((ex) => {
        // Llave global para guardar el peso en memoria usando el nombre del ejercicio
        const normalizedExerciseName = ex.name.trim().toLowerCase().replace(/\s+/g, '-');
        const storageKey = `peso-${normalizedExerciseName}`;
        const savedWeight = localStorage.getItem(storageKey) || '';

        const gifStyle = ex.gif ? 'padding: 0; border: none;' : '';
        const gifContent = ex.gif 
            ? `<img src="${ex.gif}" alt="${ex.name}" style="border-radius: 10px;">` 
            : `GIF<br>${ex.name}`;

        // Generar el bloque del tutorial solo si hay un enlace válido (no está vacío)
        const tutorialHTML = ex.tutorial ? `
            <div class="detail-row" style="margin-top: 10px; justify-content: center;">
                <a href="${ex.tutorial}" target="_blank" class="tutorial-link">▶ Mirar técnica aquí</a>
            </div>` : '';

        const card = document.createElement('article');
        card.className = 'exercise-card';
        card.innerHTML = `
            <div class="exercise-title">${ex.name}</div>
            <div class="exercise-content">
                <div class="exercise-gif" style="${gifStyle}">
                    ${gifContent}
                </div>
                <div class="exercise-details">
                    <div class="detail-row">
                        <span class="label">Reps:</span>
                        <span class="value">${ex.reps}</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Peso actual:</span>
                        <div class="weight-input-group">
                            <input type="number" step="0.5" class="weight-input" value="${savedWeight}" oninput="saveWeight('${storageKey}', this.value)" placeholder="0">
                            <span class="kg-label">kg</span>
                        </div>
                    </div>
                    <div class="detail-row">
                        <span class="label">Descanso:</span>
                        <span class="value">${ex.rest}</span>
                    </div>
                    ${tutorialHTML}
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    // Agregar el botón para volver al inicio (selector) al final de los ejercicios
    const backBtn = document.createElement('button');
    backBtn.className = 'btn-volver';
    backBtn.textContent = 'Volver al inicio';
    backBtn.onclick = () => {
        document.getElementById('selector').scrollIntoView({ behavior: 'smooth' });
    };
    container.appendChild(backBtn);
}

function saveWeight(key, value) {
    localStorage.setItem(key, value);
}
