// Load Levels
const loadLevels = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(data => displayLevels(data.data))
}

// Load Lessons
const loadLessons = (id) => {
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
        li.innerHTML = `<button onclick="loadLessons(${level.level_no})" class="btn btn-outline btn-primary font-semibold">
        <i class="fa-solid fa-book-open"></i> Lesson - ${level.level_no}
        </button>`;
        levelContainer.appendChild(li);
    }
}

// Display Lessons
const displayLessons = (words) => {
    const lessonContainer = document.getElementById('lesson-container');
    lessonContainer.innerHTML = '';
    words.forEach(word => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="bg-gray-100 border rounded-xl border-gray-200 shadow-lg">
                    <div class="text-center p-8">
                        <h2 class="text-xl font-bold">${word.word}</h2>
                        <p>${word.meaning}</p>
                        <h2 class="text-2xl font-bold text-bangla">"${word.meaning}" / ${word.pronunciation}</h2>
                        <div class="flex justify-between mt-4">
                            <button class="btn !bg-sky-100 hover:!bg-sky-400 transition"><i class="fa-solid fa-circle-info"></i></button>
                            <button class="btn !bg-sky-100 hover:!bg-sky-400 transition"><i class="fa-solid fa-volume-high"></i></button>
                        </div>
                    </div>
                </div>`;
        lessonContainer.append(div);
    });
}

loadLevels();


