// Base de datos de tu rutina
const routineData = {
    lunes: {
        name: "LUNES",
        focus: "Empuje (Pecho, hombros y tríceps)",
        warmup: "10-15 min caminadora",
        exercises: [
            { name: "Press de banca plano", reps: "4 x 8-10", rest: "2 - 3 min", gif: "https://fitcron.com/wp-content/uploads/2021/03/00251301-Barbell-Bench-Press_Chest-FIX_720.gif" },
            { name: "Press inclinado", reps: "3 x 10-12", rest: "2 min", gif: "https://fitcron.com/wp-content/uploads/2021/03/00471301-Barbell-Incline-Bench-Press_Chest_720.gif" },
            { name: "Pec Fly", reps: "3 x 12-15", rest: "60 - 90 seg", gif: "https://fitcron.com/wp-content/uploads/2021/03/05961301-Lever-Seated-Fly_Chest_720.gif" },
            { name: "Press militar", reps: "3 x 8-10", rest: "2 min", gif: "https://fitcron.com/wp-content/uploads/2021/04/42371301-Dumbbell-Seated-Close-Grip-Press_Shoulders_720.gif" },
            { name: "Extensión tríceps polea (Empuje)", reps: "3 x 10-12", rest: "60 - 90 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/01941301-Cable-Overhead-Triceps-Extension-rope-attachment_Upper-Arms_720.gif" },
            { name: "Extensión tríceps copa", reps: "3 x 10-12", rest: "60 - 90 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/21881301-Dumbbell-Seated-Triceps-Extension_Upper-Arms_720.gif" }
        ]
    },
    martes: {
        name: "MARTES",
        focus: "Tirón (Espalda, trapecio, bíceps, antebrazos)",
        warmup: "10-15 min caminadora",
        exercises: [
            { name: "Jalón frontal (o dominadas)", reps: "4 x 8-10", rest: "2 - 3 min", gif: "https://vitruve.fit/wp-content/uploads/2021/11/vitruvs.gif" },
            { name: "Remo al pecho", reps: "4 x 10-12", rest: "2 min", gif: "https://fitcron.com/wp-content/uploads/2021/04/02931301-Dumbbell-Bent-Over-Row_Back-FIX_720.gif" },
            { name: "Encogimiento de hombros", reps: "1 serie al fallo", rest: "Sin descanso", gif: "https://fitcron.com/wp-content/uploads/2021/04/04061301-Dumbbell-Shrug_Back-FIX_720.gif" },
            { name: "Curl de bíceps inclinado", reps: "3 x 10-12", rest: "60 - 90 seg", gif: "https://i.ibb.co/qMRW19mF/curl-biceps-inclinado.gif" },
            { name: "Curl martillo", reps: "3 x 10-12", rest: "60 - 90 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/16571301-Dumbbell-Cross-Body-Hammer-Curl-Version-2_Upper-Arms_720.gif" },
            { name: "Caminata del granjero", reps: "3 rondas al fallo", rest: "60 - 90 seg", gif: "https://api.smartworkout.app/asset/image/faf1833a-516b-42c5-ae8d-8dfed3238502" }
        ]
    },
    miercoles: {
        name: "MIÉRCOLES",
        focus: "Piernas A (Cuádriceps) + Core",
        warmup: "10-15 min en escaleras",
        exercises: [
            { name: "Sentadilla Hack", reps: "4 x 8-10", rest: "2 - 3 min", gif: "https://fitcron.com/wp-content/uploads/2021/04/19921301-Sled-Full-Hack-Squat_Thighs_720.gif" },
            { name: "Leg Press inclinado", reps: "3 x 10-12", rest: "2 min", gif: "https://media.tenor.com/yBaS_oBgidsAAAAM/gym.gif" },
            { name: "Leg Extension", reps: "3 x 12-15", rest: "60 - 90 seg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif" },
            { name: "Seated Leg Curl", reps: "3 x 10-12", rest: "60 - 90 seg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Seated-Leg-Curl.gif" },
            { name: "Aductor externo", reps: "3 x 12", rest: "60 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/05971301-Lever-Seated-Hip-Abduction_Hips-FIX_720.gif" },
            { name: "Aductor interno", reps: "3 x 12", rest: "60 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/05981301-Lever-Seated-Hip-Adduction_Thighs_720.gif" },
            { name: "Plank", reps: "3 x 1 min", rest: "45 - 60 seg", gif: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYgG4bgh4nlWffPq1nN031LSoyx2Gx6sWKqE12Qx9htZJN_oFKExLEmBg&s=10" },
            { name: "Twist ruso", reps: "3 x 15", rest: "45 - 60 seg", gif: "https://fitcron.com/wp-content/uploads/2024/05/06871301-Russian-Twist_Waist-FIX_720.gif" }
        ]
    },
    jueves: {
        name: "JUEVES",
        focus: "Torso Completo",
        warmup: "10-15 min caminadora",
        exercises: [
            { name: "Pull over", reps: "3 x 10-12", rest: "90s - 2 min", gif: "https://i.pinimg.com/originals/28/41/d4/2841d494a3adb9366896e14cc0291254.gif" },
            { name: "Fondos en paralelas", reps: "3 series al fallo", rest: "2 min", gif: "https://fitcron.com/wp-content/uploads/2021/03/02511301-Chest-Dip_Chest_720.gif" },
            { name: "Elevaciones en Y", reps: "3 x 12", rest: "60 - 90 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/35411301-Dumbbell-Incline-Y-Raise_Shoulders_720.gif" },
            { name: "Curl Predicador", reps: "3 x 10-12", rest: "60 - 90 seg", gif: "https://i.pinimg.com/originals/15/23/4b/15234bf2aaa9e75ae50c2921dbc722b2.gif" },
            { name: "Curl de muñeca", reps: "3 x 15", rest: "60 seg", gif: "https://fitcron.com/wp-content/uploads/2021/03/03641301-Dumbbell-One-arm-Wrist-Curl_Forearm-SFIX_720.gif" },
            { name: "Curl de muñeca inverso", reps: "3 x 15", rest: "60 seg", gif: "https://fitcron.com/wp-content/uploads/2021/03/03581301-Dumbbell-One-arm-Revers-Wrist-Curl_Forearms_720.gif" }
        ]
    },
    viernes: {
        name: "VIERNES",
        focus: "Piernas B (Femoral/Glúteos) + Core",
        warmup: "10-15 min en escaleras",
        exercises: [
            { name: "Peso muerto (Rumano)", reps: "4 x 8-10", rest: "2 - 3 min", gif: "https://fitcron.com/wp-content/uploads/2021/04/14591301-Dumbbell-Romanian-Deadlift_Hips_720.gif" },
            { name: "Hip Thrust", reps: "3 x 10-12", rest: "2 min", gif: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsfzDfAdNTvXEnkluPttFyejRPmHZo1Arc_lOV6D1mA&s=10" },
            { name: "Leg Curl boca abajo", reps: "3 x 10-12", rest: "60 - 90 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/05861301-Lever-Lying-Leg-Curl_Thighs_720.gif" },
            { name: "Patada de burro", reps: "3 x 12", rest: "60 seg", gif: "https://api.smartworkout.app/asset/image/51899e95-660f-44d9-b2ac-754dae5efef1" },
            { name: "Caminata del granjero", reps: "3 rondas al fallo", rest: "60 - 90 seg", gif: "https://api.smartworkout.app/asset/image/faf1833a-516b-42c5-ae8d-8dfed3238502" },
            { name: "Elevaciones de piernas", reps: "3 x 15", rest: "45 - 60 seg", gif: "https://fitcron.com/wp-content/uploads/2024/05/11631301-Lying-Leg-Raise_Waist_720.gif" },
            { name: "Máquina abdominal", reps: "3 x 12", rest: "45 - 60 seg", gif: "https://fitcron.com/wp-content/uploads/2021/04/18571301-Lever-Total-Abdominal-Crunch_Waist_720.gif" }
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
        // Llave única para guardar en memoria (Ej: "lunes-Press-de-banca-plano")
        const storageKey = `${dayKey}-${ex.name.replace(/\s+/g, '-')}`;
        // Recuperamos el peso si ya habías ingresado uno antes
        const savedWeight = localStorage.getItem(storageKey) || '';

        // Definimos qué mostrar en la caja del GIF (La imagen o el texto placeholder)
        const gifStyle = ex.gif ? 'padding: 0; border: none;' : '';
        const gifContent = ex.gif 
            ? `<img src="${ex.gif}" alt="${ex.name}" style="border-radius: 10px;">` 
            : `GIF<br>${ex.name}`;

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
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function saveWeight(key, value) {
    localStorage.setItem(key, value);
}
