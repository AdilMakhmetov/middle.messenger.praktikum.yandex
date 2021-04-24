class EntryMixin {
  addListeners() {
    const form = document.getElementById('inputs');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      for (const item of data.entries()) {
        console.log(item[0], item[1]);
      }
    });
  }
}

export default new EntryMixin();
