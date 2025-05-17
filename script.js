document.getElementById("journalForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const form = event.target;

  const agenda = form.agenda.value;
  const syukur = form.syukur.value;
  const pelajaran = form.pelajaran.value;
  const perbaikan = form.perbaikan.value;
  const mood = form.mood.value;
  const produktivitas = form.produktivitas.value;
  const pagi = form.pagi.value;
  const siang = form.siang.value;
  const malam = form.malam.value;
  const catatan = form.catatan.value;
  const tugas = form.tugas.value;

  const foto = document.getElementById("foto").files[0];
  let fotoURL = "";
  if (foto) {
    fotoURL = URL.createObjectURL(foto);
  }

  const output = `
🗓️ Agenda:
${agenda}

🌼 Hal yang disyukuri:
${syukur}

📘 Pelajaran yang didapat:
${pelajaran}

🔁 Hal yang perlu diperbaiki:
${perbaikan}

😄 Mood hari ini: ${mood}
📊 Produktivitas: ${produktivitas}%

🍽️ Makanan Hari Ini:
- Pagi: ${pagi}
- Siang: ${siang}
- Malam: ${malam}

📝 Catatan:
${catatan}

🎯 Daftar Tugas:
${tugas}
  `;

  const hasilDiv = document.getElementById("hasilJurnal");
  hasilDiv.textContent = output;

  if (fotoURL) {
    const img = document.createElement("img");
    img.src = fotoURL;
    img.style.maxWidth = "100%";
    img.style.marginTop = "10px";
    hasilDiv.appendChild(img);
  }

  form.reset();
  form.produktivitas.nextElementSibling.value = "50%";
});

// Musik
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("musicToggle");

toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "🔇 Matikan Musik";
  } else {
    music.pause();
    toggleBtn.textContent = "🔊 Nyalakan Musik";
  }
});
