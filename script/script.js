// Load Levels
const loadLevels = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(data => displayLevels(data.data))
}

// Load Lessons
const loadLessons = (id) => {
    const allBtn = document.querySelectorAll('.lesson-btn');
    const clickedBtn = document.getElementById("lesson-btn-" + id);
    allBtn.forEach(button => {
        button.classList.remove("active");
    });
    clickedBtn.classList.add("active");
    url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLessons(data.data))
}


// Display Levels
const displayLevels = (levels) => {
    const levelContainer = document.getElementById('level-container');
    for (const level of levels) {
        const li = document.createElement('li');
        li.innerHTML = `<button id="lesson-btn-${level.level_no}" onclick="loadLessons(${level.level_no})" class="btn btn-outline btn-primary font-semibold lesson-btn">
        <i class="fa-solid fa-book-open"></i> Lesson - ${level.level_no}
        </button>`;
        levelContainer.appendChild(li);
    }
}

// Display Lessons
const displayLessons = (words) => {
    const lessonContainer = document.getElementById('lesson-container');
    lessonContainer.innerHTML = '';
    if (words.length === 0){
        lessonContainer.innerHTML = `
        <div class="col-span-3 w-11/12 mx-auto p-4 rounded-xl shadow-lg border border-gray-300 text-center py-12">
            <p class="text-bangla text-gray-400 mb-4">এই লেসনে কোন শব্দ নেই !</p>
        </div>`;
        return;
    }
    words.forEach(word => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="bg-gray-100 border rounded-xl border-gray-200 shadow-lg">
                    <div class="text-center flex flex-col items-center justify-center gap-4 p-8">
                        <h2 class="text-xl font-bold">${word.word? word.word : "Word not Found"}</h2>
                        <p>Meaning / Pronounciation</p>
                        <h2 class="text-2xl font-bold text-bangla">"${word.meaning? word.meaning : "Meaning not Found"}" / ${word.pronunciation? word.pronunciation : "Pronunciation not Found"}</h2>
                        <div class="w-full flex justify-between mt-4">
                            <button class="btn !bg-sky-100 hover:!bg-sky-400 transition"><i class="fa-solid fa-circle-info"></i></button>
                            <button class="btn !bg-sky-100 hover:!bg-sky-400 transition"><i class="fa-solid fa-volume-high"></i></button>
                        </div>
                    </div>
                </div>`;
        lessonContainer.append(div);
    });
}

loadLevels();


